// ═══════════════════════════════════════════════════════════════════
//  COCKPIT VISUALIZER // PROJECT RADAR v2.5
//  Inspired by igloo.inc WebGL atmospheric depth & landonorris.com telemetry
//  High-DPI 60fps Canvas with orbital guides, dynamic mode color shifts,
//  curl noise particle synthesis, and bidirectional project syncing.
// ═══════════════════════════════════════════════════════════════════

export class ProjectRadar {
  constructor(canvasEl, onNodeSelect) {
    this.canvas = canvasEl;
    this.ctx = canvasEl.getContext('2d');
    this.onNodeSelect = onNodeSelect || (() => {});
    
    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false };
    this.time = 0;
    this.activeNodeIndex = 0;
    this.filterMode = 'all';
    this.currentMode = document.documentElement.getAttribute('data-mode') || 'hardware';

    // Theme Accent Colors
    this.themeColors = {
      hardware: {
        primary: '#D2FF00',
        glow: 'rgba(210, 255, 0, 0.4)',
        dim: 'rgba(210, 255, 0, 0.12)',
        ring: 'rgba(255, 255, 255, 0.08)'
      },
      software: {
        primary: '#00F2FE',
        glow: 'rgba(0, 242, 254, 0.4)',
        dim: 'rgba(0, 242, 254, 0.12)',
        ring: 'rgba(255, 255, 255, 0.08)'
      }
    };

    // 4 Flagship Engineering Projects
    this.nodes = [
      {
        id: 'P01',
        num: '01',
        title: 'Tunable Terahertz MIMO Antenna',
        category: 'Antenna & RF Simulation',
        tag: 'RF / B.TECH MAJOR PROJECT',
        summary: 'Graphene ring antenna simulated in CST Studio achieving >20 dB port isolation and electrostatic beam steering.',
        discipline: 'rf',
        angle: 0.35,
        dist: 0.68,
      },
      {
        id: 'P02',
        num: '02',
        title: 'Multi-Agent Workflow Engine',
        category: 'Software & AI Systems',
        tag: 'GOOGLE AGENT DEV KIT / PYTHON',
        summary: 'Cooperative multi-agent engine with modular planning, dynamic tool invocation, and self-healing recovery.',
        discipline: 'ai',
        angle: 1.85,
        dist: 0.62,
      },
      {
        id: 'P03',
        num: '03',
        title: 'Semantic Communication Pipeline',
        category: 'Network Protocols',
        tag: 'PYTHON STDLIB / RAW SOCKETS',
        summary: 'Transmits structured semantic intent over noisy socket channels with 68% payload compression.',
        discipline: 'comm',
        angle: 3.35,
        dist: 0.72,
      },
      {
        id: 'P04',
        num: '04',
        title: 'Multi-Agent Systems Capstone',
        category: 'Certification & Benchmarks',
        tag: 'KAGGLE / GOOGLE ADK INTENSIVE',
        summary: 'End-to-end multi-agent system tested against benchmark scenarios for inter-agent delegation.',
        discipline: 'ai',
        angle: 4.85,
        dist: 0.64,
      },
    ];

