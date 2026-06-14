// Scroll reveal + counter trigger
// Works with both old .reveal/.reveal-stagger classes and new .anim-* classes

(function () {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;

        // Classic reveal classes
        el.classList.add("revealed", "is-visible");

        // Counter animation for stat numbers
        el.querySelectorAll("[data-count]").forEach((counter) => {
          const target = parseInt(counter.dataset.count, 10);
          const suffix = counter.dataset.suffix !== undefined ? counter.dataset.suffix : "+";
          animateStat(counter, target, suffix);
        });

        revealObserver.unobserve(el);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );

  function animateStat(el, target, suffix) {
    const duration = 1500;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll(
        ".reveal, .reveal-stagger, .anim-fade-up, .anim-slide-left, .anim-slide-right, .anim-scale-in, .anim-clip-reveal"
      )
      .forEach((el) => revealObserver.observe(el));
  });
})();
