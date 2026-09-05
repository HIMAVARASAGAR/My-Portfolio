import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════════
//  3D SPATIAL WEBGL ENGINE — TERAHERTZ QUANTUM RESONATOR
//  Full-viewport interactive 3D WebGL world inspired by igloo.inc & landonorris.com
//  Features: PBR glass/transmission shaders, electromagnetic dipole field lines,
//  volumetric particle cloud, drag rotation with inertia, and scroll camera path.
// ═══════════════════════════════════════════════════════════════════

export class WorldScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isDown: false, prevX: 0, prevY: 0 };
    this.dragRotation = { x: 0, y: 0, vx: 0, vy: 0 };
    this.scrollProgress = 0;
    this.mode = document.documentElement.getAttribute('data-mode') || 'hardware';

    this.colors = {
      hardware: {
        accent: new THREE.Color(0xD2FF00), // Volt Lime
        accentSecondary: new THREE.Color(0xFFB800), // Gold
        core: new THREE.Color(0xD2FF00),
        glow: new THREE.Color(0x99CC00),
        particles: new THREE.Color(0xE0F0FF),
      },
      software: {
        accent: new THREE.Color(0x00F2FE), // Cyber Ice Cyan
        accentSecondary: new THREE.Color(0x4FACFE),
        core: new THREE.Color(0x00F2FE),
        glow: new THREE.Color(0x00A8FF),
        particles: new THREE.Color(0xCCEFFF),
      }
    };

    this.init();
  }

  init() {
    // 1. Renderer Setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;

    // 2. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.set(0, 0, 7.5);

    // 3. Lighting Setup
    this.setupLighting();

    // 4. Build the 3D Terahertz Quantum Resonator Artifact
    this.buildArtifact();

    // 5. Build Cosmic Particle Field (1,200 particles)
    this.buildParticles();

    // 6. Event Listeners
    window.addEventListener('resize', () => this.onResize(), { passive: true });
    this.setupMouseEvents();

    // Start RAF loop
    this.clock = new THREE.Clock();
    this.animate();
  }

  setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.ambientLight);

    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    this.keyLight.position.set(5, 8, 5);
    this.scene.add(this.keyLight);

    this.rimLight = new THREE.PointLight(0xD2FF00, 3.5, 20);
    this.rimLight.position.set(-5, -4, -3);
    this.scene.add(this.rimLight);

    this.coreLight = new THREE.PointLight(0xD2FF00, 2.5, 12);
    this.coreLight.position.set(0, 0, 0);
    this.scene.add(this.coreLight);
  }

  buildArtifact() {
    this.artifactGroup = new THREE.Group();
    this.scene.add(this.artifactGroup);

    const activeColors = this.colors[this.mode];

    // --- A. Core Pulsing Holographic Sphere ---
    const coreGeo = new THREE.SphereGeometry(0.72, 32, 32);
    this.coreMat = new THREE.MeshStandardMaterial({
      color: 0x050810,
      emissive: activeColors.accent,
      emissiveIntensity: 0.8,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
    });
    this.coreMesh = new THREE.Mesh(coreGeo, this.coreMat);
    this.artifactGroup.add(this.coreMesh);

    // Core Wireframe Energy Shell
    const coreWireGeo = new THREE.IcosahedronGeometry(0.88, 2);
    this.coreWireMat = new THREE.MeshBasicMaterial({
      color: activeColors.accent,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    this.coreWireMesh = new THREE.Mesh(coreWireGeo, this.coreWireMat);
    this.artifactGroup.add(this.coreWireMesh);

    // --- B. Concentric Counter-Rotating Graphene Rings (THz Antenna Array) ---
    this.rings = [];
    const ringRadii = [1.25, 1.65, 2.05];
    const ringTubes = [0.035, 0.045, 0.03];

    ringRadii.forEach((r, idx) => {
      const ringGeo = new THREE.TorusGeometry(r, ringTubes[idx], 24, 80);
      const ringMat = new THREE.MeshStandardMaterial({
        color: idx % 2 === 0 ? activeColors.accent : 0xFFFFFF,
        emissive: idx % 2 === 0 ? activeColors.accent : 0x222222,
        emissiveIntensity: idx % 2 === 0 ? 0.4 : 0.1,
        metalness: 0.95,
        roughness: 0.2,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3 * (idx + 1);
      ringMesh.rotation.y = Math.PI / 4 * idx;
      this.rings.push({
        mesh: ringMesh,
        speedX: (idx + 1) * 0.003 * (idx % 2 === 0 ? 1 : -1),
        speedY: (idx + 1) * 0.005 * (idx % 2 === 0 ? -1 : 1),
      });
      this.artifactGroup.add(ringMesh);
    });

    // --- C. Octahedral / Geodesic Antenna Waveguide Cage ---
    const cageGeo = new THREE.OctahedronGeometry(2.5, 1);
    this.cageMat = new THREE.MeshStandardMaterial({
      color: 0x182032,
      wireframe: true,
      metalness: 0.9,
      roughness: 0.3,
      transparent: true,
      opacity: 0.3,
    });
    this.cageMesh = new THREE.Mesh(cageGeo, this.cageMat);
    this.artifactGroup.add(this.cageMesh);

    // --- D. Electromagnetic Dipole Vector Field Lines ---
    this.fieldLines = new THREE.Group();
    const lineCount = 6;
    for (let i = 0; i < lineCount; i++) {
      const angle = (i / lineCount) * Math.PI * 2;
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, -0.6, 0),
        new THREE.Vector3(Math.cos(angle) * 3.2, -1.0, Math.sin(angle) * 3.2),
        new THREE.Vector3(Math.cos(angle) * 3.2, 1.0, Math.sin(angle) * 3.2),
        new THREE.Vector3(0, 0.6, 0)
      );
      const points = curve.getPoints(50);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: activeColors.accent,
        transparent: true,
        opacity: 0.35,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      this.fieldLines.add(line);
    }
    this.artifactGroup.add(this.fieldLines);
  }

  buildParticles() {
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical / spherical vortex distribution
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 8.5;
      const y = (Math.random() - 0.5) * 8.0;

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      scales[i] = Math.random() * 2.0 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Simple procedural circular point texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(210,255,0,0.8)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    this.particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: texture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.particleMesh = new THREE.Points(geometry, this.particleMat);
    this.scene.add(this.particleMesh);
  }

  setupMouseEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / this.width - 0.5) * 2;
      this.mouse.targetY = (e.clientY / this.height - 0.5) * 2;

      if (this.mouse.isDown) {
        const dx = e.clientX - this.mouse.prevX;
        const dy = e.clientY - this.mouse.prevY;
        this.dragRotation.vx = dx * 0.008;
        this.dragRotation.vy = dy * 0.008;
        this.mouse.prevX = e.clientX;
        this.mouse.prevY = e.clientY;
      }
    }, { passive: true });

    // Interactive Drag on Canvas
    window.addEventListener('mousedown', (e) => {
      // If clicking directly on or near center hero artifact
      if (e.clientX > window.innerWidth * 0.35 && e.clientY < window.innerHeight * 0.85) {
        this.mouse.isDown = true;
        this.mouse.prevX = e.clientX;
        this.mouse.prevY = e.clientY;
      }
    });

    window.addEventListener('mouseup', () => {
      this.mouse.isDown = false;
    });
  }

  setThemeMode(mode) {
    this.mode = mode;
    const active = this.colors[mode] || this.colors.hardware;

    if (this.coreMat) {
      this.coreMat.emissive.set(active.accent);
    }
    if (this.coreWireMat) {
      this.coreWireMat.color.set(active.accent);
    }
    if (this.rimLight) {
      this.rimLight.color.set(active.accent);
    }
    if (this.coreLight) {
      this.coreLight.color.set(active.accent);
    }
    if (this.fieldLines) {
      this.fieldLines.children.forEach(line => {
        line.material.color.set(active.accent);
      });
    }
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  // Called continuously by Lenis / GSAP ScrollTrigger
  updateScrollProgress(progress) {
    this.scrollProgress = progress; // 0.0 to 1.0
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    // 1. Mouse Lerp for Silky Inertia
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.06;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.06;

    // 2. Drag Rotation Friction
    this.dragRotation.x += this.dragRotation.vx;
    this.dragRotation.y += this.dragRotation.vy;
    this.dragRotation.vx *= 0.92;
    this.dragRotation.vy *= 0.92;

    // 3. Artifact Rotation & Core Pulse
    if (this.artifactGroup) {
      // Base continuous rotation
      this.artifactGroup.rotation.y = time * 0.15 + this.mouse.x * 0.45 + this.dragRotation.x;
      this.artifactGroup.rotation.x = Math.sin(time * 0.1) * 0.2 + this.mouse.y * 0.35 + this.dragRotation.y;
      this.artifactGroup.rotation.z = Math.cos(time * 0.12) * 0.1;

      // Pulse the core sphere breathing like THz oscillations
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.06;
      this.coreMesh.scale.set(pulse, pulse, pulse);
      this.coreWireMesh.scale.set(pulse, pulse, pulse);

      // Rotate individual antenna rings counter-clockwise & clockwise
      this.rings.forEach(r => {
        r.mesh.rotation.x += r.speedX;
        r.mesh.rotation.y += r.speedY;
      });

      // Slowly rotate field lines
      if (this.fieldLines) {
        this.fieldLines.rotation.y -= 0.004;
      }

      // Rotate outer waveguide cage
      if (this.cageMesh) {
        this.cageMesh.rotation.y += 0.002;
        this.cageMesh.rotation.z += 0.001;
      }
    }

    // 4. Cosmic Particle Swirl (Curl Noise Simulation)
    if (this.particleMesh) {
      this.particleMesh.rotation.y = time * 0.035;
      this.particleMesh.rotation.x = Math.sin(time * 0.02) * 0.1;
    }

    // 5. Scroll-Driven 3D Camera & Scene Timeline Choreography
    // As user scrolls from 0 -> 1, spatial perspective dynamically navigates 3D space:
    const sp = this.scrollProgress;

    // Section 1: Hero (sp: 0 -> 0.25) — Centered / slightly offset
    // Section 2: About (sp: 0.25 -> 0.5) — Artifact slides to the right, camera zooms close
    // Section 3: Projects (sp: 0.5 -> 0.75) — Artifact shifts to top-right corner, camera rotates
    // Section 4: Hardware Lab & Contact (sp: 0.75 -> 1.0) — Camera elevates, artifact beams outward

    let targetCamZ = 7.5;
    let targetCamY = 0;
    let targetArtX = window.innerWidth > 960 ? 1.6 : 0;
    let targetArtY = 0;

    if (sp <= 0.25) {
      // Hero
      const t = sp / 0.25;
      targetArtX = window.innerWidth > 960 ? 1.6 : 0;
      targetArtY = 0;
      targetCamZ = 7.5 - t * 0.5;
    } else if (sp <= 0.55) {
      // About section: dive deeper into the core
      const t = (sp - 0.25) / 0.3;
      targetArtX = window.innerWidth > 960 ? 2.2 : 0;
      targetArtY = -0.3;
      targetCamZ = 7.0 - t * 1.5;
      targetCamY = -t * 0.8;
    } else if (sp <= 0.85) {
      // Projects matrix: floating companion
      const t = (sp - 0.55) / 0.3;
      targetArtX = window.innerWidth > 960 ? 2.6 : 0;
      targetArtY = 0.5;
      targetCamZ = 5.5 + t * 2.0;
      targetCamY = -0.8 + t * 0.8;
    } else {
      // Contact & Footer: wide panoramic beacon
      const t = (sp - 0.85) / 0.15;
      targetArtX = 0;
      targetArtY = -0.8;
      targetCamZ = 7.5 + t * 2.0;
      targetCamY = 0;
    }

    // Smoothly lerp camera and artifact positions to targets
    this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.05;
    this.camera.position.y += (targetCamY - this.camera.position.y) * 0.05;
    this.camera.lookAt(0, 0, 0);

    if (this.artifactGroup) {
      this.artifactGroup.position.x += (targetArtX - this.artifactGroup.position.x) * 0.05;
      this.artifactGroup.position.y += (targetArtY - this.artifactGroup.position.y) * 0.05;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
