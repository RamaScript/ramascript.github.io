// Project Cards with Category Filtering
// Categories: "client" | "personal" | "mini"

const projectsData = [
  // ======================== CLIENT PROJECTS ========================
  {
    category: "client",
    title: "Student Sahayak",
    img: "res/images/projects/student_sahayak_logo.png", // replace with student_sahayak image when available
    result: "Live on Play Store",
    desc: "A comprehensive student management app built for an educational institution. Features include schedule management, syllabus tracking, admin panel, notifications, and Google Sign-In.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.sachin.studentsahayak",
    webLink: "https://www.studentsahayak.in/",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "client",
    title: "Pro Route",
    img: "res/images/projects/ProRouteLogo.png", // add ProRoute logo/image
    result: "AI dashcam & fleet security website",
    desc: "A professional business website built for ProRoute, an AI-powered vehicle surveillance and fleet security brand. The website presents Rakshak dashcam features, GPS tracking, live view, driver safety alerts, incident evidence capture, and transport management solutions in a clean and conversion-focused layout.",
    playStore: "N/A",
    webLink: "https://proroute.in/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "reactjs.png"],
  },
  {
    category: "client",
    title: "FLEET TRACK",
    img: "res/images/projects/fleet_track.jpg", // add ProRoute logo/image
    result: "GPS fleet tracking business website",
    desc: "A business website for Fleet Track, a GPS vehicle tracking company offering fleet tracking, goods locator, GPS locks, and fleet management solutions. The platform presents tracking services, business benefits, login access, news updates, and contact information in a structured company website format.",

    playStore: "N/A",
    webLink: "https://www.fleettracktz.com/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "reactjs.png"],
  },
  {
    category: "personal",
    title: "Allen Connect",
    img: "res/images/projects/allen_logo_png.png",
    result: "Used by Allenhouse College students & alumni",
    desc: "An Android app built for Allenhouse College that connects students, alumni, and professors. Supports networking, mentorship, event updates, and job opportunities within a single platform.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/AllenConnect/",
    github: "https://github.com/RamaScript/Allen-Connect",
    techStack: [
      "java.png",
      "xml.png",
      "firebase.png",
      "gemini.svg",
      "webrtc.png",
    ],
  },

  // ======================== PERSONAL APPS ========================
  {
    category: "personal",
    title: "Money Mirror",
    img: "res/images/projects/money_mirror_logo.png",
    result: "Live on Play Store · 4.5★ rating",
    desc: "A Flutter expense tracker app with budget insights, category charts, and financial reports. Helps users stay on top of their spending with a clean, intuitive UI.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.money_mirror",
    webLink: "https://ramascript.github.io/money-mirror_web/",
    github: "N/A",
    techStack: ["flutter.svg", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "Math Grind",
    img: "res/images/projects/math_grind_logo.png", // replace with math_grind image
    result: "Gamified math practice app",
    desc: "A competitive math practice app with Training Mode (Easy/Medium/Hard), Race Mode, leaderboards, and Firebase-backed progress tracking. Built with Flutter and Riverpod.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.math_grind&hl=en_ZA",
    webLink: "https://ramascript.github.io/math-grind/",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png"],
  },
  {
    category: "personal",
    title: "Shadow Talk",
    img: "res/images/projects/shadow_talk.jpeg",
    result: "Anonymous chat — privacy-first",
    desc: "An anonymous chat Android app that lets users communicate freely without revealing their identity. Provides a safe environment for honest conversations.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/ShadowTalk/",
    techStack: ["java.png", "xml.png", "firebase.png"],
  },

  // ======================== MINI / PRACTICE ========================
  {
    category: "personal",
    title: "Retro Games",
    img: "res/images/projects/Retro_games.jpg",
    result: "6 classic games in one app",
    desc: "An Android app that brings classic retro games in a modern interface, plus a chat feature for users to share gaming experiences.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.retro_games&hl=en_ZA",
    webLink: "https://ramascript.github.io/retro-games/",
    github: "https://github.com/RamaScript/Retro-Games",
    techStack: ["java.png", "xml.png"],
  },
  {
    category: "mini",
    title: "Rama Quiz",
    img: "res/images/projects/rama_quiz.png",
    result: "Web quiz app · Multi-subject",
    desc: "A web-based quiz app with multiple subjects and instant scoring. Built to sharpen JavaScript and DOM skills.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/Rama-Quiz/",
    github: "https://github.com/RamaScript/Rama-Quiz",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "personal",
    title: "Algo Layers",
    img: "res/images/projects/algo_layers_logo.png",
    result: "Live on Play Store",
    desc: "A learning-focused Android app designed to help students understand programming concepts, algorithms, and logic-building topics in a structured way.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.algolayer",
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
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.donee",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "client",
    title: "Fitlix",
    img: "res/images/projects/fitlix_logo.png",
    result: "Closed testing on Play Console",
    desc: "A fitness-focused mobile app built for workout tracking, gym-related features, and user fitness engagement. Currently under closed testing on Google Play.",
    playStore: "https://play.google.com/store/apps/details?id=com.acube.fitlix",
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
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.gitabodh",
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
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.neoncalc",
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
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.reviso",
    webLink: "N/A",
    github: "N/A",
    techStack: ["flutter.svg", "firebase.png", "googleplayconsole.svg"],
  },
  {
    category: "personal",
    title: "ADB King",
    img: "res/images/projects/adb_king_logo.png",
    result: "Desktop utility for Android developers",
    desc: "A cross-platform desktop tool designed to simplify common ADB operations for Android developers. It helps manage connected devices, run ADB commands, inspect apps, and perform debugging tasks through a clean GUI instead of manually typing commands in the terminal.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/ADB-KING",
    techStack: ["python.png", "qt.png"],
  },
  {
    category: "mini",
    title: "Type Race",
    img: "res/images/projects/type_race_logo.png",
    result: "Real-time multiplayer typing race game",
    desc: "A real-time multiplayer typing race game built with vanilla JavaScript and Firebase Realtime Database. Users can create or join rooms, race with up to 5 players, track live progress, chat in the lobby, and view WPM, accuracy, mistakes, and final rankings.",
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
    desc: "A browser-based computer vision project that lets users draw in the air using hand gestures captured through a webcam. Built with MediaPipe Hands, HTML5 Canvas, WebRTC, and JavaScript, it supports pinch-to-draw, open-hand stop, fist clear, smoothing filters, undo/redo, PNG export, and live performance metrics.",
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
    desc: "A lightweight real-time text sharing web app that lets users create pads, auto-save text to Firebase Firestore, and share content instantly using a 4-digit code or direct link. Built as a single-file web app with no login, live character/word count, copy-all, clear pad, sharing modal, and cross-platform support.",
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
    desc: "A camera-based AI workout trainer built with HTML, CSS, JavaScript, and MediaPipe Pose. It runs inside the Fitlix Flutter app through WebView, detects body posture in real time, counts only valid reps, rejects incorrect or fake reps, and provides instant visual and voice feedback for exercises like push-ups, squats, pull-ups, lunges, sit-ups, bicep curls, shoulder press, and jumping jacks.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/gym-ai/",
    github: "https://github.com/RamaScript/gym-ai",
    techStack: ["html5.png", "css3.png", "javascript.png", "mediapipe.png"],
  },
  {
    category: "client",
    title: "Kalsharp Dosh Trimbakeshwar",
    img: "res/images/projects/kalsharp_dosh_logo.png",
    result: "Spiritual services business website",
    desc: "A premium business platform built for spiritual and astrology services in Mumbai and Nashik. The website focuses on building client trust, presenting services clearly, and encouraging deep engagement through a professional and culturally aligned design.",
    playStore: "N/A",
    webLink: "https://kalsharpdoshtrimbkeshwar.vercel.app/ ",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "client",
    title: "S.K. Construction",
    img: "res/images/projects/sk_construction_logo.png",
    result: "Corporate website · Delivered in 10 days",
    desc: "A high-performance corporate website built for a heavy piling machinery business in Kanpur. The platform showcases complex machinery, construction capabilities, and project expertise in a clean, business-focused layout.",
    playStore: "N/A",
    webLink: "https://sk-mauve.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
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
    category: "mini",
    title: "Rama Fitness",
    img: "res/images/projects/rama_fitness_logo.png",
    result: "Modern responsive gym website",
    desc: "A modern, responsive fitness website built for Rama Fitness, Chandigarh. It showcases gym programs, expert trainers, membership plans, pricing, company story, and strong call-to-action sections using a bold red, black, and gold fitness-focused design.",
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
    desc: "A course syllabus explorer built for Ramascript with a landing page, course cards, hash-based routing, sidebar module navigation, and JSON-driven syllabus content. It supports C/C++ and Python modules with chapters, topics, assignments, and final project details in a responsive web interface.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/institute/",
    github: "https://github.com/RamaScript/institute",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  // ======================== DEMO PROJECTS ========================
  {
    category: "demo",
    title: "FitCore - Gym Website ",
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
    title: "PrimEdge Academy - Coaching Website",
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
    title: " Glamour Studio - Salon Website",
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
    title: "CarePlus - Clinic Website",
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
    title: "Bright Future - School Website",
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
    title: "TravelVista - Travel Website",
    img: "res/images/projects/wanderlux_logo.png",
    result: "Travel & tourism website",
    desc: "A visually immersive travel website that showcases destinations, tour packages, travel guides, and booking options with stunning imagery and smooth navigation.",
    playStore: "N/A",
    webLink: "https://travelvista-website.vercel.app/",
    github: "N/A",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
  {
    category: "demo",
    title: "The Sizzling Plate - Restaurant Website",
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
  client: { cls: "badge-client", icon: "fas fa-star", label: "Client Project" },
  personal: {
    cls: "badge-personal",
    icon: "fas fa-mobile-alt",
    label: "Personal App",
  },
  mini: { cls: "badge-mini", icon: "fas fa-tools", label: "Mini Project" },
  demo: { cls: "badge-demo", icon: "fas fa-eye", label: "Demo" },
};

// ================================================================
// Render cards
// ================================================================
function createProjectCards(filter = "client") {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = "";

  const filtered =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.category = project.category;

    const badge = badgeConfig[project.category];

    card.innerHTML = `
      <div class="project-image">
        <img class="project-img" loading="lazy" src="${project.img}" alt="${project.title}">
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
        <button class="details-btn" data-index="${projectsData.indexOf(project)}">
          <i class="fas fa-info-circle"></i> View Details
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  // Add event listeners to all details buttons
  const detailBtns = container.querySelectorAll(".details-btn");
  detailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      openProjectModal(projectsData[index]);
    });
  });
}

// ======================== MODAL LOGIC ========================
function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const hasPlayStore = project.playStore && project.playStore !== "N/A";
  const hasWebLink = project.webLink && project.webLink !== "N/A";
  const hasGithub = project.github && project.github !== "N/A";

  const modalContent = modal.querySelector(".project-modal-content");

  const techStackHtml = project.techStack
    .map(
      (tech) => `
      <div class="modal-tech-item">
        <img src="res/images/logo/${tech}" alt="${tech}">
        <span>${tech.split(".")[0].toUpperCase()}</span>
      </div>
    `,
    )
    .join("");

  modalContent.innerHTML = `
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
      <div class="modal-tech-stack">
        ${techStackHtml}
      </div>
      
      <div class="modal-footer-links">
        ${hasPlayStore ? `<a href="${project.playStore}" target="_blank" class="modal-link link-playstore"><i class="fab fa-google-play"></i> Google Play</a>` : ""}
        ${hasWebLink ? `<a href="${project.webLink}" target="_blank" class="modal-link link-web"><i class="fas fa-globe"></i> Visit Site</a>` : ""}
        ${hasGithub ? `<a href="${project.github}" target="_blank" class="modal-link link-github"><i class="fab fa-github"></i> Source Code</a>` : ""}
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Re-attach close event listener
  document
    .getElementById("modal-close-btn")
    .addEventListener("click", closeProjectModal);
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Close modal when clicking outside content
document.addEventListener("click", (e) => {
  const modal = document.getElementById("project-modal");
  if (e.target === modal) {
    closeProjectModal();
  }
});

// ================================================================
// Filter tabs
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
}

document.addEventListener("DOMContentLoaded", () => {
  createProjectCards("client");
  initProjectFilters();
});
