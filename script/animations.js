/**
 * Portfolio Animation Engine
 * IntersectionObserver-powered scroll reveals, counters, 3D tilt, magnetic buttons, ripples
 */

/* ═══════════════════════════════════════════════
   1. INTERSECTION OBSERVER — reveal on scroll
   ═══════════════════════════════════════════════ */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".anim-fade-up, .anim-slide-left, .anim-slide-right, .anim-scale-in, .anim-clip-reveal, .reveal, .reveal-stagger"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("is-visible", "revealed");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════════════
   2. ANIMATED COUNTER — count from 0 to target
   ═══════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1400, suffix = "") {
  const start = performance.now();
  const startVal = 0;

  function update(timestamp) {
    const progress = Math.min((timestamp - start) / duration, 1);
    // ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counterEls = document.querySelectorAll("[data-count]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "+";
          animateCounter(el, target, 1600, suffix);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterEls.forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════════════
   3. 3D TILT — project cards respond to mouse
   ═══════════════════════════════════════════════ */
function init3DTilt() {
  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  if (isMobile) return;

  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      // Only apply if mouse is near the card
      const dist = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
      );
      if (dist > 400) {
        card.style.transform = "";
        return;
      }
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      const tiltX = (-y * 10).toFixed(2);
      const tiltY = (x  * 10).toFixed(2);
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });
  });

  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.style.transform = "";
    });
  });
}

function resetTilt(card) {
  card.addEventListener("mouseleave", () => {
    card.style.transition = "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
    card.style.transform = "";
    setTimeout(() => (card.style.transition = ""), 400);
  });
}

/* ═══════════════════════════════════════════════
   4. MAGNETIC BUTTONS
   ═══════════════════════════════════════════════ */
function initMagneticButtons() {
  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  if (isMobile) return;

  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width  / 2) * 0.25;
      const y = (e.clientY - rect.top  - rect.height / 2) * 0.25;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      btn.style.transform = "";
      setTimeout(() => (btn.style.transition = ""), 500);
    });
    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "transform 0.1s ease";
    });
  });
}

/* ═══════════════════════════════════════════════
   5. RIPPLE CLICK EFFECT
   ═══════════════════════════════════════════════ */
function initRipple() {
  document.querySelectorAll(".ripple-wrap").forEach((el) => {
    el.addEventListener("click", (e) => {
      const rect = el.getBoundingClientRect();
      const circle = document.createElement("span");
      circle.classList.add("ripple-circle");
      const size = Math.max(rect.width, rect.height) * 1.5;
      circle.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top  - size / 2}px;
      `;
      el.appendChild(circle);
      circle.addEventListener("animationend", () => circle.remove());
    });
  });
}

/* ═══════════════════════════════════════════════
   6. HERO PROFILE PARALLAX
   ═══════════════════════════════════════════════ */
function initHeroParallax() {
  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  if (isMobile) return;

  const profileWrap = document.querySelector(".hero-profile-img-wrap");
  if (!profileWrap) return;

  document.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx * 8;
    const dy = (e.clientY - cy) / cy * 8;
    profileWrap.style.transform = `translate(${dx}px, ${dy}px)`;
  });
}

/* ═══════════════════════════════════════════════
   7. STAGGERED HEADING LETTER SPLIT
   ═══════════════════════════════════════════════ */
function initLetterSplit() {
  // Only split section banner headings — skip hero which already has entrance classes
  document.querySelectorAll(".section-banner h2").forEach((heading) => {
    const words = heading.textContent.trim().split(" ");
    heading.innerHTML = words
      .map(
        (word, wi) =>
          `<span class="split-word" style="display:inline-block; overflow:hidden; margin-right:0.25em;">
            <span class="split-inner" style="display:inline-block; animation: springUp 0.7s cubic-bezier(0.16,1,0.3,1) ${0.05 + wi * 0.1}s both;">
              ${word}
            </span>
          </span>`
      )
      .join("");
  });
}

/* ═══════════════════════════════════════════════
   8. HERO AVAILABILITY PILL ANIMATION
   ═══════════════════════════════════════════════ */
function initAvailabilityPill() {
  const pill = document.querySelector(".hero-availability");
  if (!pill) return;
  // Replace static dot with live-dot
  const dot = pill.querySelector(".dot");
  if (dot) {
    dot.classList.add("live-dot");
    dot.classList.remove("dot");
  }
}

/* ═══════════════════════════════════════════════
   9. PAGE LOAD SPLASH
   ═══════════════════════════════════════════════ */
function initPageSplash() {
  const sections = document.querySelector(".sections");
  if (!sections) return;
  sections.style.animation = "splashFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both";
}

/* ═══════════════════════════════════════════════
   10. PROJECT CARD ENTRANCE on filter change
   ═══════════════════════════════════════════════ */
window.animateProjectCards = function () {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px) scale(0.92)";
    card.style.transition = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.transition = `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s, transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.06}s`;
        card.style.opacity = "1";
        card.style.transform = "";
      }, 10);
    });
  });
};

/* ═══════════════════════════════════════════════
   INIT ALL
   ═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initPageSplash();
  initScrollReveal();
  initCounters();
  init3DTilt();
  initMagneticButtons();
  initRipple();
  initHeroParallax();
  initAvailabilityPill();
  // Run after a short delay so fonts are loaded
  setTimeout(initLetterSplit, 300);
});
