// Project Cards — Bento Grid with animated filter transitions, 3D tilt, overlay actions
// Categories: "client" | "personal" | "mini" | "demo"

const projectsData = [
  // ======================== CLIENT PROJECTS ========================
  {
    category: "client",
    title: "Student Sahayak",
    img: "res/images/projects/student_sahayak_logo.png",
    result: "Live on Play Store",
    desc: "A comprehensive student management app built for an educational institution. Features include schedule management, syllabus tracking, admin panel, notifications, and Google Sign-In.",
    playStore: "https://play.google.com/store/apps/details?id=com.sachin.studentsahayak",
    webLink: "https://www.studentsahayak.in/",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "client",
    title: "USH Online Academy",
    img: "res/images/projects/ush_online_academy_logo.png",
    result: "SaaS e-learning platform · Delivered in 15 days",
    desc: "A complete e-learning SaaS platform built for online course selling, student management, video-based learning, and secure payments. Designed to help the academy manage digital education professionally from one platform.",
    playStore: "N/A",
    webLink: "https://ushonline.netlify.app/",
    github: "N/A",
    techStack: ["reactjs.png", "firebase.png", "razorpay.png"],
  },
  {
    category: "client",
    title: "Pro Route",
    img: "res/images/projects/ProRouteLogo.png",
    result: "AI dashcam & fleet security website",
    desc: "A professional business website built for ProRoute, an AI-powered vehicle surveillance and fleet security brand. Presents Rakshak dashcam features, GPS tracking, live view, driver safety alerts, incident evidence capture, and transport management solutions.",
    playStore: "N/A",
    webLink: "https://proroute.in/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "reactjs.png"],
  },
  {
    category: "client",
    title: "FLEET TRACK",
    img: "res/images/projects/fleet_track.jpg",
    result: "GPS fleet tracking business website",
    desc: "A business website for Fleet Track, a GPS vehicle tracking company offering fleet tracking, goods locator, GPS locks, and fleet management solutions. The platform presents tracking services, business benefits, and contact information.",
    playStore: "N/A",
    webLink: "https://www.fleettracktz.com/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "reactjs.png"],
  },
  {
    category: "client",
    title: "Fitlix",
    img: "res/images/projects/fitlix_logo.png",
    result: "Closed testing on Play Console",
    desc: "A fitness-focused mobile app built for workout tracking, gym-related features, and user fitness engagement. Currently under closed testing on Google Play with full AI posture analysis integration.",
    playStore: "https://play.google.com/store/apps/details?id=com.acube.fitlix",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "client",
    title: "Kalsharp Dosh Trimbakeshwar",
    img: "res/images/projects/kalsharp_dosh_logo.png",
    result: "Spiritual services business website",
    desc: "A premium business platform built for spiritual and astrology services in Mumbai and Nashik. Focuses on client trust, presenting services clearly, and encouraging engagement through a professional and culturally aligned design.",
    playStore: "N/A",
    webLink: "https://kalsharpdoshtrimbkeshwar.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "client",
    title: "S.K. Construction",
    img: "res/images/projects/sk_construction_logo.png",
    result: "Corporate website · Delivered in 10 days",
    desc: "A high-performance corporate website built for a heavy piling machinery business in Kanpur. Showcases complex machinery, construction capabilities, and project expertise in a clean, business-focused layout.",
    playStore: "N/A",
    webLink: "https://sk-mauve.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },

  // ======================== PERSONAL APPS ========================
  {
    category: "personal",
    title: "Allen Connect",
    img: "res/images/projects/allen_logo_png.png",
    result: "Used by Allenhouse College students & alumni",
    desc: "An Android app built for Allenhouse College that connects students, alumni, and professors. Supports networking, mentorship, event updates, and job opportunities within a single platform.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/AllenConnect/",
    github: "https://github.com/RamaScript/Allen-Connect",
    techStack: ["java.png", "xml.png", "firebase.png", "gemini.svg", "webrtc.png"],
  },
  {
    category: "personal",
    title: "Money Mirror",
    img: "res/images/projects/money_mirror_logo.png",
    result: "Live on Play Store · 4.5★ rating",
    desc: "A Flutter expense tracker app with budget insights, category charts, and financial reports. Helps users stay on top of their spending with a clean, intuitive UI and real-time analytics.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.money_mirror",
    webLink: "https://ramascript.github.io/money-mirror_web/",
    github: "N/A",
    techStack: ["flutter.svg", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "Math Grind",
    img: "res/images/projects/math_grind_logo.png",
    result: "Gamified math practice app",
    desc: "A competitive math practice app with Training Mode (Easy/Medium/Hard), Race Mode, leaderboards, and Firebase-backed progress tracking. Built with Flutter and Riverpod for high performance.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.math_grind&hl=en_ZA",
    webLink: "https://ramascript.github.io/math-grind/",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png"],
  },
  {
    category: "personal",
    title: "Shadow Talk",
    img: "res/images/projects/shadow_talk.jpeg",
    result: "Anonymous chat — privacy-first",
    desc: "An anonymous chat Android app that lets users communicate freely without revealing their identity. Provides a safe environment for honest conversations with end-to-end privacy.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/ShadowTalk/",
    techStack: ["java.png", "xml.png", "firebase.png"],
  },
  {
    category: "personal",
    title: "Retro Games",
    img: "res/images/projects/Retro_games.jpg",
    result: "6 classic games in one app",
    desc: "An Android app that brings classic retro games in a modern interface, plus a chat feature for users to share gaming experiences.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.retro_games&hl=en_ZA",
    webLink: "https://ramascript.github.io/retro-games/",
    github: "https://github.com/RamaScript/Retro-Games",
    techStack: ["java.png", "xml.png"],
  },
  {
    category: "personal",
    title: "Algo Layers",
    img: "res/images/projects/algo_layers_logo.png",
    result: "Live on Play Store",
    desc: "A learning-focused Android app designed to help students understand programming concepts, algorithms, and logic-building topics in a structured way.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.algolayer",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "Donee",
    img: "res/images/projects/donee_logo.png",
    result: "Live on Play Store",
    desc: "A productivity and task-management app built to help users organise daily work, track tasks, and stay consistent with a clean mobile-first experience.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.donee",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "Gita Bodh",
    img: "res/images/projects/gita_bodh_logo.png",
    result: "Closed testing on Play Console",
    desc: "A spiritual learning app based on Bhagavad Gita content, built with a clean reading experience and mobile-friendly interface for daily wisdom and reflection.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.gitabodh",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "Neon Calc",
    img: "res/images/projects/neon_calc_logo.png",
    result: "Live on Play Store",
    desc: "A stylish calculator app with a neon-themed interface, built to deliver quick calculations with a modern and minimal Android experience.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.neoncalc",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "Reviso",
    img: "res/images/projects/reviso_logo.png",
    result: "Closed testing on Play Console",
    desc: "A spaced-repetition and active-recall learning app that helps students revise topics at the right time, track weak areas, and build consistent study habits.",
    playStore: "https://play.google.com/store/apps/details?id=com.ramascript.reviso",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "ADB King",
    img: "res/images/projects/adb_king_logo.png",
    result: "Desktop utility for Android developers",
    desc: "A cross-platform desktop tool designed to simplify common ADB operations for Android developers — manage devices, run commands, inspect apps, and perform debugging through a clean GUI.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/ADB-KING",
    techStack: ["python.png", "qt.png"],
  },

  // ======================== MINI / PRACTICE ========================
  {
    category: "mini",
    title: "Type Race",
    img: "res/images/projects/type_race_logo.png",
    result: "Real-time multiplayer typing race game",
    desc: "A real-time multiplayer typing race game built with vanilla JavaScript and Firebase. Create or join rooms, race with up to 5 players, track live progress, chat in the lobby, and view WPM, accuracy, mistakes, and rankings.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/type-race/",
    github: "https://github.com/RamaScript/type-race",
    techStack: ["html5.png", "css3.png", "javascript.png", "firebase.png"],
  },
  {
    category: "mini",
    title: "Shadow Draw",
    img: "res/images/projects/shadow_draw_logo.png",
    result: "Real-time hand gesture air drawing system",
    desc: "A browser-based computer vision project that lets users draw in the air using hand gestures captured through a webcam. Built with MediaPipe Hands, HTML5 Canvas, and WebRTC with pinch-to-draw, fist-clear, and undo/redo.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/shadow-draw/",
    github: "https://github.com/RamaScript/shadow-draw",
    techStack: ["html5.png", "css3.png", "javascript.png", "mediapipe.png"],
  },
  {
    category: "mini",
    title: "PasteBoard",
    img: "res/images/projects/pasteboard_logo.png",
    result: "Instant real-time text sharing web app",
    desc: "A lightweight real-time text sharing web app. Create pads, auto-save text to Firebase Firestore, and share content instantly using a 4-digit code or direct link. No login required.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/copy-paste/",
    github: "https://github.com/RamaScript/copy-paste",
    techStack: ["html5.png", "css3.png", "javascript.png", "firebase.png"],
  },
  {
    category: "mini",
    title: "Fitlix AI Trainer",
    img: "res/images/projects/fitlix_ai_trainer_logo.png",
    result: "Real-time AI workout posture analysis system",
    desc: "A camera-based AI workout trainer built with MediaPipe Pose. Detects body posture in real time, counts only valid reps, rejects incorrect ones, and provides voice feedback for exercises like push-ups, squats, pull-ups, and more.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/gym-ai/",
    github: "https://github.com/RamaScript/gym-ai",
    techStack: ["html5.png", "css3.png", "javascript.png", "mediapipe.png"],
  },
  {
    category: "mini",
    title: "Rama Quiz",
    img: "res/images/projects/rama_quiz.png",
    result: "Web quiz app · Multi-subject",
    desc: "A web-based quiz app with multiple subjects and instant scoring. Built to sharpen JavaScript and DOM manipulation skills.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/Rama-Quiz/",
    github: "https://github.com/RamaScript/Rama-Quiz",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "mini",
    title: "Rama Fitness",
    img: "res/images/projects/rama_fitness_logo.png",
    result: "Modern responsive gym website",
    desc: "A modern, responsive fitness website for Rama Fitness, Chandigarh. Showcases gym programs, expert trainers, membership plans, and strong call-to-action sections with a bold fitness-focused design.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/gym/",
    github: "https://github.com/RamaScript/gym",
    techStack: ["html5.png", "css3.png"],
  },
  {
    category: "mini",
    title: "Institute Course Portal",
    img: "res/images/projects/institute_course_portal_logo.png",
    result: "Static course syllabus explorer",
    desc: "A course syllabus explorer for Ramascript with a landing page, course cards, hash-based routing, sidebar module navigation, and JSON-driven syllabus content supporting C/C++ and Python modules.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/institute/",
    github: "https://github.com/RamaScript/institute",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },

  // ======================== DEMO PROJECTS ========================
  {
    category: "demo",
    title: "FitCore - Gym Website",
    img: "res/images/projects/fircore_logo.png",
    result: "Fitness & gym website",
    desc: "A modern gym and fitness website built for AARVJS, featuring workout programs, membership plans, trainer profiles, and a bold fitness-focused design.",
    playStore: "N/A",
    webLink: "https://gym-aarvjs.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "demo",
    title: "PrimEdge Academy",
    img: "res/images/projects/primedge_logo.png",
    result: "Coaching & education website",
    desc: "A professional coaching institute website built for AARVJS, showcasing courses, faculty, schedules, and student resources with a clean and engaging layout.",
    playStore: "N/A",
    webLink: "https://couchingaarvjs.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "demo",
    title: "Glamour Studio - Salon",
    img: "res/images/projects/salon_logo.png",
    result: "Salon & beauty services website",
    desc: "A stylish salon website built for AARVJS, featuring service menus, pricing, booking information, and gallery sections with a sleek visual design.",
    playStore: "N/A",
    webLink: "https://salonaarvjs.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "demo",
    title: "CarePlus - Clinic",
    img: "res/images/projects/CarePlus_logo.png",
    result: "Clinic & healthcare website",
    desc: "A clean and professional clinic website built for AARVJS, featuring doctor profiles, services, appointment booking, and health information sections.",
    playStore: "N/A",
    webLink: "https://clinic-website-aarvjs.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "demo",
    title: "Bright Future - School",
    img: "res/images/projects/bright_logo.png",
    result: "School & education website",
    desc: "A vibrant school website built for AARVJS, featuring academics, admissions, events, gallery, and parent resources with a child-friendly design.",
    playStore: "N/A",
    webLink: "https://school-website-aarvjs.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "demo",
    title: "TravelVista",
    img: "res/images/projects/wanderlux_logo.png",
    result: "Travel & tourism website",
    desc: "A visually immersive travel website showcasing destinations, tour packages, travel guides, and booking options with stunning imagery and smooth navigation.",
    playStore: "N/A",
    webLink: "https://travelvista-website.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "demo",
    title: "The Sizzling Plate",
    img: "res/images/projects/rest_logo.png",
    result: "Restaurant & dining website",
    desc: "A mouth-watering restaurant website featuring menu displays, ambiance gallery, reservation booking, location info, and a delicious visual experience.",
    playStore: "N/A",
    webLink: "https://thesizzlingplate.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
];

// ================================================================
// Badge config
// ================================================================
const badgeConfig = {
  client:   { cls: "badge-client",   icon: "fas fa-star",       label: "Client Project" },
  personal: { cls: "badge-personal", icon: "fas fa-mobile-alt", label: "Personal App"   },
  mini:     { cls: "badge-mini",     icon: "fas fa-tools",      label: "Mini Project"   },
  demo:     { cls: "badge-demo",     icon: "fas fa-eye",        label: "Demo"           },
};

// Count per category
const categoryCounts = {
  client:   projectsData.filter((p) => p.category === "client").length,
  personal: projectsData.filter((p) => p.category === "personal").length,
  mini:     projectsData.filter((p) => p.category === "mini").length,
  demo:     projectsData.filter((p) => p.category === "demo").length,
};

// ================================================================
// Inject count pills into filter tabs
// ================================================================
function injectTabCounts() {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const cat = tab.dataset.filter;
    const count = categoryCounts[cat];
    if (count === undefined) return;
    // Only add if not already there
    if (!tab.querySelector(".tab-count")) {
      const pill = document.createElement("span");
      pill.className = "tab-count";
      pill.textContent = count;
      tab.appendChild(pill);
    }
  });
}

// ================================================================
// Build overlay HTML helper
// ================================================================
function buildOverlay(project) {
  const hasPlay = project.playStore && project.playStore !== "N/A";
  const hasWeb  = project.webLink   && project.webLink   !== "N/A";
  const hasGH   = project.github    && project.github    !== "N/A";

  const btns = [];
  if (hasPlay) btns.push(`<a href="${project.playStore}" target="_blank" class="overlay-btn btn-play"><i class="fab fa-google-play"></i> Play Store</a>`);
  if (hasWeb)  btns.push(`<a href="${project.webLink}"   target="_blank" class="overlay-btn btn-web"><i class="fas fa-globe"></i> Visit Site</a>`);
  if (hasGH)   btns.push(`<a href="${project.github}"    target="_blank" class="overlay-btn btn-gh"><i class="fab fa-github"></i> GitHub</a>`);

  if (btns.length === 0) return "";
  return `<div class="project-overlay">${btns.join("")}</div>`;
}

// ================================================================
// Render cards — Bento layout (first 2 in client = featured)
// ================================================================
function createProjectCards(filter = "client") {
  const container = document.getElementById("projects-container");
  if (!container) return;

  // --- Exit animation ---
  const existing = container.querySelectorAll(".project-card");
  existing.forEach((c) => {
    c.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    c.style.opacity = "0";
    c.style.transform = "scale(0.9) translateY(-10px)";
  });

  setTimeout(() => {
    container.innerHTML = "";

    const filtered =
      filter === "all"
        ? projectsData
        : projectsData.filter((p) => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement("div");
      const isFirst2 = (filter === "client" || filter === "all") && idx < 2;
      card.className = `project-card tilt-card ripple-wrap${isFirst2 ? " featured" : ""}`;
      card.dataset.category = project.category;

      const badge = badgeConfig[project.category];
      const globalIndex = projectsData.indexOf(project);

      card.innerHTML = `
        <div class="project-image">
          <img class="project-img" loading="lazy" src="${project.img}" alt="${project.title}">
          ${buildOverlay(project)}
        </div>
        <div class="project-content">
          <div class="project-badge ${badge.cls}">
            <i class="${badge.icon}"></i> ${badge.label}
          </div>
          <div class="project-header">
            <h3>${project.title}</h3>
          </div>
          ${project.result ? `<p class="project-result"><i class="fas fa-chart-line"></i> ${project.result}</p>` : ""}
          <p class="project-desc">${project.desc}</p>
          <button class="details-btn ripple-wrap" data-index="${globalIndex}">
            <i class="fas fa-info-circle"></i> View Details
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    // Attach detail button listeners
    container.querySelectorAll(".details-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectModal(projectsData[btn.dataset.index]);
      });
    });

    // Attach 3D tilt to each card
    attachCardTilt();

    // Entrance animation
    if (window.animateProjectCards) window.animateProjectCards();

  }, existing.length > 0 ? 220 : 0);
}

// ================================================================
// 3D Card Tilt
// ================================================================
function attachCardTilt() {
  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  if (isMobile) return;

  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transition = "transform 0.1s ease, box-shadow 0.25s ease";
      card.style.transform = `perspective(700px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) scale(1.02)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease";
      card.style.transform = "";
    });
  });
}

