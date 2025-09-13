const skillsData = {
  "Programming Languages": [
    {
      image: "res/images/logo/c.png",
      name: "C",
    },
    {
      image: "res/images/logo/cpp.png",
      name: "C++",
    },
    {
      image: "res/images/logo/javascript.png",
      name: "JavaScript",
    },
    {
      image: "res/images/logo/php.png",
      name: "PHP",
    },
    {
      image: "res/images/logo/python.png",
      name: "Python",
    },
    {
      image: "res/images/logo/java.png",
      name: "Java",
    },
  ],
  "Frameworks & Libraries": [
    {
      image: "res/images/logo/reactjs.png",
      name: "React JS",
    },
    {
      image: "res/images/logo/tkin.png",
      name: "Python Tkinter",
    },
    {
      image: "res/images/logo/bootstrap.png",
      name: "BootStrap",
    },
  ],
  Others: [
    {
      image: "res/images/logo/html5.png",
      name: "HTML",
    },
    {
      image: "res/images/logo/css3.png",
      name: "CSS",
    },
    {
      image: "res/images/logo/mysql.png",
      name: "MySQL",
    },
    {
      image: "res/images/logo/git.png",
      name: "Git",
    },
    {
      image: "res/images/logo/Github.gif",
      name: "Github",
    },
    {
      image: "res/images/logo/dbms.png",
      name: "DBMS",
    },
    {
      image: "res/images/logo/DSA.png",
      name: "DSA",
    },
    {
      image: "res/images/logo/oops.jpg",
      name: "OOPS",
    },
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
