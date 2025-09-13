// ScrollSpy

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scrollspy");
  const navLinks = document.querySelectorAll("#nav-links-all a");
  const observerOptions = {
    threshold: [0.25, 0.5, 0.75],
    rootMargin: "0px 0px -25% 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);
  sections.forEach((section) => {
    observer.observe(section);
  });
});
