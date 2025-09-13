// Project Cards Dynamic Generation
const projectsData = [
  {
    title: "Allen Connect",
    img: "res/images/projects/allen_logo_png.png",
    desc: "An Android app exclusively designed for Allenhouse college, connecting Alumni, Students, and Professors. It enables networking, job opportunities, event updates, and mentorship, fostering a strong community within the Allenhouse network.",
    playStore: "dsfg",
    webLink: "https://ramascript.github.io/AllenConnect/",
    github: "https://github.com/RamaScript/Allen-Connect",
  },
  {
    title: "Shadow Talk",
    img: "res/images/projects/shadow_talk.jpeg",
    desc: "An Android app that allows users to chat anonymously, creating a safe space for open and honest conversations. Shadow Talk enables users to connect without revealing their identity, fostering genuine discussions and connections.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/ShadowTalk/",
  },
  {
    title: "Retro Games",
    img: "res/images/projects/Retro_games.jpg",
    desc: "A nostalgic Android app that revives classic games from the past, allowing users to enjoy childhood favorites. It also includes an in-built chat feature, making it easy for users to connect and share their gaming experiences.",
    playStore: "N/A",
    webLink: "N/A",
    github: "https://github.com/RamaScript/Retro-Games",
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

    const linksSection =
      hasPlayStore || hasWebLink || hasGithub
        ? `
      <div class="project-links">
        ${
          hasPlayStore
            ? `
          <a href="${project.playStore}" target="_blank" class="project-link play-store-link">
            <i class="fab fa-google-play"></i> Play Store
          </a>
        `
            : ""
        }
        ${
          hasWebLink
            ? `
          <a href="${project.webLink}" target="_blank" class="project-link web-link">
            <i class="fas fa-globe"></i> Visit Website
          </a>
        `
            : ""
        }
        ${
          hasGithub
            ? `
          <a href="${project.github}" target="_blank" class="project-link github-link">
            <i class="fab fa-github"></i> View Code
          </a>
        `
            : ""
        }
      </div>
    `
        : "";

    card.innerHTML = `
      <div class="project-image">
        <img loading="lazy" src="${project.img}" alt="${project.title}">
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
        <p>${project.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", createProjectCards);
