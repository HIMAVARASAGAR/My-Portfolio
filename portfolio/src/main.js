import '../index.css';
import { ProjectRadar } from './nexus.js';

document.addEventListener('DOMContentLoaded', () => {

  // ═══════════════════════════════════════════════════════════
  // 1. PROJECT RADAR & INTEGRATED INSPECTOR
  // ═══════════════════════════════════════════════════════════
  const nexusCanvas = document.getElementById('nexus-canvas');
  let radar = null;

  const inspNum = document.getElementById('insp-num');
  const inspTag = document.getElementById('insp-tag');
  const inspTitle = document.getElementById('insp-title');
  const inspDesc = document.getElementById('insp-desc');
  const inspJumpBtn = document.getElementById('insp-jump-btn');

  let currentSelectedNode = null;

  const updateInspector = (node) => {
    if (!node) return;
    currentSelectedNode = node;

    if (inspNum) inspNum.textContent = node.num;
    if (inspTag) inspTag.textContent = node.tag;
    if (inspTitle) inspTitle.textContent = node.title;
    if (inspDesc) inspDesc.textContent = node.summary;
  };

  if (inspJumpBtn) {
    inspJumpBtn.addEventListener('click', () => {
      if (!currentSelectedNode) return;
      const card = document.querySelector(`article[data-num="${currentSelectedNode.id}"]`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('flash-highlight');
        setTimeout(() => card.classList.remove('flash-highlight'), 1200);
      }
    });
  }

  if (nexusCanvas) {
    radar = new ProjectRadar(nexusCanvas, (node) => updateInspector(node));

    // Radar Filter Tabs
    const radarTabs = document.querySelectorAll('.radar-tab');
    radarTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        radarTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');
        if (radar) radar.setFilter(filter);

        // Also sync page filter chips
        syncPageFilterChips(filter);
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 2. SMOOTH SCROLLING FOR NAVIGATION ANCHORS
  // ═══════════════════════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════
  // 3. M3 INK RIPPLE EFFECT ON CLICK
  // ═══════════════════════════════════════════════════════════
  document.querySelectorAll('.ripple-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple-circle');

      const existingRipple = this.querySelector('.ripple-circle');
      if (existingRipple) existingRipple.remove();

      this.appendChild(circle);
      setTimeout(() => circle.remove(), 650);
    });
  });

  // ═══════════════════════════════════════════════════════════
  // 4. 3D CARD TILT & SPECULAR SHEEN + RADAR SYNC
  // ═══════════════════════════════════════════════════════════
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    const cardContent = card.querySelector('.project-card__content');
    const cardNum = card.getAttribute('data-num');

    card.addEventListener('mouseenter', () => {
      // Deep integration: sync radar active node when hovering project card
      if (radar && cardNum) {
        radar.setActiveNodeById(cardNum);
      }
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Mouse percent for glare gradient
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${xPercent}%`);
      card.style.setProperty('--mouse-y', `${yPercent}%`);

      // Gentle 3D Tilt calculation (subtle, tactile)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const tiltX = -deltaY * 4.5;
      const tiltY = deltaX * 4.5;

      if (cardContent) {
        cardContent.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      if (cardContent) {
        cardContent.style.transform = '';
      }
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });

  // ═══════════════════════════════════════════════════════════
  // 5. M3 CATEGORY FILTER CHIPS (BIDIRECTIONAL SYNC)
  // ═══════════════════════════════════════════════════════════
  const filterChips = document.querySelectorAll('.m3-filter-chip');
  const projectCards = document.querySelectorAll('.tilt-card');

  const applyProjectFilter = (filter) => {
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.classList.remove('filtered-out');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          if (card.getAttribute('data-category') !== filter) {
            card.classList.add('filtered-out');
          }
        }, 300);
      }
    });
  };

  const syncPageFilterChips = (filter) => {
    filterChips.forEach(chip => {
      const match = chip.getAttribute('data-filter') === filter;
      chip.classList.toggle('active', match);
      chip.setAttribute('aria-selected', match ? 'true' : 'false');
    });
    applyProjectFilter(filter);
  };

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.getAttribute('data-filter');
      filterChips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');

      applyProjectFilter(filter);

      // Sync radar tabs
      document.querySelectorAll('.radar-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-filter') === filter);
      });
      if (radar) radar.setFilter(filter);
    });
  });

  // ═══════════════════════════════════════════════════════════
  // 6. COPY EMAIL WITH M3 SNACKBAR TOAST
  // ═══════════════════════════════════════════════════════════
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const snackbar = document.getElementById('m3-snackbar');
  let snackbarTimeout = null;

  const showSnackbar = (message) => {
    if (!snackbar) return;
    const msgEl = snackbar.querySelector('.snackbar-message');
    if (msgEl) msgEl.textContent = message;

    snackbar.classList.add('active');
    clearTimeout(snackbarTimeout);
    snackbarTimeout = setTimeout(() => {
      snackbar.classList.remove('active');
    }, 3200);
  };

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'himavarasagar6675@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showSnackbar(`Copied: ${email}`);
        }).catch(() => {
          window.location.href = `mailto:${email}`;
        });
      } else {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 7. M3 FLOATING QUICK-DOCK VISIBILITY ON SCROLL
  // ═══════════════════════════════════════════════════════════
  const floatingDock = document.getElementById('floating-dock');

  const onScroll = () => {
    const scrollY = window.scrollY;

    // Show floating dock past hero
    if (floatingDock) {
      if (scrollY > 350) {
        floatingDock.classList.add('visible');
      } else {
        floatingDock.classList.remove('visible');
      }
    }

    // Active Section Detection
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.dock-link').forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = '#FFFFFF';
            link.style.backgroundColor = 'rgba(196, 90, 60, 0.4)';
          } else {
            link.style.color = '';
            link.style.backgroundColor = '';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ═══════════════════════════════════════════════════════════
  // 8. SCROLL REVEALS (INTERSECTION OBSERVER)
  // ═══════════════════════════════════════════════════════════
  const revealItems = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('revealed'));
  }

  // ═══════════════════════════════════════════════════════════
  // 9. INTERACTIVE LAB OSCILLOSCOPE FREQUENCY MODULATION
  // ═══════════════════════════════════════════════════════════
  const labRows = document.querySelectorAll('.lab__row');
  const meterFreq = document.querySelector('.meter-freq');
  const meterWave = document.querySelector('.meter-wave path');

  const freqs = ['1.000 kHz', '2.450 GHz', '10.50 MHz', '50.00 kHz', '0.340 THz'];
  labRows.forEach((row, idx) => {
    row.addEventListener('mouseenter', () => {
      if (meterFreq) meterFreq.textContent = `FREQ: ${freqs[idx % freqs.length]}`;
      if (meterWave) {
        meterWave.style.stroke = 'var(--md-primary)';
        meterWave.style.strokeWidth = '2.5';
      }
    });

    row.addEventListener('mouseleave', () => {
      if (meterFreq) meterFreq.textContent = 'FREQ: 1.000 kHz';
      if (meterWave) {
        meterWave.style.stroke = '';
        meterWave.style.strokeWidth = '';
      }
    });
  });

});
