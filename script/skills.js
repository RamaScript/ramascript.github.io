/**
 * Skills Section — Clean chip layout, no level bars
 */

const skillsData = {

  // ── What I Build ──────────────────────────────────────────────
  "What I Build": [
    { image: "res/images/logo/androidiosflutter.png", name: "Flutter / Cross-Platform" },
    { image: "res/images/logo/android.png",           name: "Native Android Apps"      },
    { image: "res/images/logo/web.png",               name: "Web Applications"         },
    { image: "res/images/logo/restapis.svg",          name: "REST API Integration"     },
    { image: "res/images/logo/uiux.png",              name: "UI/UX Design"             },
    { image: "res/images/logo/desktop.png",           name: "Desktop Applications"     },
  ],

  // ── Programming Languages ─────────────────────────────────────
  "Programming Languages": [
    { image: "res/images/logo/dart.svg",       name: "Dart"       },
    { image: "res/images/logo/java.png",       name: "Java"       },
    { image: "res/images/logo/javascript.png", name: "JavaScript" },
    { image: "res/images/logo/python.png",     name: "Python"     },
    { image: "res/images/logo/typescript.png", name: "TypeScript" },
    { image: "res/images/logo/cpp.png",        name: "C++"        },
    { image: "res/images/logo/c.png",          name: "C"          },
    { image: "res/images/logo/php.png",        name: "PHP"        },
  ],

  // ── Frameworks & Libraries ────────────────────────────────────
  "Frameworks & Libraries": [
    { image: "res/images/logo/flutter.svg",   name: "Flutter"        },
    { image: "res/images/logo/reactjs.png",   name: "React JS"       },
    { image: "res/images/logo/nodejs.png",    name: "Node JS"        },
    { image: "res/images/logo/bootstrap.png", name: "Bootstrap"      },
    { image: "res/images/logo/bloc.svg",      name: "BLoC / Cubit"  },
    { image: "res/images/logo/gemini.svg",    name: "Gemini AI SDK"  },
    { image: "res/images/logo/webrtc.png",    name: "WebRTC"         },
    { image: "res/images/logo/tkin.png",      name: "Python Tkinter" },
  ],

  // ── AI & Machine Learning ─────────────────────────────────────
  "AI & Machine Learning": [
    { image: "res/images/logo/tensorflow.svg",  name: "TensorFlow"        },
    { image: "res/images/logo/pytorch.svg",     name: "PyTorch"           },
    { image: "res/images/logo/scikitlearn.svg", name: "Scikit-Learn"      },
    { image: "res/images/logo/opencv.svg",      name: "OpenCV"            },
    { image: "res/images/logo/mediapipe.svg",   name: "MediaPipe"         },
    { image: "res/images/logo/numpy.svg",       name: "NumPy"             },
    { image: "res/images/logo/pandas.svg",      name: "Pandas"            },
    { image: "res/images/logo/openai.svg",      name: "OpenAI API"        },
    { image: "res/images/logo/claude.svg",      name: "Claude API"        },
    { image: "res/images/logo/huggingface.svg", name: "Hugging Face"      },
    { image: "res/images/logo/gemini.svg",      name: "Google Gemini"     },
    { image: "res/images/logo/datascience.svg", name: "Data Science"      },
    { image: "res/images/logo/dataanalysis.svg",name: "Data Analysis"     },
  ],

  // ── Databases & Backend ───────────────────────────────────────
  "Databases & Backend": [
    { image: "res/images/logo/firebase.png",   name: "Firebase"          },
    { image: "res/images/logo/sqlite.svg",     name: "SQLite"            },
    { image: "res/images/logo/mysql.png",      name: "MySQL"             },
    { image: "res/images/logo/supabase.png",   name: "Supabase"          },
    { image: "res/images/logo/razorpay.svg",   name: "Razorpay"          },
  ],

  // ── Platforms & Tools ─────────────────────────────────────────
  "Platforms & Tools": [
    { image: "res/images/logo/androidstudio.png",     name: "Android Studio"    },
    { image: "res/images/logo/vscode.png",            name: "VS Code"           },
    { image: "res/images/logo/git.png",               name: "Git"               },
    { image: "res/images/logo/github.jpg",            name: "GitHub"            },
    { image: "res/images/logo/googleplayconsole.svg", name: "Play Console"      },
    { image: "res/images/logo/postman.png",           name: "Postman"           },
    { image: "res/images/logo/figma.svg",             name: "Figma"             },
    { image: "res/images/logo/terminal.png",          name: "Terminal / ADB"    },
  ],

  // ── Markup & Styling ──────────────────────────────────────────
  "Markup & Styling": [
    { image: "res/images/logo/html5.png", name: "HTML5" },
    { image: "res/images/logo/css3.png",  name: "CSS3"  },
    { image: "res/images/logo/xml.png",   name: "XML"   },
  ],

  // ── CS Fundamentals ───────────────────────────────────────────
  "CS Fundamentals": [
    { image: "res/images/logo/DSA.png",  name: "DSA"                    },
    { image: "res/images/logo/oops.jpg", name: "OOP Concepts"           },
    { image: "res/images/logo/dbms.png", name: "DBMS"                   },
    { image: "res/images/logo/os.png",   name: "Operating Systems"      },
    { image: "res/images/logo/cn.png",   name: "Computer Networks"      },
    { image: "res/images/logo/se.png",   name: "Software Engineering"   },
  ],
};

// ================================================================
// Render
// ================================================================
function generateSkillsSection() {
  const container = document.querySelector(".skills .skills-content");
  if (!container) return;

  for (const [category, skills] of Object.entries(skillsData)) {
    const group = document.createElement("div");
    group.className = "skills-group anim-fade-up";

    const title = document.createElement("h2");
    title.textContent = category;
    group.appendChild(title);

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "skills-group-items";

    skills.forEach((skill) => {
      const item = document.createElement("div");
      item.className = "skills-group-items-item";

      const img = document.createElement("img");
      img.loading = "lazy";
      img.src = skill.image;
      img.alt = skill.name;
      img.className = "skill-icons";

      const iconWrap = document.createElement("div");
      iconWrap.className = "skill-icon-wrap";
      iconWrap.appendChild(img);

      const h3 = document.createElement("h3");
      h3.textContent = skill.name;

      item.appendChild(iconWrap);
      item.appendChild(h3);
      itemsWrap.appendChild(item);
    });

    group.appendChild(itemsWrap);
    container.appendChild(group);
  }
}

document.addEventListener("DOMContentLoaded", generateSkillsSection);
