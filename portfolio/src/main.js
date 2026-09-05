/**
 * ═══════════════════════════════════════════════════════════════════
 * HIMAVARA SAGAR — OPENAI RESEARCH PUBLICATION RUNTIME
 * Interactive 3D Terahertz Wave Engine · o1 Reasoning Traces ·
 * Tabbed Code Switcher · Gravatar v3 API · Theme State Management
 * ═══════════════════════════════════════════════════════════════════
 */

import * as THREE from 'three';

/* ═══════════════════ 1. THEME SWITCHER ═══════════════════ */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('hs-research-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('hs-research-theme', next);
    });
  }
}

/* ═══════════════════ 2. READING PROGRESS & ACTIVE NAV ═══════════════════ */
function initNavigation() {
  const progressBar = document.getElementById('nav-progress-bar');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max((scrollY / (docHeight || 1)) * 100, 0), 100);

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // Active Section Detection
    let currentSection = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }, { passive: true });
}

/* ═══════════════════ 3. OPENAI o1 REASONING ACCORDION ═══════════════════ */
function initReasoningAccordion() {
  const toggleBtn = document.getElementById('o1-toggle-btn');
  const drawer = document.getElementById('o1-drawer');
  const chevron = document.getElementById('o1-chevron');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);

      if (isExpanded) {
        drawer.hidden = true;
        if (chevron) chevron.textContent = '▾';
      } else {
        drawer.hidden = false;
        if (chevron) chevron.textContent = '▴';
      }
    });
  }
}

/* ═══════════════════ 4. TABBED CODE SWITCHER ═══════════════════ */
function initCodeSwitcher() {
  const tabs = document.querySelectorAll('.code-tab');
  const panels = document.querySelectorAll('.code-panel');
  const copyBtn = document.getElementById('copy-code-btn');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetTab = tab.getAttribute('data-tab');
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const activePanel = document.querySelector('.code-panel.active code');
      if (activePanel) {
        try {
          await navigator.clipboard.writeText(activePanel.textContent || '');
          const originalHTML = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span>✓</span><span>Copied!</span>';
          setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
          }, 2000);
        } catch (err) {
          console.warn('Clipboard write failed:', err);
        }
      }
    });
  }
}

/* ═══════════════════ 5. BIBTEX COPY ═══════════════════ */
function initBibTeXCopy() {
  const copyBtn = document.getElementById('copy-bibtex-btn');
  const bibtexCode = document.getElementById('bibtex-code');
  const btnText = document.getElementById('bibtex-btn-text');

  if (copyBtn && bibtexCode && btnText) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(bibtexCode.textContent || '');
        btnText.textContent = 'Copied to Clipboard!';
        setTimeout(() => {
          btnText.textContent = 'Copy BibTeX';
        }, 2500);
      } catch (err) {
        console.warn('Copy failed:', err);
      }
    });
  }
}

/* ═══════════════════ 6. GRAVATAR V3 REST API INTEGRATION ═══════════════════ */
async function initGravatar() {
  const hash = '7484a04b4155780c4ac5b1b3a0520388c302165943dea9206a330fc8e43c57c4';
  const apiUrl = `https://gravatar.com/${hash}.json`;

  try {
    const res = await fetch(apiUrl, { mode: 'cors' });
    if (res.ok) {
      const data = await res.json();
      const profile = data.entry?.[0];
      if (profile) {
        const nameEl = document.getElementById('gravatar-name');
        const bioEl = document.getElementById('gravatar-bio');
        const avatarImg = document.getElementById('gravatar-avatar-img');

        if (nameEl && profile.displayName) {
          nameEl.textContent = profile.displayName;
        }
        if (bioEl && profile.aboutMe) {
          bioEl.textContent = profile.aboutMe;
        }
        if (avatarImg && profile.thumbnailUrl) {
          avatarImg.src = `${profile.thumbnailUrl}?s=400`;
        }
      }
    }
  } catch (err) {
    // Offline or CORS protected — fallback data already securely hardcoded into DOM
    console.debug('Gravatar dynamic fetch fallback engaged.');
  }
}

