// script/testimonials.js — Touch Carousel Testimonials

let currentSlide = 0;
let autoplayTimer = null;
let startX = 0;
let currentX = 0;
let isDragging = false;

const visibleCount = () => (window.innerWidth <= 650 ? 1 : window.innerWidth <= 900 ? 2 : 3);

function buildTestimonials() {
  const track = document.querySelector(".testimonials-track");
  const dotsContainer = document.querySelector(".carousel-dots");
  if (!track || !testimonialsData) return;

  // Duplicate data to ensure we have enough cards to scroll
  const displayData = [...testimonialsData, ...testimonialsData];

  displayData.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <span class="testimonial-quote-icon"><i class="fas fa-quote-right"></i></span>
      <div class="testimonial-stars">${"★".repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" style="background:${t.color}">${t.initials}</div>
        <div class="testimonial-author-info">
          <h4>${t.name}</h4>
          <p>${t.role}</p>
        </div>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement("span");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.dataset.index = i;
    dot.addEventListener("click", () => { goTo(i); startAutoplay(); });
    dotsContainer.appendChild(dot);
  });

  // Touch Events
  track.addEventListener("touchstart", touchStart, { passive: true });
  track.addEventListener("touchmove", touchMove, { passive: true });
  track.addEventListener("touchend", touchEnd);
  track.addEventListener("mousedown", touchStart);
  track.addEventListener("mousemove", touchMove);
  track.addEventListener("mouseup", touchEnd);
  track.addEventListener("mouseleave", () => { if (isDragging) touchEnd(); });
}

function touchStart(e) {
  isDragging = true;
  startX = getPositionX(e);
  const track = document.querySelector(".testimonials-track");
  track.style.transition = "none"; 
  clearInterval(autoplayTimer);
}

function touchMove(e) {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  currentX = currentPosition - startX;
  
  const track = document.querySelector(".testimonials-track");
  const cardWidth = track.parentElement.offsetWidth / visibleCount();
  const baseTranslate = -(currentSlide * (cardWidth + 24)); // 24 is gap estimate
  
  track.style.transform = `translateX(${baseTranslate + currentX}px)`;
}

function touchEnd() {
  isDragging = false;
  const track = document.querySelector(".testimonials-track");
  track.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
  
  if (currentX < -50) goTo(currentSlide + 1);
  else if (currentX > 50) goTo(currentSlide - 1);
  else goTo(currentSlide);
  
  currentX = 0;
  startAutoplay();
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function goTo(index) {
  const track = document.querySelector(".testimonials-track");
  const dots = document.querySelectorAll(".carousel-dot");
  const cards = track.querySelectorAll(".testimonial-card");
  const max = Math.max(0, cards.length - visibleCount());
  
  currentSlide = Math.max(0, Math.min(index, max));

  // The 1.25rem gap is 20px
  const gap = 20; 
  const cardWidth = track.parentElement.offsetWidth / visibleCount();
  
  // Calculate exact translation
  let translateAmount = currentSlide * (track.children[0].offsetWidth + gap);
  
  track.style.transform = `translateX(-${translateAmount}px)`;

  dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}

function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    const track = document.querySelector(".testimonials-track");
    const cards = track.querySelectorAll(".testimonial-card");
    const max = Math.max(0, cards.length - visibleCount());
    
    // Auto wrap around
    if (currentSlide >= max) {
      goTo(0);
    } else {
      goTo(currentSlide + 1);
    }
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  buildTestimonials();

  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (prevBtn) prevBtn.addEventListener("click", () => { goTo(currentSlide - 1); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { goTo(currentSlide + 1); startAutoplay(); });

  startAutoplay();
  window.addEventListener("resize", () => goTo(currentSlide));
});
