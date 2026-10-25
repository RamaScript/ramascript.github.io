// script/testimonials.js — Modern Client Reviews Carousel

let currentSlide = 0;
let autoplayTimer = null;
let startX = 0;
let currentX = 0;
let isDragging = false;

const getTestimonials = () => {
  if (typeof testimonialsData !== "undefined" && Array.isArray(testimonialsData)) {
    return testimonialsData;
  }
  if (typeof window !== "undefined" && Array.isArray(window.testimonialsData)) {
    return window.testimonialsData;
  }
  return [];
};

const getVisibleCount = () => {
  if (window.innerWidth <= 680) return 1;
  if (window.innerWidth <= 990) return 2;
  return 3;
};

const getMaxSlide = () => {
  const data = getTestimonials();
  return Math.max(0, data.length - getVisibleCount());
};

function buildTestimonials() {
  const track = document.querySelector(".testimonials-track");
  const data = getTestimonials();
  if (!track || !data || data.length === 0) return;

  track.innerHTML = "";

  data.forEach((t) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <div class="testimonial-stars" aria-label="5 star rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>

      <p class="testimonial-text">"${t.text}"</p>

      <div class="testimonial-author">
        <div class="testimonial-avatar">
          <i class="${t.icon || "fas fa-user"}"></i>
        </div>
        <div class="testimonial-author-info">
          <h4>${t.name}</h4>
          <p>${t.role}</p>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  renderDots();
  attachTouchEvents();
  updateCarousel();
}

function renderDots() {
  const dotsContainer = document.getElementById("carousel-dots");
  const data = getTestimonials();
  if (!dotsContainer || data.length === 0) return;

  const max = getMaxSlide();
  dotsContainer.innerHTML = "";

  for (let i = 0; i <= max; i++) {
    const dot = document.createElement("button");
    dot.className = `carousel-dot ${i === currentSlide ? "active" : ""}`;
    dot.setAttribute("aria-label", `Go to review slide ${i + 1}`);
    dot.addEventListener("click", () => {
      goTo(i);
      startAutoplay();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlide);
  });
}

function updateCarousel() {
  const track = document.querySelector(".testimonials-track");
  if (!track || !track.children.length) return;

  const max = getMaxSlide();
  currentSlide = Math.max(0, Math.min(currentSlide, max));

  const firstCard = track.children[0];
  const cardWidth = firstCard.offsetWidth;
  const gap = 20; // 1.25rem gap
  const translateAmount = currentSlide * (cardWidth + gap);

  track.style.transform = `translateX(-${translateAmount}px)`;
  updateDots();
}

function goTo(index) {
  const max = getMaxSlide();
  if (index > max) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = max;
  } else {
    currentSlide = index;
  }
  updateCarousel();
}

function attachTouchEvents() {
  const carousel = document.querySelector(".testimonials-carousel");
  const track = document.querySelector(".testimonials-track");
  if (!track || !carousel) return;

  // Touch Events
  track.addEventListener("touchstart", touchStart, { passive: true });
  track.addEventListener("touchmove", touchMove, { passive: true });
  track.addEventListener("touchend", touchEnd);

  // Mouse drag
  track.addEventListener("mousedown", touchStart);
  track.addEventListener("mousemove", touchMove);
  track.addEventListener("mouseup", touchEnd);
  track.addEventListener("mouseleave", () => {
    if (isDragging) touchEnd();
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", () => clearInterval(autoplayTimer));
  carousel.addEventListener("mouseleave", startAutoplay);
}

function touchStart(e) {
  isDragging = true;
  startX = getPositionX(e);
  const track = document.querySelector(".testimonials-track");
  if (track) track.style.transition = "none";
  clearInterval(autoplayTimer);
}

function touchMove(e) {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  currentX = currentPosition - startX;

  const track = document.querySelector(".testimonials-track");
  if (!track || !track.children.length) return;

  const cardWidth = track.children[0].offsetWidth;
  const gap = 20;
  const baseTranslate = -(currentSlide * (cardWidth + gap));

  track.style.transform = `translateX(${baseTranslate + currentX}px)`;
}

function touchEnd() {
  if (!isDragging) return;
  isDragging = false;

  const track = document.querySelector(".testimonials-track");
  if (track) {
    track.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
  }

  if (currentX < -40) {
    goTo(currentSlide + 1);
  } else if (currentX > 40) {
    goTo(currentSlide - 1);
  } else {
    goTo(currentSlide);
  }

  currentX = 0;
  startAutoplay();
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    goTo(currentSlide + 1);
  }, 4500);
}

function initTestimonials() {
  buildTestimonials();

  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goTo(currentSlide - 1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goTo(currentSlide + 1);
      startAutoplay();
    });
  }

  startAutoplay();

  window.addEventListener("resize", () => {
    renderDots();
    updateCarousel();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTestimonials);
} else {
  initTestimonials();
}