/* ═══════════════════ 7. INTERACTIVE 3D TERAHERTZ RESIDUAL WAVE SIMULATOR ═══════════════════ */
class TerahertzWaveSimulator {
  constructor(canvasMountId) {
    this.container = document.getElementById(canvasMountId);
    if (!this.container) return;

    this.canvas = document.getElementById('thz-canvas');
    if (!this.canvas) return;

    this.frequency = 0.34; // 0.34 THz default
    this.chemicalPotential = 0.50; // 0.50 eV default
    this.isWireframe = false;

    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this.initScene();
    this.initWaveGeometry();
    this.initGrapheneResonator();
    this.initControls();
    this.bindEvents();
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x08080A);

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.set(0, 8, 14);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Ambient and Directional Scientific Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x10a37f, 1.8);
    keyLight.position.set(5, 10, 7);
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x60a5fa, 1.2);
    fillLight.position.set(-5, -5, -5);
    this.scene.add(fillLight);
  }

  initWaveGeometry() {
    // Sub-THz Travelling Dipole Wave Surface
    this.gridSize = 64;
    this.waveGeom = new THREE.PlaneGeometry(16, 16, this.gridSize - 1, this.gridSize - 1);
    this.waveGeom.rotateX(-Math.PI / 2);

    this.waveMat = new THREE.MeshStandardMaterial({
      color: 0x10a37f,
      roughness: 0.35,
      metalness: 0.8,
      wireframe: false,
      side: THREE.DoubleSide
    });

    this.waveMesh = new THREE.Mesh(this.waveGeom, this.waveMat);
    this.waveMesh.position.y = -1.2;
    this.scene.add(this.waveMesh);

    // Save initial vertex buffer for displacement computation
    this.posAttr = this.waveGeom.attributes.position;
    this.initialPositions = new Float32Array(this.posAttr.array);
  }

  initGrapheneResonator() {
    this.resonatorGroup = new THREE.Group();

    // 1. Monolayer Graphene Ring Radiator
    const ringGeom = new THREE.TorusGeometry(2.4, 0.18, 24, 64);
    ringGeom.rotateX(Math.PI / 2);
    this.ringMat = new THREE.MeshStandardMaterial({
      color: 0xECECEC,
      roughness: 0.2,
      metalness: 0.95
    });
    this.ringMesh = new THREE.Mesh(ringGeom, this.ringMat);
    this.resonatorGroup.add(this.ringMesh);

    // 2. Secondary MIMO Element (Coupled Ring)
    const ring2Mesh = this.ringMesh.clone();
    ring2Mesh.position.x = 4.2;
    this.resonatorGroup.add(ring2Mesh);

    // 3. Central Decoupling Parasitic Resonator
    const decoupleGeom = new THREE.BoxGeometry(0.25, 0.4, 3.8);
    const decoupleMat = new THREE.MeshStandardMaterial({
      color: 0x10a37f,
      metalness: 0.9,
      roughness: 0.1
    });
    const decoupleMesh = new THREE.Mesh(decoupleGeom, decoupleMat);
    decoupleMesh.position.x = 2.1;
    this.resonatorGroup.add(decoupleMesh);

    // 4. Electromagnetic Radiation Dipole Vector Lines
    this.vectorLines = [];
    const lineMat = new THREE.LineBasicMaterial({ color: 0x10A37F, transparent: true, opacity: 0.65 });
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const pts = [
        new THREE.Vector3(Math.cos(angle) * 2.4, 0, Math.sin(angle) * 2.4),
        new THREE.Vector3(Math.cos(angle) * 5.0, Math.sin(i * 1.5) * 1.8 + 1.2, Math.sin(angle) * 5.0)
      ];
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      const l = new THREE.Line(g, lineMat);
      this.resonatorGroup.add(l);
      this.vectorLines.push(l);
    }

    this.resonatorGroup.position.x = -2.1;
    this.resonatorGroup.position.y = 0.5;
    this.scene.add(this.resonatorGroup);
  }

  initControls() {
    this.freqSlider = document.getElementById('freq-slider');
    this.freqVal = document.getElementById('freq-slider-val');
    this.mucSlider = document.getElementById('muc-slider');
    this.mucVal = document.getElementById('muc-slider-val');

    this.telemetryFreq = document.getElementById('telemetry-freq');
    this.telemetryMuc = document.getElementById('telemetry-muc');
    this.telemetryLambda = document.getElementById('telemetry-lambda');
    this.telemetryS11 = document.getElementById('telemetry-s11');

    this.resetBtn = document.getElementById('reset-cam-btn');
    this.wireframeBtn = document.getElementById('toggle-wireframe-btn');

    if (this.freqSlider) {
      this.freqSlider.addEventListener('input', (e) => {
        this.frequency = parseFloat(e.target.value);
        this.updateTelemetry();
      });
    }

    if (this.mucSlider) {
      this.mucSlider.addEventListener('input', (e) => {
        this.chemicalPotential = parseFloat(e.target.value);
        this.updateTelemetry();
      });
    }

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => {
        this.targetRotationY = 0;
        this.targetRotationX = 0;
        this.camera.position.set(0, 8, 14);
        this.camera.lookAt(0, 0, 0);
      });
    }

    if (this.wireframeBtn) {
      this.wireframeBtn.addEventListener('click', () => {
        this.isWireframe = !this.isWireframe;
        this.waveMat.wireframe = this.isWireframe;
      });
    }

    this.updateTelemetry();
  }

  updateTelemetry() {
    if (this.freqVal) this.freqVal.textContent = `${this.frequency.toFixed(3)} THz`;
    if (this.mucVal) this.mucVal.textContent = `${this.chemicalPotential.toFixed(2)} eV`;

    // Real Physics: lambda = c / f
    const c = 299792458; // m/s
    const f_hz = this.frequency * 1e12;
    const lambda_um = (c / f_hz) * 1e6;

    // Resonant shift calculation: S11 drops sharply at 0.34 THz and mu_c = 0.50 eV
    const freqDiff = Math.abs(this.frequency - (0.34 + (this.chemicalPotential - 0.5) * 0.08));
    const s11 = -36.4 + freqDiff * 60;
    const clampedS11 = Math.min(s11, -10.0).toFixed(1);

    if (this.telemetryFreq) this.telemetryFreq.textContent = `${this.frequency.toFixed(3)} THz`;
    if (this.telemetryMuc) this.telemetryMuc.textContent = `${this.chemicalPotential.toFixed(2)} eV`;
    if (this.telemetryLambda) this.telemetryLambda.textContent = `${lambda_um.toFixed(1)} µm`;
    if (this.telemetryS11) this.telemetryS11.textContent = `${clampedS11} dB`;

    // Dynamic Color Shift based on chemical potential & frequency
    const r = Math.min(0.06 + this.chemicalPotential * 0.15, 1);
    const g = Math.min(0.64 + this.chemicalPotential * 0.3, 1);
    const b = Math.min(0.50 + (1 - this.chemicalPotential) * 0.4, 1);
    this.waveMat.color.setRGB(r, g, b);
  }

  bindEvents() {
    this.isDragging = false;
    this.prevMousePos = { x: 0, y: 0 };
    this.targetRotationY = 0;
    this.targetRotationX = 0;
    this.currentRotationY = 0;
    this.currentRotationX = 0;

    const onPointerDown = (e) => {
      this.isDragging = true;
      this.prevMousePos.x = e.clientX || e.touches?.[0]?.clientX;
      this.prevMousePos.y = e.clientY || e.touches?.[0]?.clientY;
    };

    const onPointerMove = (e) => {
      if (!this.isDragging) return;
      const clientX = e.clientX || e.touches?.[0]?.clientX;
      const clientY = e.clientY || e.touches?.[0]?.clientY;

      const deltaX = clientX - this.prevMousePos.x;
      const deltaY = clientY - this.prevMousePos.y;

      this.targetRotationY += deltaX * 0.006;
      this.targetRotationX = Math.max(-0.6, Math.min(0.6, this.targetRotationX + deltaY * 0.004));

      this.prevMousePos.x = clientX;
      this.prevMousePos.y = clientY;
    };

    const onPointerUp = () => {
      this.isDragging = false;
    };

    this.canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    this.canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Responsive Canvas Resize
    window.addEventListener('resize', () => {
      if (!this.container) return;
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const time = performance.now() * 0.001;
    const speed = this.frequency * 8.0;
    const amplitude = 0.45 + this.chemicalPotential * 0.35;

    // Displace wave surface vertices according to Bessel-modulated traveling wave
    const pos = this.waveGeom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = this.initialPositions[i * 3];
      const z = this.initialPositions[i * 3 + 2];
      const dist = Math.sqrt(x * x + z * z);
      const wave = Math.sin(dist * 2.2 - time * speed) * Math.cos(x * 0.8) * amplitude;
      pos.setY(i, wave / (dist * 0.25 + 1.0));
    }
    pos.needsUpdate = true;

    // Rotate and orbit resonator
    if (this.resonatorGroup) {
      this.resonatorGroup.rotation.y = time * 0.45;
    }

    // Smooth inertia camera orbit
    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.08;
    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.08;

    const radius = 16;
    this.camera.position.x = Math.sin(this.currentRotationY) * radius * Math.cos(this.currentRotationX);
    this.camera.position.z = Math.cos(this.currentRotationY) * radius * Math.cos(this.currentRotationX);
    this.camera.position.y = 8 + Math.sin(this.currentRotationX) * 8;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }
}

/* ═══════════════════ RUN INITIALIZERS ON DOM READY ═══════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initReasoningAccordion();
  initCodeSwitcher();
  initBibTeXCopy();
  initGravatar();
  new TerahertzWaveSimulator('thz-canvas-container');
});
