// ===== Stats Counter Animation =====

const statsData = [
  {
    icon: "fas fa-users",
    number: 8,
    suffix: "+",
    label: "Clients Served",
  },
  {
    icon: "fas fa-folder-open",
    number: 20,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: "fab fa-google-play",
    number: 15,
    suffix: "+",
    label: "Apps on Play Store",
  },
  {
    icon: "fas fa-code",
    number: 2,
    suffix: "+",
    label: "Years of Experience",
  },
];

function buildStatsSection() {
  const grid = document.querySelector(".stats-grid");
  if (!grid) return;

  statsData.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <i class="stat-icon ${stat.icon}"></i>
      <span class="stat-number" data-target="${stat.number}">0</span><span class="stat-suffix">${stat.suffix}</span>
      <p class="stat-label">${stat.label}</p>
    `;
    grid.appendChild(card);
  });
}

function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  el.classList.add("animating");

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(update);
}

function animateMetric(el, target, suffix = "", duration = 1600) {
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }
  requestAnimationFrame(update);
}

function initStatsObserver() {
  // 1. Observe Hero Metrics Strip
  const heroStrip = document.querySelector(".hero-metrics-strip");
  if (heroStrip) {
    let heroAnimated = false;
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !heroAnimated) {
            heroAnimated = true;
            const counters = heroStrip.querySelectorAll(".hero-metric-num");
            counters.forEach((counter) => {
              const target = parseInt(counter.dataset.count, 10);
              const suffix = counter.dataset.suffix || "";
              if (!isNaN(target)) {
                animateMetric(counter, target, suffix);
              }
            });
            heroObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    heroObserver.observe(heroStrip);
  }

  // 2. Legacy stats section (if exists)
  const section = document.getElementById("stats");
  if (section) {
    let animated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            const counters = section.querySelectorAll(".stat-number");
            counters.forEach((counter) => {
              const target = parseInt(counter.dataset.target, 10);
              animateCounter(counter, target);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildStatsSection();
  initStatsObserver();
});

