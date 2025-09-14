const skillsData = {
  "What I Build": [
    { image: "res/images/logo/android.png", name: "Android Apps" },
    {
      image: "res/images/logo/androidiosflutter.png",
      name: "Cross-Platform Apps (Flutter)",
    },
    { image: "res/images/logo/web.png", name: "Web Applications" },
    { image: "res/images/logo/restapis.svg", name: "API Integration" },
    { image: "res/images/logo/desktop.png", name: "Desktop Applications" },
    { image: "res/images/logo/uiux.png", name: "UI/UX Prototypes" },
  ],

  "Programming Languages": [
    { image: "res/images/logo/java.png", name: "Java" },
    { image: "res/images/logo/dart.svg", name: "Dart" },
    { image: "res/images/logo/javascript.png", name: "JavaScript" },
    { image: "res/images/logo/cpp.png", name: "C++" },
    { image: "res/images/logo/c.png", name: "C" },
    { image: "res/images/logo/python.png", name: "Python" },
    { image: "res/images/logo/php.png", name: "PHP" },
  ],

  "Frameworks & Libraries": [
    { image: "res/images/logo/flutter.svg", name: "Flutter" },
    { image: "res/images/logo/reactjs.png", name: "React JS" },
    { image: "res/images/logo/nodejs.png", name: "Node JS" },
    { image: "res/images/logo/bootstrap.png", name: "Bootstrap" },
    { image: "res/images/logo/tkin.png", name: "Python Tkinter" },
  ],

  "Databases & Backend": [
    { image: "res/images/logo/firebase.png", name: "Firebase" },
    { image: "res/images/logo/mysql.png", name: "MySQL" },
    { image: "res/images/logo/supabase.png", name: "Supabase" },
    { image: "res/images/logo/sqlite.svg", name: "SQLite" },
  ],

  "Platforms & Tools": [
    { image: "res/images/logo/androidstudio.png", name: "Android Studio" },
    { image: "res/images/logo/vscode.png", name: "VS Code" },
    { image: "res/images/logo/git.png", name: "Git" },
    { image: "res/images/logo/github.svg", name: "GitHub" },
    {
      image: "res/images/logo/googleplayconsole.svg",
      name: "Google Play Console",
    },
    { image: "res/images/logo/postman.png", name: "Postman" },
    { image: "res/images/logo/terminal.png", name: "Terminal" },
  ],

  "Markup & Styling": [
    { image: "res/images/logo/html5.png", name: "HTML" },
    { image: "res/images/logo/css3.png", name: "CSS" },
    { image: "res/images/logo/xml.png", name: "XML" },
  ],

  "Computer Science Fundamentals": [
    { image: "res/images/logo/DSA.png", name: "DSA" },
    { image: "res/images/logo/oops.jpg", name: "OOPS" },
    { image: "res/images/logo/dbms.png", name: "DBMS" },
    { image: "res/images/logo/os.png", name: "Operating Systems" },
    { image: "res/images/logo/cn.png", name: "Computer Networks" },
    { image: "res/images/logo/se.png", name: "Software Engineering" },
  ],
};

function generateSkillsSection() {
  const skillsContainer = document.querySelector(".skills .skills-content");
  if (!skillsContainer) return;

  for (const [category, skills] of Object.entries(skillsData)) {
    const skillsGroup = document.createElement("div");
    skillsGroup.className = "skills-group";

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category;
    skillsGroup.appendChild(categoryTitle);

    const skillsGroupItems = document.createElement("div");
    skillsGroupItems.className = "skills-group-items";

    skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skills-group-items-item";

      const img = document.createElement("img");
      img.loading = "lazy";
      img.src = skill.image;
      img.alt = skill.name;
      img.className = "skill-icons";

      const h3 = document.createElement("h3");
      h3.textContent = skill.name;

      skillItem.appendChild(img);
      skillItem.appendChild(h3);
      skillsGroupItems.appendChild(skillItem);
    });

    skillsGroup.appendChild(skillsGroupItems);
    skillsContainer.appendChild(skillsGroup);
  }
}

// Generate skills when the document is loaded
document.addEventListener("DOMContentLoaded", generateSkillsSection);
