/**
 * Skills Section — High-Value Engineering Tech Stack
 * Categorized into 5 Core Pillars: Mobile, Web, AI Agents, Data, and Backend/Tools
 */

const skillsCategories = [
  {
    category: "AI Agents & RAG Workflows",
    icon: "fas fa-brain",
    description: "Autonomous LLM agents, vector search pipelines & custom chatbots",
    skills: [
      { name: "OpenAI API", image: "res/images/logo/openai.svg" },
      { name: "Claude API", image: "res/images/logo/claude.svg" },
      { name: "Google Gemini", image: "res/images/logo/gemini.svg" },
      { name: "Hugging Face", image: "res/images/logo/huggingface.svg" },
      { name: "MediaPipe", image: "res/images/logo/mediapipe.svg" },
      { name: "OpenCV", image: "res/images/logo/opencv.svg" },
    ],
  },
  {
    category: "Mobile App Development",
    icon: "fas fa-mobile-screen-button",
    description: "High-performance cross-platform & native mobile applications",
    skills: [
      { name: "Flutter", image: "res/images/logo/flutter.svg" },
      { name: "Dart", image: "res/images/logo/dart.svg" },
      { name: "Native Android", image: "res/images/logo/android.png" },
      { name: "BLoC / Cubit", image: "res/images/logo/bloc.svg" },
      { name: "Riverpod" },
      { name: "Google Play Console", image: "res/images/logo/googleplayconsole.svg" },
    ],
  },
  {
    category: "Web & Full-Stack",
    icon: "fas fa-globe",
    description: "Responsive, high-converting web applications & frontend systems",
    skills: [
      { name: "React JS", image: "res/images/logo/reactjs.png" },
      { name: "TypeScript", image: "res/images/logo/typescript.png" },
      { name: "JavaScript", image: "res/images/logo/javascript.png" },
      { name: "Node.js", image: "res/images/logo/nodejs.png" },
      { name: "REST APIs", image: "res/images/logo/restapis.svg" },
      { name: "HTML5 / CSS3", image: "res/images/logo/html5.png" },
    ],
  },
  {
    category: "Data Analysis & Python",
    icon: "fas fa-chart-line",
    description: "Automated data workflows, machine learning models & analytics",
    skills: [
      { name: "Python", image: "res/images/logo/python.png" },
      { name: "Pandas", image: "res/images/logo/pandas.svg" },
      { name: "NumPy", image: "res/images/logo/numpy.svg" },
      { name: "PyTorch", image: "res/images/logo/pytorch.svg" },
      { name: "Scikit-Learn", image: "res/images/logo/scikitlearn.svg" },
    ],
  },
  {
    category: "Databases, Cloud & Tools",
    icon: "fas fa-database",
    description: "Scalable data storage, cloud backends & dev infrastructure",
    skills: [
      { name: "Firebase", image: "res/images/logo/firebase.png" },
      { name: "Supabase", image: "res/images/logo/supabase.png" },
      { name: "MySQL", image: "res/images/logo/mysql.png" },
      { name: "SQLite", image: "res/images/logo/sqlite.svg" },
      { name: "Git & GitHub", image: "res/images/logo/git.png" },
      { name: "Postman", image: "res/images/logo/postman.png" },
      { name: "Figma", image: "res/images/logo/figma.svg" },
    ],
  },
];

function generateSkillsSection() {
  const container = document.querySelector(".skills .skills-content");
  if (!container) return;

  container.innerHTML = "";

  skillsCategories.forEach((groupData) => {
    const groupCard = document.createElement("div");
    groupCard.className = "skills-group anim-fade-up";

    // Card Header
    const groupHeader = document.createElement("div");
    groupHeader.className = "skills-group-header";
    groupHeader.innerHTML = `
      <div class="skills-group-icon-box">
        <i class="${groupData.icon}"></i>
      </div>
      <div class="skills-group-title-wrap">
        <h3>${groupData.category}</h3>
        <p>${groupData.description}</p>
      </div>
    `;
    groupCard.appendChild(groupHeader);

    // Skills Chips
    const itemsWrap = document.createElement("div");
    itemsWrap.className = "skills-group-items";

    groupData.skills.forEach((skill) => {
      const item = document.createElement("div");
      item.className = "skills-chip";

      if (skill.image) {
        const iconWrap = document.createElement("div");
        iconWrap.className = "skill-icon-wrap";
        const img = document.createElement("img");
        img.loading = "lazy";
        img.src = skill.image;
        img.alt = skill.name;
        img.className = "skill-icons";
        iconWrap.appendChild(img);
        item.appendChild(iconWrap);
      } else if (skill.icon) {
        const iconWrap = document.createElement("div");
        iconWrap.className = "skill-icon-wrap";
        const iconEl = document.createElement("i");
        iconEl.className = skill.icon;
        iconWrap.appendChild(iconEl);
        item.appendChild(iconWrap);
      }

      const label = document.createElement("span");
      label.className = "skill-name";
      label.textContent = skill.name;
      item.appendChild(label);

      itemsWrap.appendChild(item);
    });

    groupCard.appendChild(itemsWrap);
    container.appendChild(groupCard);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", generateSkillsSection);
} else {
  generateSkillsSection();
}
