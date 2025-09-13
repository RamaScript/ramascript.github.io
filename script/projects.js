// Project Cards Dynamic Generation
const projectsData = [
  {
    title: "Allen Connect",
    img: "res/images/projects/allen_logo_png.png",
    desc: "An Android app exclusively designed for Allenhouse college, connecting Alumni, Students, and Professors. It enables networking, job opportunities, event updates, and mentorship, fostering a strong community within the Allenhouse network.",
  },
  {
    title: "Shadow Talk",
    img: "res/images/projects/shadow_talk.jpeg",
    desc: "An Android app that allows users to chat anonymously, creating a safe space for open and honest conversations. Shadow Talk enables users to connect without revealing their identity, fostering genuine discussions and connections.",
  },
  {
    title: "Retro Games",
    img: "res/images/projects/Retro_games.jpg",
    desc: "A nostalgic Android app that revives classic games from the past, allowing users to enjoy childhood favorites. It also includes an in-built chat feature, making it easy for users to connect and share their gaming experiences.",
  },
  {
    title: "Music Player",
    img: "res/images/projects/music-payer.png",
    desc: "A sleek, fully responsive music player website that allows users to enjoy their favorite songs on any device. With an intuitive design and smooth performance, it provides a seamless music experience optimized for both mobile and desktop users.",
  },
  {
    title: "scientific Calculator",
    img: "res/images/projects/Calc.jpeg",
    desc: "This versatile website and Android app serves as a powerful scientific calculator, featuring both basic operations and advanced functions. It is built for handling complex calculations, making it a reliable tool for students and professionals alike.",
  },
  {
    title: "Rama Cart",
    img: "res/images/projects/ramacart.jpeg",
    desc: "An e-commerce site offering a broad range of electronics and gadgets, designed to provide a hassle-free shopping experience. Rama Cart focuses on user-friendly navigation and streamlined purchasing to ensure a satisfying shopping journey.",
  },
];

function createProjectCards() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = "";
  projectsData.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img loading="lazy" src="${project.img}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
    `;
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", createProjectCards);
