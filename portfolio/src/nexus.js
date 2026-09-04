// ═══════════════════════════════════════════════════════════════════
//  INTERACTIVE PROJECT RADAR — Systems & Discipline Compass
//  High-DPI Canvas with smooth physics, zero text clipping,
//  and deep bidirectional integration with page projects.
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
    this.activeNodeIndex = 0; // Currently focused project
    this.filterMode = 'all';  // 'all', 'rf', 'ai', 'comm'

    // 4 Core Projects — Clean data without jargon overload
    this.nodes = [
      {
        id: 'P01',
        num: '01',
        title: 'Tunable Terahertz MIMO Antenna',
        category: 'Antenna & RF Simulation',
        tag: 'RF / Major Project',
        summary: 'Graphene ring antenna in CST Studio achieving >20 dB port isolation and electronic beam steering.',
        discipline: 'rf',
        angle: 0.25,
        dist: 0.68,
        color: '#C45A3C',
      },
      {
        id: 'P02',
        num: '02',
        title: 'Multi-Agent Workflow Engine',
        category: 'Software & AI Systems',
        tag: 'Google ADK / Python',
        summary: 'Cooperative agent architecture with modular planning, sandboxed tool execution, and state routing.',
        discipline: 'ai',
        angle: 1.75,
        dist: 0.62,
        color: '#B34A2E',
      },
      {
        id: 'P03',
        num: '03',
        title: 'Semantic Communication Pipeline',
        category: 'Network Protocols',
        tag: 'Python Stdlib / Sockets',
        summary: 'Transmits structured semantic intent over noisy socket channels with zero external dependencies.',
        discipline: 'comm',
        angle: 3.25,
        dist: 0.72,
        color: '#D97356',
      },
      {
        id: 'P04',
        num: '04',
        title: 'Multi-Agent Systems Capstone',
        category: 'Certification & Benchmarks',
        tag: 'Kaggle / Google ADK',
        summary: 'End-to-end multi-agent design tested against Kaggle benchmark cases for error handling and delegation.',
        discipline: 'ai',
        angle: 4.80,
        dist: 0.60,
        color: '#C45A3C',
      },
    ];

    // Subtle data pulse particles flowing along orbital paths
    this.particles = [];
    for (let i = 0; i < 10; i++) {
      this.particles.push({
        angle: Math.random() * Math.PI * 2,
        radiusIndex: Math.floor(Math.random() * 3) + 1,
        speed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

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

      // Check node hover
      this.checkHover(e.clientX - rect.left, e.clientY - rect.top);
    });

    container.addEventListener('mouseleave', () => {
      this.mouse.targetX = 0;
      this.mouse.targetY = 0;
      this.mouse.isHovered = false;
      this.canvas.style.cursor = 'default';
    });

    // Click handler for nodes
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      this.handleCanvasClick(clickX, clickY);
    });

    // Initial trigger
    this.onNodeSelect(this.nodes[this.activeNodeIndex]);
    this.animate();
  }

  setActiveNodeById(id) {
    const idx = this.nodes.findIndex(n => n.id === id);
    if (idx !== -1) {
      this.activeNodeIndex = idx;
      this.onNodeSelect(this.nodes[idx]);
    }
  }

  setFilter(filter) {
    this.filterMode = filter;
    // If current node doesn't match filter, select first matching
    if (filter !== 'all') {
      const match = this.nodes.findIndex(n => n.discipline === filter);
      if (match !== -1) {
        this.activeNodeIndex = match;
        this.onNodeSelect(this.nodes[match]);
      }
    }
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width || 420;
    this.height = Math.min(this.width, 380);
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  checkHover(mouseX, mouseY) {
    const w = this.width;
    const h = this.height;
    const cx = w / 2 + this.mouse.x * 0.05;
    const cy = h / 2 + this.mouse.y * 0.05;
    const radius = Math.min(w, h) * 0.40;

    let hoveredAny = false;
    this.nodes.forEach((node, idx) => {
      const angle = node.angle + this.time * 0.12;
      const nx = cx + Math.cos(angle) * (radius * node.dist);
      const ny = cy + Math.sin(angle) * (radius * node.dist);
      const dist = Math.hypot(mouseX - nx, mouseY - ny);

      if (dist < 26) {
        hoveredAny = true;
        this.canvas.style.cursor = 'pointer';
        if (this.activeNodeIndex !== idx) {
          this.activeNodeIndex = idx;
          this.onNodeSelect(this.nodes[idx]);
        }
      }
    });

    if (!hoveredAny) {
      this.canvas.style.cursor = 'default';
    }
  }

  handleCanvasClick(clickX, clickY) {
    const w = this.width;
    const h = this.height;
    const cx = w / 2 + this.mouse.x * 0.05;
    const cy = h / 2 + this.mouse.y * 0.05;
    const radius = Math.min(w, h) * 0.40;

    this.nodes.forEach((node, idx) => {
      const angle = node.angle + this.time * 0.12;
      const nx = cx + Math.cos(angle) * (radius * node.dist);
      const ny = cy + Math.sin(angle) * (radius * node.dist);
      const dist = Math.hypot(clickX - nx, clickY - ny);

      if (dist < 26) {
        this.activeNodeIndex = idx;
        this.onNodeSelect(this.nodes[idx]);

        // Smooth scroll to the corresponding project card
        const card = document.querySelector(`article[data-num="${node.id}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('flash-highlight');
          setTimeout(() => card.classList.remove('flash-highlight'), 1200);
        }
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.time += 0.012;
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    this.draw();
  }

  draw() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const cx = w / 2 + this.mouse.x * 0.05;
    const cy = h / 2 + this.mouse.y * 0.05;
    const radius = Math.min(w, h) * 0.40;

    ctx.clearRect(0, 0, w, h);

    // 1. Concentric Guide Orbits
    const ringSteps = [0.35, 0.65, 0.95];
    ringSteps.forEach((step, i) => {
      const r = radius * step;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = i === 1 ? 'rgba(196, 90, 60, 0.22)' : 'rgba(217, 210, 201, 0.65)';
      ctx.lineWidth = i === 1 ? 1.5 : 1;
      if (i !== 1) {
        ctx.setLineDash([4, 6]);
      }
      ctx.stroke();
      ctx.restore();
    });

    // 2. Rotating Sweeper Beam (Radar line)
    ctx.save();
    const beamAngle = this.time * 0.6;
    const beamLen = radius * 1.02;

    const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, beamLen);
    grad.addColorStop(0, 'rgba(196, 90, 60, 0.18)');
    grad.addColorStop(0.7, 'rgba(232, 146, 122, 0.04)');
    grad.addColorStop(1, 'rgba(196, 90, 60, 0)');

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, beamLen, beamAngle - 0.25, beamAngle + 0.25);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Beam sweep line
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(beamAngle) * beamLen, cy + Math.sin(beamAngle) * beamLen);
    ctx.strokeStyle = 'rgba(196, 90, 60, 0.4)';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.restore();

    // 3. Ambient Signal Particles
    ctx.save();
    this.particles.forEach(p => {
      p.angle += p.speed;
      const r = radius * ringSteps[p.radiusIndex - 1];
      const px = cx + Math.cos(p.angle) * r;
      const py = cy + Math.sin(p.angle) * r;

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196, 90, 60, ${p.opacity})`;
      ctx.fill();
    });
    ctx.restore();

    // 4. Central Compass Hub
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, 16, 0, Math.PI * 2);
    ctx.fillStyle = '#FAF6F1';
    ctx.strokeStyle = '#C45A3C';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#C45A3C';
    ctx.fill();
    ctx.restore();

    // 5. Connect Active Node to Center with subtle dashed line
    const activeNode = this.nodes[this.activeNodeIndex];
    if (activeNode) {
      const aAngle = activeNode.angle + this.time * 0.12;
      const ax = cx + Math.cos(aAngle) * (radius * activeNode.dist);
      const ay = cy + Math.sin(aAngle) * (radius * activeNode.dist);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(ax, ay);
      ctx.strokeStyle = 'rgba(196, 90, 60, 0.55)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 4]);
      ctx.stroke();
      ctx.restore();
    }

    // 6. Render 4 Project Satellites (Clean, numerical, ZERO text clipping)
    this.nodes.forEach((node, idx) => {
      const angle = node.angle + this.time * 0.12;
      const nx = cx + Math.cos(angle) * (radius * node.dist);
      const ny = cy + Math.sin(angle) * (radius * node.dist);
      const isActive = idx === this.activeNodeIndex;
      const isDimmed = this.filterMode !== 'all' && node.discipline !== this.filterMode;

      ctx.save();
      ctx.globalAlpha = isDimmed ? 0.35 : 1;

      // Outer focus ring if active
      if (isActive) {
        const pulse = Math.sin(this.time * 4) * 3;
        ctx.beginPath();
        ctx.arc(nx, ny, 22 + pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(196, 90, 60, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Satellite circle container
      ctx.beginPath();
      ctx.arc(nx, ny, 16, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? '#C45A3C' : '#FFFFFF';
      ctx.strokeStyle = '#C45A3C';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(196, 90, 60, 0.15)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.stroke();

      // Number inside circle (Never clips because it's centered in the 32px circle!)
      ctx.shadowColor = 'transparent';
      ctx.font = '700 11px "IBM Plex Mono", monospace';
      ctx.fillStyle = isActive ? '#FFFFFF' : '#C45A3C';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.num, nx, ny);

      ctx.restore();
    });
  }
}
