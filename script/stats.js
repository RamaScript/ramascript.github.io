// ===== Stats Counter Animation =====

const statsData = [
  {
    icon: "fas fa-users",
    number: 10,
    suffix: "+",
    label: "Clients Served",
  },
  {
    icon: "fas fa-folder-open",
    number: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: "fab fa-google-play",
    number: 12,
    suffix: "+",
    label: "Apps on Play Store",
  },
  {
    icon: "fas fa-code",
    number: 3,
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

function initStatsObserver() {
  const section = document.getElementById("stats");
  if (!section) return;

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

document.addEventListener("DOMContentLoaded", () => {
  buildStatsSection();
  initStatsObserver();
});