// ================================================================
// MODAL
// ================================================================
function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const hasPlayStore = project.playStore && project.playStore !== "N/A";
  const hasWebLink   = project.webLink   && project.webLink   !== "N/A";
  const hasGithub    = project.github    && project.github    !== "N/A";

  const modalContent = modal.querySelector(".project-modal-content");

  const techStackHtml = project.techStack
    .map((tech) => `
      <div class="modal-tech-item">
        <img src="res/images/logo/${tech}" alt="${tech}">
        <span>${tech.split(".")[0].toUpperCase()}</span>
      </div>
    `)
    .join("");

  modalContent.innerHTML = `
    <div class="modal-handle"></div>
    <button class="modal-close" id="modal-close-btn"><i class="fas fa-times"></i></button>
    <div class="modal-header-img">
      <img src="${project.img}" alt="${project.title}">
    </div>
    <div class="modal-body">
      <div class="modal-title-row">
        <h2>${project.title}</h2>
        ${project.result ? `<p class="project-result"><i class="fas fa-chart-line"></i> ${project.result}</p>` : ""}
      </div>
      <span class="modal-section-title">Description</span>
      <p class="modal-desc">${project.desc}</p>
      <span class="modal-section-title">Technologies Used</span>
      <div class="modal-tech-stack">${techStackHtml}</div>
      <div class="modal-footer-links">
        ${hasPlayStore ? `<a href="${project.playStore}" target="_blank" class="modal-link link-playstore"><i class="fab fa-google-play"></i> Google Play</a>` : ""}
        ${hasWebLink   ? `<a href="${project.webLink}"   target="_blank" class="modal-link link-web"><i class="fas fa-globe"></i> Visit Site</a>` : ""}
        ${hasGithub    ? `<a href="${project.github}"    target="_blank" class="modal-link link-github"><i class="fab fa-github"></i> Source Code</a>` : ""}
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  document.getElementById("modal-close-btn")
    .addEventListener("click", closeProjectModal);

  // Mobile swipe-to-close
  initModalSwipeClose(modal, modalContent);
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Close on backdrop click
document.addEventListener("click", (e) => {
  const modal = document.getElementById("project-modal");
  if (e.target === modal) closeProjectModal();
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectModal();
});

// ================================================================
// MOBILE SWIPE-DOWN TO CLOSE (bottom sheet)
// ================================================================
function initModalSwipeClose(modal, content) {
  if (!window.matchMedia("(max-width: 700px)").matches) return;

  let startY = 0;
  let isDragging = false;

  content.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    isDragging = true;
  }, { passive: true });

  content.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientY - startY;
    if (delta > 0) {
      content.style.transform = `translateY(${delta}px)`;
      content.style.transition = "none";
    }
  }, { passive: true });

  content.addEventListener("touchend", (e) => {
    isDragging = false;
    const delta = e.changedTouches[0].clientY - startY;
    if (delta > 100) {
      closeProjectModal();
    } else {
      content.style.transform = "";
      content.style.transition = "";
    }
  }, { passive: true });
}

// ================================================================
// FILTER TABS — with swipe support on mobile
// ================================================================
function initProjectFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      createProjectCards(tab.dataset.filter);
    });
  });

  // Swipe left/right on filter tabs row for mobile
  const tabsRow = document.querySelector(".project-filter-tabs");
  if (!tabsRow) return;
  let touchStartX = 0;
  const filterOrder = ["client", "personal", "mini", "demo"];

  tabsRow.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  tabsRow.addEventListener("touchend", (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) < 60) return;
    const activeTab = document.querySelector(".filter-tab.active");
    if (!activeTab) return;
    const currentIdx = filterOrder.indexOf(activeTab.dataset.filter);
    const nextIdx = delta < 0
      ? Math.min(currentIdx + 1, filterOrder.length - 1)
      : Math.max(currentIdx - 1, 0);
    if (nextIdx !== currentIdx) {
      tabs[nextIdx].click();
    }
  }, { passive: true });
}

// ================================================================
// INIT
// ================================================================
document.addEventListener("DOMContentLoaded", () => {
  injectTabCounts();
  createProjectCards("client");
  initProjectFilters();
});