    // Atmospheric Micro-Particles (igloo.inc Curl/Orbital field)
    this.particles = [];
    for (let i = 0; i < 28; i++) {
      this.particles.push({
        x: (Math.random() - 0.5) * 320,
        y: (Math.random() - 0.5) * 320,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    // Shockwave click ripple queue
    this.ripples = [];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    const container = this.canvas.parentElement;
    
    container.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const rawX = e.clientX - rect.left - rect.width / 2;
      const rawY = e.clientY - rect.top - rect.height / 2;
      this.mouse.targetX = rawX;
      this.mouse.targetY = rawY;
      this.mouse.isHovered = true;
    });

    container.addEventListener('mouseleave', () => {
      this.mouse.targetX = 0;
      this.mouse.targetY = 0;
      this.mouse.isHovered = false;
    });

    // Click on node or trigger shockwave ripple
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left - rect.width / 2;
      const clickY = e.clientY - rect.top - rect.height / 2;

      this.ripples.push({
        x: clickX,
        y: clickY,
        r: 5,
        maxR: 120,
        alpha: 0.8
      });

      const clickedNode = this.hitTest(clickX, clickY);
      if (clickedNode) {
        const idx = this.nodes.findIndex(n => n.id === clickedNode.id);
        if (idx !== -1) {
          this.setActiveNodeIndex(idx);
        }
      }
    });

    // Notify initial node
    if (this.nodes.length > 0) {
      this.onNodeSelect(this.nodes[0]);
    }

    this.render();
  }

  setThemeMode(mode) {
    if (this.themeColors[mode]) {
      this.currentMode = mode;
    }
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  setFilter(filter) {
    this.filterMode = filter;
  }

  setActiveNodeById(id) {
    const idx = this.nodes.findIndex(n => n.id === id);
    if (idx !== -1) {
      this.setActiveNodeIndex(idx);
    }
  }

  setActiveNodeIndex(idx) {
    this.activeNodeIndex = idx;
    if (this.nodes[idx]) {
      this.onNodeSelect(this.nodes[idx]);
    }
  }

  hitTest(x, y) {
    const baseR = Math.min(this.width, this.height) * 0.44;
    const currentTheme = this.themeColors[this.currentMode];

    for (let node of this.nodes) {
      if (this.filterMode !== 'all' && node.discipline !== this.filterMode) continue;
      
      const nodeX = Math.cos(node.angle) * (baseR * node.dist) + this.mouse.x * 0.15;
      const nodeY = Math.sin(node.angle) * (baseR * node.dist) + this.mouse.y * 0.15;
      const dist = Math.hypot(x - nodeX, y - nodeY);

      if (dist < 26) {
        return node;
      }
    }
    return null;
  }

  render() {
    this.time += 0.016;

    // Smooth Mouse Spring Physics
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(w, h) * 0.44;

    const theme = this.themeColors[this.currentMode] || this.themeColors.hardware;

    ctx.clearRect(0, 0, w, h);

    ctx.save();
    ctx.translate(cx, cy);

    // 1. Concentric Telemetry Orbital Rings
    const ringRadii = [maxR * 0.35, maxR * 0.65, maxR * 0.95];
    ctx.lineWidth = 1;

    ringRadii.forEach((r, idx) => {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = idx === 1 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.04)';
      ctx.stroke();

      // Outer ring ticks
      if (idx === 2) {
        const tickCount = 48;
        for (let i = 0; i < tickCount; i++) {
          const theta = (i / tickCount) * Math.PI * 2;
          const tickLen = i % 12 === 0 ? 8 : (i % 6 === 0 ? 5 : 2.5);
          const x1 = Math.cos(theta) * (r - tickLen);
          const y1 = Math.sin(theta) * (r - tickLen);
          const x2 = Math.cos(theta) * r;
          const y2 = Math.sin(theta) * r;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = i % 12 === 0 ? theme.primary : 'rgba(255, 255, 255, 0.12)';
          ctx.stroke();
        }
      }
    });

    // 2. Crosshair Telemetry Axes
    ctx.beginPath();
    ctx.moveTo(-maxR, 0);
    ctx.lineTo(maxR, 0);
    ctx.moveTo(0, -maxR);
    ctx.lineTo(0, maxR);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.setLineDash([4, 6]);
    ctx.stroke();
    ctx.setLineDash([]);

    // 3. Rotating Sweeping Radar Beam (High-Velocity Aesthetic)
    const sweepAngle = this.time * 0.95;
    const sweepGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
    sweepGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    sweepGradient.addColorStop(1, theme.dim);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, maxR, sweepAngle - 0.4, sweepAngle);
    ctx.closePath();
    ctx.fillStyle = sweepGradient;
    ctx.fill();

    // Leading crisp laser sweep line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(sweepAngle) * maxR, Math.sin(sweepAngle) * maxR);
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = theme.primary;
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    // 4. Ambient Micro-Particles with gentle velocity
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around bounds
      if (p.x < -maxR) p.x = maxR;
      if (p.x > maxR) p.x = -maxR;
      if (p.y < -maxR) p.y = maxR;
      if (p.y > maxR) p.y = -maxR;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.5})`;
      ctx.fill();
    });

    // 5. Ripple shockwaves
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const rip = this.ripples[i];
      rip.r += 2.5;
      rip.alpha *= 0.94;

      ctx.beginPath();
      ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${this.currentMode === 'hardware' ? '210, 255, 0' : '0, 242, 254'}, ${rip.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (rip.alpha < 0.02 || rip.r > rip.maxR) {
        this.ripples.splice(i, 1);
      }
    }

    // 6. Interactive Satellite Nodes (01, 02, 03, 04)
    this.nodes.forEach((node, idx) => {
      const isFiltered = this.filterMode !== 'all' && node.discipline !== this.filterMode;
      const isActive = idx === this.activeNodeIndex;

      // Mouse parallax shift
      const nx = Math.cos(node.angle) * (maxR * node.dist) + this.mouse.x * 0.12;
      const ny = Math.sin(node.angle) * (maxR * node.dist) + this.mouse.y * 0.12;

      ctx.save();
      ctx.globalAlpha = isFiltered ? 0.2 : 1.0;

      // Connecting line to center
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = isActive ? theme.primary : 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = isActive ? 1.5 : 1;
      ctx.stroke();

      // Outer glowing halo on active node
      if (isActive) {
        const pulseR = 24 + Math.sin(this.time * 4) * 3;
        ctx.beginPath();
        ctx.arc(nx, ny, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = theme.dim;
        ctx.fill();
        ctx.strokeStyle = theme.primary;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Main Node Disk
      ctx.beginPath();
      ctx.arc(nx, ny, 16, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? theme.primary : '#12151E';
      ctx.fill();
      ctx.strokeStyle = isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Node Number Label Centered
      ctx.font = '700 10px "IBM Plex Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isActive ? '#08090C' : '#F4F5F8';
      ctx.fillText(node.num, nx, ny);

      ctx.restore();
    });

    // 7. Center Origin Telemetry Core
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fillStyle = theme.primary;
    ctx.shadowColor = theme.primary;
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.arc(0, 0, 11, 0, Math.PI * 2);
    ctx.strokeStyle = theme.dim;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();

    requestAnimationFrame(() => this.render());
  }
}
