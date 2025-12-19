// Project Cards Dynamic Generation
const projectsData = [
  {
    title: "Allen Connect",
    img: "res/images/projects/allen_logo_png.png",
    desc: "An Android app built for Allenhouse college that connects students, alumni, and professors. It supports networking, mentorship, event updates, and job opportunities within a single unified platform.",
    playStore: "dsfg",
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
  {
    title: "Money Mirror",
    img: "res/images/projects/money_mirror_logo.png",
    desc: "An Android app designed to help users track expenses and manage budgets efficiently. It offers clear financial insights, enabling users to make informed decisions and maintain better money control.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.ramascript.money_mirror",
    webLink: "https://ramascript.github.io/money-mirror_web/",
    github: "N/A",
    techStack: ["flutter.svg", "googleplayconsole.svg"],
  },
  {
    title: "Shadow Talk",
    img: "res/images/projects/shadow_talk.jpeg",
    desc: "An anonymous chat Android app that allows users to communicate freely without revealing identity. It provides a safe environment for honest conversations and meaningful discussions.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/ShadowTalk/",
    techStack: ["java.png", "xml.png", "firebase.png"],
  },
  {
    title: "Retro Games",
    img: "res/images/projects/Retro_games.jpg",
    desc: "An Android app that brings back classic retro games in a modern interface. It also includes a chat feature, allowing users to interact and share their gaming experiences.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/Retro-Games",
    techStack: ["java.png", "xml.png"],
  },
  {
    title: "Rama Quiz",
    img: "res/images/projects/rama_quiz.png",
    desc: "A web-based quiz application that allows users to test knowledge across multiple subjects. It offers interactive quizzes designed to improve learning and self-assessment.",
    playStore: "N/A",
    webLink: "https://ramascript.github.io/Rama-Quiz/",
    github: "https://github.com/RamaScript/Rama-Quiz",
    techStack: ["html5.png", "css3.png", "javascript.png"],
  },
];

function createProjectCards() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = "";
  projectsData.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    // Create links section only if at least one link is available
    const hasPlayStore = project.playStore !== "N/A";
    const hasWebLink = project.webLink !== "N/A";
    const hasGithub = project.github && project.github !== "N/A";

    card.innerHTML = `
      <div class="project-image">
        <img class="project-img" loading="lazy" src="${project.img}" alt="${
      project.title
    }">
      </div>
      <div class="project-content">
        <div class="project-header">
          <h3>${project.title}</h3>
          <div class="project-quick-links">
            ${
              hasPlayStore
                ? `
              <a href="${project.playStore}" target="_blank" class="quick-link" title="View on Play Store">
                <i class="fab fa-google-play"></i>
              </a>
            `
                : ""
            }
            ${
              hasWebLink
                ? `
              <a href="${project.webLink}" target="_blank" class="quick-link" title="Visit Website">
                <i class="fas fa-globe"></i>
              </a>
            `
                : ""
            }
            ${
              hasGithub
                ? `
              <a href="${project.github}" target="_blank" class="quick-link" title="View Code on GitHub">
                <i class="fab fa-github"></i>
              </a>
            `
                : ""
            }
          </div>
        </div>
        <p class="tech-stack">${project.techStack
          .map(
            (tech) =>
              `<img src="res/images/logo/${tech}" alt="${tech}" loading="lazy" class="tech-icon">`
          )
          .join("")}</p>
        <p>${project.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", createProjectCards);
