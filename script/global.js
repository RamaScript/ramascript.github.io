// Dark mode / Light mode — LIGHT is default, dark is opt-in

const themeSwitch = document.querySelector(".theme-switch-wrapper");
if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Save preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// Check local storage for theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// ─── Premium Cursor ───────────────────────────────────────────
const cursorDot  = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (cursorDot && cursorRing) {
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let isHovering = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Silky trailing ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Magnetic expand on hover over interactive elements
  const interactives = "a, button, input, textarea, .filter-tab, .why-card, .cert-chip, .project-card, label";
  document.querySelectorAll(interactives).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorRing.classList.add("ring-hover");
      cursorDot.classList.add("dot-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursorRing.classList.remove("ring-hover");
      cursorDot.classList.remove("dot-hover");
    });
  });

  // Click burst
  document.addEventListener("mousedown", () => cursorRing.classList.add("ring-click"));
  document.addEventListener("mouseup",   () => cursorRing.classList.remove("ring-click"));

  // Hide / show when leaving window
  document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity  = "0";
    cursorRing.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity  = "1";
    cursorRing.style.opacity = "1";
  });
}

