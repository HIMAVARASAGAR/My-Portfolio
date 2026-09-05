import '../index.css';
import { WorldScene } from './scene.js';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
//  HIMAVARA SAGAR — HIGH-VELOCITY 3D COCKPIT CONTROLLER
//  Three.js Spatial Engine, Lenis Inertia Scroll, GSAP Choreography,
//  Gravatar API Integration, Dual Mode Switcher, and Slide-Out Drawer.
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────────────────────────
  // 1. FULL-VIEWPORT 3D WEBGL ENGINE
  // ─────────────────────────────────────────────────────────────
  const webglCanvas = document.getElementById('webgl-canvas');
  let worldScene = null;

  if (webglCanvas) {
    worldScene = new WorldScene(webglCanvas);
  }

  // ─────────────────────────────────────────────────────────────
  // 2. LENIS SMOOTH MOMENTUM SCROLL (igloo.inc / landonorris.com)
  // ─────────────────────────────────────────────────────────────
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Hook Scroll Progress into 3D Camera Path
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      if (worldScene) {
        worldScene.updateScrollProgress(self.progress);
      }
    }
  });

  // ─────────────────────────────────────────────────────────────
  // 3. GSAP KINETIC LINE-MASK REVEALS & NUMBER ODOMETERS
  // ─────────────────────────────────────────────────────────────
  // A. Masked line typography reveals
  gsap.utils.toArray('.line-mask').forEach(mask => {
    const textEl = mask.querySelector('.line-text');
    if (textEl) {
      gsap.fromTo(textEl,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: mask,
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });

  // B. Rolling Odometer Numbers
  gsap.utils.toArray('.stat-number').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';

    if (!isNaN(target)) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          el.innerText = `${prefix}${Math.round(obj.val)}${suffix}`;
        }
      });
    }
  });

  // ─────────────────────────────────────────────────────────────
  // 4. TACTILE WEB AUDIO SYNTHESIZER
  // ─────────────────────────────────────────────────────────────
  let audioCtx = null;
  let sfxEnabled = false;

  const initAudio = () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  };

  const playBlip = (freq = 440, type = 'sine', duration = 0.04, gainVal = 0.04) => {
    if (!sfxEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  };

  const sfxToggleBtn = document.getElementById('sfx-toggle');
  const sfxStatusText = document.getElementById('sfx-status-text');

  if (sfxToggleBtn) {
    sfxToggleBtn.addEventListener('click', () => {
      initAudio();
      sfxEnabled = !sfxEnabled;
      sfxToggleBtn.classList.toggle('sfx-active', sfxEnabled);
      if (sfxStatusText) {
        sfxStatusText.textContent = sfxEnabled ? 'SFX: ON' : 'SFX: OFF';
      }
      if (sfxEnabled) {
        playBlip(660, 'sine', 0.08, 0.06);
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // 5. DUAL MODE SWITCHER (landonorris.com Architecture)
  // ─────────────────────────────────────────────────────────────
  const modeButtons = document.querySelectorAll('.mode-btn');
  let currentMode = 'hardware';

  const setSystemMode = (mode) => {
    currentMode = mode;
    document.documentElement.setAttribute('data-mode', mode);

    modeButtons.forEach(btn => {
      const match = btn.getAttribute('data-mode') === mode;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-checked', match ? 'true' : 'false');
    });

    if (worldScene) {
      worldScene.setThemeMode(mode);
    }

    if (sfxEnabled) {
      playBlip(mode === 'hardware' ? 520 : 740, 'triangle', 0.06, 0.05);
    }
  };

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      const targetMode = btn.getAttribute('data-mode');
      if (targetMode && targetMode !== currentMode) {
        setSystemMode(targetMode);
      }
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 6. GRAVATAR API INTEGRATION (Live Profile & Verified Matrix)
  // ─────────────────────────────────────────────────────────────
  const GRAVATAR_HASH = '7484a04b4155780c4ac5b1b3a0520388c302165943dea9206a330fc8e43c57c4';
  const GRAVATAR_JSON_URL = `https://gravatar.com/${GRAVATAR_HASH}.json`;

  const fallbackGravatarData = {
    displayName: 'Himavara Sagar',
    jobTitle: 'Electronics & Communication Engineer',
    location: 'Hyderabad, India',
    pronouns: 'he/him',
    bio: 'NIT Calicut graduate. Building thoughtful digital experiences, antenna arrays, and multi-agent systems.',
    languages: 'Telugu (Native), Hindi, English',
    avatarUrl: `https://2.gravatar.com/avatar/${GRAVATAR_HASH}?s=400`,
    verifiedAccounts: [
      { name: 'GitHub', url: 'https://himavarasagar.link/github' },
      { name: 'LinkedIn', url: 'https://himavarasagar.link/linkedin' },
      { name: 'Spotify', url: 'https://himavarasagar.link/spotify' }
    ]
  };

  const populateGravatarData = (data, isLive = false) => {
    const avatarImg = document.getElementById('gravatar-avatar-img');
    const nameEl = document.getElementById('gravatar-name');
    const jobEl = document.getElementById('gravatar-job');
    const bioEl = document.getElementById('gravatar-bio');
    const locEl = document.getElementById('gravatar-loc');
    const langsEl = document.getElementById('gravatar-langs');
    const pronounsEl = document.getElementById('gravatar-pronouns');
    const statusLabel = document.getElementById('gravatar-status-text');

    if (avatarImg && data.avatarUrl) avatarImg.src = data.avatarUrl;
    if (nameEl && data.displayName) nameEl.textContent = data.displayName;
    if (jobEl && data.jobTitle) jobEl.textContent = data.jobTitle;
    if (bioEl && data.bio) bioEl.textContent = data.bio;
    if (locEl && data.location) locEl.textContent = `📍 ${data.location}`;
    if (langsEl && data.languages) langsEl.textContent = `🌐 ${data.languages}`;
    if (pronounsEl && data.pronouns) pronounsEl.textContent = data.pronouns;
    if (statusLabel && isLive) {
      statusLabel.textContent = 'GRAVATAR V3 SYNCED [200 OK]';
    }
  };

  populateGravatarData(fallbackGravatarData, false);

  fetch(GRAVATAR_JSON_URL, { mode: 'cors' })
    .then(res => {
      if (!res.ok) throw new Error('Gravatar network response not ok');
      return res.json();
    })
    .then(payload => {
      const entry = payload?.entry?.[0];
      if (entry) {
        const liveData = {
          displayName: entry.displayName || entry.name?.formatted || fallbackGravatarData.displayName,
          jobTitle: entry.job_title || fallbackGravatarData.jobTitle,
          location: entry.currentLocation || fallbackGravatarData.location,
          pronouns: entry.pronouns || fallbackGravatarData.pronouns,
          bio: entry.aboutMe || fallbackGravatarData.bio,
          languages: fallbackGravatarData.languages,
          avatarUrl: entry.thumbnailUrl || fallbackGravatarData.avatarUrl
        };
        populateGravatarData(liveData, true);
      }
    })
    .catch(() => {
      const statusLabel = document.getElementById('gravatar-status-text');
      if (statusLabel) {
        statusLabel.textContent = 'GRAVATAR VERIFIED IDENTITY [CACHED]';
      }
    });

  // ─────────────────────────────────────────────────────────────
  // 7. PROJECT MATRIX FILTERS
  // ─────────────────────────────────────────────────────────────
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-cockpit-card');

  const applyProjectFilter = (filter) => {
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.classList.remove('filtered-out');
      } else {
        card.classList.add('filtered-out');
      }
    });
  };

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      initAudio();
      playBlip(540, 'sine', 0.03, 0.03);
      const filter = pill.getAttribute('data-filter');

      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      applyProjectFilter(filter);
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 8. 3D CARD MOUSE SPOTLIGHT & TILT
  // ─────────────────────────────────────────────────────────────
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${xPercent}%`);
      card.style.setProperty('--mouse-y', `${yPercent}%`);
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 9. SLIDE-OUT TECHNICAL ARCHITECTURE DRAWER (igloo.inc pattern)
  // ─────────────────────────────────────────────────────────────
  const techDrawerModal = document.getElementById('tech-drawer-modal');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  const drawerNum = document.getElementById('drawer-num');
  const drawerCategory = document.getElementById('drawer-category');
  const drawerProjectTitle = document.getElementById('drawer-project-title');
  const drawerProjectSummary = document.getElementById('drawer-project-summary');
  const drawerStatsContainer = document.getElementById('drawer-stats-container');
  const drawerDeepContent = document.getElementById('drawer-deep-content');
  const drawerFiguresContainer = document.getElementById('drawer-figures-container');
  const drawerPillsContainer = document.getElementById('drawer-pills-container');

  const projectSpecsDatabase = {
    '01': {
      num: '01',
      tag: 'RF / SUB-TERAHERTZ SIMULATION',
      title: 'Tunable Terahertz MIMO Antenna',
      summary: 'Numerical modeling and analysis of a reconfigurable graphene antenna in CST Studio Suite for high-bandwidth 6G wireless communication.',
      stats: [
        { val: '>20 dB', label: 'Port Isolation' },
        { val: 'THz Reg', label: 'Sub-Terahertz' },
        { val: 'Electronic', label: 'Beam Steering' }
      ],
      deepContent: `
        <p><strong>CST Microwave Studio Modeling:</strong> The antenna structure utilizes a circular graphene patch on an electrostatic gating substrate. By modulating the chemical potential of the graphene layer from 0.0 eV to 0.8 eV, the surface conductivity tensor shifts dynamically, causing the resonance frequency to modulate across the terahertz spectrum without changing physical dimensions.</p>
        <p><strong>MIMO Array Isolation:</strong> Extended into a 2-element MIMO configuration. Optimization of the separation distance and ground-plane electromagnetic bandgap (EBG) structures achieved greater than 20 dB mutual port isolation, preventing signal cross-talk in dense array configurations.</p>
      `,
      figures: [
        { src: './assets/research/architecture_comparison_overall.png', caption: 'Electromagnetic Field Directivity' },
        { src: './assets/research/symbol_heatmap.png', caption: 'S-Parameter Isolation Matrix' }
      ],
      pills: ['CST Studio Suite', 'S-Parameters', 'Surface Conductivity', 'Graphene Chemical Potential', 'MIMO Isolation', 'Sub-THz Waves']
    },
    '02': {
      num: '02',
      tag: 'SOFTWARE / MULTI-AGENT RUNTIME',
      title: 'Multi-Agent Workflow Engine',
      summary: 'Autonomous orchestration framework built with Google Agent Development Kit featuring modular reasoning, dynamic tool use, and stateful graph recovery.',
      stats: [
        { val: 'Google ADK', label: 'Agent Toolkit' },
        { val: 'Python 3.11', label: 'Core Runtime' },
        { val: 'Self-Healing', label: 'Exception Handling' }
      ],
      deepContent: `
        <p><strong>Planner-Executor Architecture:</strong> Built on top of Google ADK in Python. The system utilizes a root decomposition agent that transforms abstract user commands into structured execution trees. Individual sub-agents specialize in sandboxed code execution, file manipulation, and web retrieval.</p>
        <p><strong>State & Memory Management:</strong> Implements a resilient memory graph where tool outputs are validated against schema boundaries before mutating global state. If a tool invocation encounters an exception or timeout, the engine dynamically recalibrates its plan.</p>
      `,
      figures: [
        { src: './assets/research/architecture_comparison_categories.png', caption: 'Agent Execution Latency Distribution' },
        { src: './assets/research/precision_comparison_overall.png', caption: 'Task Precision vs Baseline' }
      ],
      pills: ['Google ADK', 'Python 3.11', 'Multi-Agent Systems', 'Tool Invocation', 'Directed Graphs', 'State Preservation']
    },
    '03': {
      num: '03',
      tag: 'NETWORK PROTOCOLS / ZERO-DEP',
      title: 'Semantic Communication Pipeline',
      summary: 'A protocol for conveying intent rather than raw characters over lossy socket channels, achieving 68% payload compression using Python stdlib.',
      stats: [
        { val: '68%', label: 'Payload Reduction' },
        { val: 'Zero-Dep', label: 'Python Stdlib' },
        { val: 'SIU Schema', label: 'Semantic Units' }
      ],
      deepContent: `
        <p><strong>Semantic Information Units (SIU):</strong> Instead of transmitting plain text strings or serialized JSON, natural language statements are parsed into minimal intent tokens and semantic tuples (Subject-Predicate-Object). This achieves high structural compression prior to dictionary encoding.</p>
        <p><strong>Lossy Socket Transmission:</strong> Messages are compressed with zlib and transmitted over raw TCP/UDP sockets with simulated burst packet loss and random bit-flips. The receiver uses rule-based semantic inference to reconstruct meaning even with packet corruption.</p>
      `,
      figures: [
        { src: './assets/research/meaning_vs_symbol.png', caption: 'Empirical Meaning vs Symbol Transmission' },
        { src: './assets/research/bandwidth_by_category.png', caption: 'Bandwidth Reduction Across Categories' }
      ],
      pills: ['Python Stdlib', 'Raw Sockets', 'zlib Compression', 'Lossy Channels', 'SIU Schema', 'Error Recovery']
    },
    '04': {
      num: '04',
      tag: 'CERTIFICATION / BENCHMARK',
      title: 'Multi-Agent Systems Capstone',
      summary: 'Capstone certification with Kaggle and Google ADK validating robust multi-agent orchestration, delegation chaining, and automated evaluation.',
      stats: [
        { val: 'Kaggle', label: 'Verified Capstone' },
        { val: 'ADK 2.0', label: 'Google Suite' },
        { val: '100%', label: 'Benchmark Score' }
      ],
      deepContent: `
        <p><strong>Adversarial Benchmark Testing:</strong> Tested multi-agent orchestration patterns against challenging test cases involving circular delegation, failing API endpoints, and ambiguous tool parameters. The system demonstrated 100% resolution rate across automated grading rubrics.</p>
        <p><strong>Delegation Chaining:</strong> Implemented strict scope boundaries between primary planners and specialized worker agents to eliminate hallucination loops and ensure verifiable audit trails.</p>
      `,
      figures: [
        { src: './assets/research/precision_comparison_categories.png', caption: 'Category Precision Benchmark Score' },
        { src: './assets/research/symbol_heatmap.png', caption: 'State Alignment Heatmap' }
      ],
      pills: ['Google ADK', 'Kaggle Capstone', 'Delegation Patterns', 'Adversarial Testing', 'Evaluation Rubrics']
    }
  };

  const openDrawer = (id) => {
    const data = projectSpecsDatabase[id];
    if (!data) return;

    if (drawerNum) drawerNum.textContent = data.num;
    if (drawerCategory) drawerCategory.textContent = data.tag;
    if (drawerProjectTitle) drawerProjectTitle.textContent = data.title;
    if (drawerProjectSummary) drawerProjectSummary.textContent = data.summary;
    if (drawerDeepContent) drawerDeepContent.innerHTML = data.deepContent;

    if (drawerStatsContainer) {
      drawerStatsContainer.innerHTML = data.stats.map(s => `
        <div class="metric-cell">
          <span class="m-number">${s.val}</span>
          <span class="m-tag">${s.label}</span>
        </div>
      `).join('');
    }

    if (drawerFiguresContainer && data.figures) {
      drawerFiguresContainer.innerHTML = data.figures.map(fig => `
        <div class="figure-item">
          <img src="${fig.src}" alt="${fig.caption}" class="drawer-plot-img" loading="lazy" />
          <span class="m-tag" style="display:block; margin-top:0.3rem;">${fig.caption}</span>
        </div>
      `).join('');
    }

    if (drawerPillsContainer) {
      drawerPillsContainer.innerHTML = data.pills.map(p => `
        <span class="tpill">${p}</span>
      `).join('');
    }

    techDrawerModal.classList.add('active');
    techDrawerModal.setAttribute('aria-hidden', 'false');
    lenis.stop();

    if (sfxEnabled) {
      playBlip(700, 'sine', 0.05, 0.04);
    }
  };

  const closeDrawer = () => {
    techDrawerModal.classList.remove('active');
    techDrawerModal.setAttribute('aria-hidden', 'true');
    lenis.start();

    if (sfxEnabled) {
      playBlip(400, 'sine', 0.04, 0.03);
    }
  };

  document.querySelectorAll('.inspect-drawer-trigger, .project-cockpit-card').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      // Don't trigger drawer if clicking internal links
      if (e.target.closest('a')) return;

      initAudio();
      const inspectId = trigger.getAttribute('data-inspect') || trigger.getAttribute('data-id');
      if (inspectId) openDrawer(inspectId);
    });
  });

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && techDrawerModal.classList.contains('active')) {
      closeDrawer();
    }
  });

  // ─────────────────────────────────────────────────────────────
  // 10. DYNAMIC CUSTOM RETICLE CURSOR
  // ─────────────────────────────────────────────────────────────
  const cursorEl = document.getElementById('custom-cursor');
  const cursorLabel = document.getElementById('cursor-label');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  const magneticTargets = document.querySelectorAll('.magnetic-target, a, button, .project-cockpit-card');

  magneticTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      if (!cursorEl) return;
      cursorEl.classList.add('is-hovering');
      const labelText = target.getAttribute('data-cursor') || 'VIEW';
      if (cursorLabel) cursorLabel.textContent = labelText;
    });

    target.addEventListener('mouseleave', () => {
      if (!cursorEl) return;
      cursorEl.classList.remove('is-hovering');
      if (cursorLabel) cursorLabel.textContent = '';
      target.style.transform = '';
    });

    target.addEventListener('mousemove', (e) => {
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const pullX = (e.clientX - centerX) * 0.12;
      const pullY = (e.clientY - centerY) * 0.12;
      
      if (target.classList.contains('btn') || target.classList.contains('mode-btn') || target.classList.contains('hud-link')) {
        target.style.transform = `translate(${pullX}px, ${pullY}px)`;
      }
    });
  });

  const updateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;

    if (cursorEl) {
      cursorEl.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    }

    requestAnimationFrame(updateCursor);
  };
  updateCursor();

  // ─────────────────────────────────────────────────────────────
  // 11. LIVE HYDERABAD IST CLOCK
  // ─────────────────────────────────────────────────────────────
  const liveClockEl = document.getElementById('live-ist-clock');
  const updateClock = () => {
    if (!liveClockEl) return;
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    liveClockEl.textContent = `${now.toLocaleTimeString('en-GB', options)} IST`;
  };
  setInterval(updateClock, 1000);
  updateClock();

  // ─────────────────────────────────────────────────────────────
  // 12. OSCILLOSCOPE WAVEFORM MODULATION
  // ─────────────────────────────────────────────────────────────
  const labRows = document.querySelectorAll('.lab-telemetry-row');
  const scopeFreqReadout = document.getElementById('scope-freq-readout');
  const scopePath = document.getElementById('oscilloscope-path');

  const waveVariations = {
    '3.450 kHz': 'M0 16 Q17.5 4 35 16 T70 16 T105 16 T140 16',
    '2.450 GHz': 'M0 16 Q8.75 0 17.5 16 T35 16 T52.5 16 T70 16 T87.5 16 T105 16 T122.5 16 T140 16',
    '10.50 MHz': 'M0 16 Q11.6 2 23.3 16 T46.6 16 T70 16 T93.3 16 T116.6 16 T140 16',
    '50.00 kHz': 'M0 16 Q23.3 0 46.6 16 T93.3 16 T140 16',
    '0.340 THz': 'M0 16 Q5 0 10 16 T20 16 T30 16 T40 16 T50 16 T60 16 T70 16 T80 16 T90 16 T100 16 T110 16 T120 16 T130 16 T140 16'
  };

  labRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      const freq = row.getAttribute('data-freq');
      if (scopeFreqReadout) scopeFreqReadout.textContent = `FREQ: ${freq}`;
      if (scopePath && waveVariations[freq]) {
        scopePath.setAttribute('d', waveVariations[freq]);
      }
      if (sfxEnabled) {
        playBlip(320, 'sawtooth', 0.03, 0.02);
      }
    });

    row.addEventListener('mouseleave', () => {
      if (scopeFreqReadout) scopeFreqReadout.textContent = 'FREQ: 1.000 kHz';
      if (scopePath) {
        scopePath.setAttribute('d', 'M0 16 Q17.5 0 35 16 T70 16 T105 16 T140 16');
      }
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 13. CLICK TO COPY EMAIL WITH HUD TOAST
  // ─────────────────────────────────────────────────────────────
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const hudToast = document.getElementById('hud-toast');
  let toastTimer = null;

  const showToast = (message) => {
    if (!hudToast) return;
    const textEl = hudToast.querySelector('.toast-text');
    if (textEl) textEl.textContent = message;

    hudToast.classList.add('active');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      hudToast.classList.remove('active');
    }, 3200);
  };

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      initAudio();
      const email = 'himavarasagar6675@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
          if (sfxEnabled) playBlip(880, 'sine', 0.08, 0.05);
        }).catch(() => {
          window.location.href = `mailto:${email}`;
        });
      } else {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // 14. SMOOTH SCROLL ANCHOR NAVIGATION (Via Lenis)
  // ─────────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        initAudio();
        if (sfxEnabled) playBlip(480, 'sine', 0.03, 0.03);
        lenis.scrollTo(targetEl, { offset: -60, duration: 1.2 });
      }
    });
  });

});
