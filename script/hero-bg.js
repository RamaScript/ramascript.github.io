// script/hero-bg.js — Animated particle constellation background

(function () {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Config
  const CONFIG = {
    particleCount: 80,
    connectionDistance: 140,
    particleSpeed: 0.45,
    particleRadius: 2,
    mouseRadius: 140,
    lineOpacityMax: 0.25,
  };

  // Resize
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", () => { resize(); initParticles(); });

  // Mouse — listen on the whole section, not just canvas
  const mouse = { x: -9999, y: -9999 };
  const section = canvas.closest(".home") || canvas.parentElement;
  section.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  section.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * CONFIG.particleSpeed * 2;
      this.vy = (Math.random() - 0.5) * CONFIG.particleSpeed * 2;
      this.radius = Math.random() * CONFIG.particleRadius + 0.8;
      this.opacity = Math.random() * 0.5 + 0.3;
      // Randomly pick a color: teal, cyan, or soft white
      const isLightMode = !document.body.classList.contains("dark-mode");
      const colors = isLightMode ? [
        "rgba(8, 145, 178,",    // teal
        "rgba(2, 132, 199,",    // sky
        "rgba(14, 165, 233,",   // light blue
      ] : [
        "rgba(14, 165, 233,",   // sky-500
        "rgba(6, 182, 212,",    // cyan-500
        "rgba(99, 214, 220,",   // custom teal
        "rgba(148, 220, 255,",  // soft blue
        "rgba(255, 255, 255,",  // white
      ];
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      // Mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.mouseRadius) {
        const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
        this.x += (dx / dist) * force * 2.5;
        this.y += (dy / dist) * force * 2.5;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges with a margin
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      this.x = Math.max(0, Math.min(canvas.width, this.x));
      this.y = Math.max(0, Math.min(canvas.height, this.y));
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${this.colorBase}${this.opacity})`;
      ctx.fill();
      // Soft glow
      ctx.shadowBlur = 8;
      ctx.shadowColor = `${this.colorBase}0.6)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Particles array
  let particles = [];
  function initParticles() {
    particles = [];
    const count = Math.min(CONFIG.particleCount, Math.floor((canvas.width * canvas.height) / 10000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }
  initParticles();

  // Draw connections between close particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.connectionDistance) {
          const opacity = (1 - dist / CONFIG.connectionDistance) * CONFIG.lineOpacityMax;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(14, 200, 220, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  // Gradient background
  function drawBackground() {
    const isLightMode = !document.body.classList.contains("dark-mode");
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    if (isLightMode) {
      gradient.addColorStop(0, "#f8fafc");
      gradient.addColorStop(0.45, "#f1f5f9");
      gradient.addColorStop(1, "#e2e8f0");
    } else {
      gradient.addColorStop(0, "#080e1b");
      gradient.addColorStop(0.45, "#0d1a2d");
      gradient.addColorStop(1, "#071018");
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle radial glow top-left
    const glow1 = ctx.createRadialGradient(0, 0, 0, 0, 0, canvas.width * 0.6);
    glow1.addColorStop(0, isLightMode ? "rgba(8, 145, 178, 0.05)" : "rgba(8, 145, 178, 0.08)");
    glow1.addColorStop(1, isLightMode ? "rgba(8, 145, 178, 0)" : "rgba(8, 145, 178, 0)");
    ctx.fillStyle = glow1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle radial glow bottom-right
    const glow2 = ctx.createRadialGradient(canvas.width, canvas.height, 0, canvas.width, canvas.height, canvas.width * 0.55);
    glow2.addColorStop(0, isLightMode ? "rgba(14, 165, 233, 0.04)" : "rgba(99, 102, 241, 0.07)");
    glow2.addColorStop(1, isLightMode ? "rgba(14, 165, 233, 0)" : "rgba(99, 102, 241, 0)");
    ctx.fillStyle = glow2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Floating orbs (large blurred circles)
  let orbTime = 0;

  function drawOrbs() {
    const isLightMode = !document.body.classList.contains("dark-mode");
    const orbs = isLightMode ? [
      { x: 0.15, y: 0.2, r: 0.18, color: "rgba(8, 145, 178, 0.04)", speed: 0.0003 },
      { x: 0.8,  y: 0.7, r: 0.22, color: "rgba(14, 165, 233, 0.03)", speed: 0.0004 },
      { x: 0.5,  y: 0.5, r: 0.12, color: "rgba(2, 132, 199, 0.02)",  speed: 0.0005 },
    ] : [
      { x: 0.15, y: 0.2, r: 0.18, color: "rgba(8, 145, 178, 0.07)", speed: 0.0003 },
      { x: 0.8,  y: 0.7, r: 0.22, color: "rgba(99, 102, 241, 0.06)", speed: 0.0004 },
      { x: 0.5,  y: 0.5, r: 0.12, color: "rgba(6, 182, 212, 0.05)",  speed: 0.0005 },
    ];

    orbTime += 1;
    orbs.forEach((orb, i) => {
      const ox = (orb.x + Math.sin(orbTime * orb.speed + i) * 0.08) * canvas.width;
      const oy = (orb.y + Math.cos(orbTime * orb.speed + i) * 0.06) * canvas.height;
      const r = orb.r * Math.min(canvas.width, canvas.height);
      const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, r);
      grad.addColorStop(0, orb.color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  }

  // Animation loop
  function animate() {
    drawBackground();
    drawOrbs();
    drawConnections();
    particles.forEach((p) => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }

  animate();
})();
