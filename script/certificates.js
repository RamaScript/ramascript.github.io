// certificates.js — Compact chip/tag layout

// Category icons
const certCategoryIcons = {
  Hackathons: "fas fa-trophy",
  Internship: "fas fa-briefcase",
  Trainings: "fas fa-graduation-cap",
  "Co-Curricular": "fas fa-star",
  "Extra-curricular": "fas fa-heart",
};

// Titles that should be highlighted (wins / first prizes)
const highlightKeywords = ["won", "first", "winner", "prize"];

function isHighlight(title) {
  return highlightKeywords.some((kw) => title.toLowerCase().includes(kw));
}

function generateCertificatesSection() {
  const container = document.querySelector(".certificate-content");
  if (!container || !certificatesData) return;
  container.innerHTML = "";

  for (const [category, certs] of Object.entries(certificatesData)) {
    const icon = certCategoryIcons[category] || "fas fa-certificate";

    const group = document.createElement("div");
    group.className = "cert-group reveal";

    // Header
    const header = document.createElement("div");
    header.className = "cert-group-header";
    header.innerHTML = `<i class="${icon}"></i> ${category}`;
    group.appendChild(header);

    // Chips row
    const chips = document.createElement("div");
    chips.className = "cert-chips";

    certs.forEach((cert) => {
      const chip = document.createElement("a");
      chip.className = "cert-chip" + (isHighlight(cert.title) ? " highlight" : "");
      chip.href = cert.image;
      chip.target = "_blank";
      chip.rel = "noopener noreferrer";
      chip.title = `${cert.title} — ${cert.issuer}`;
      chip.innerHTML = `<i class="${isHighlight(cert.title) ? "fas fa-trophy" : "fas fa-external-link-alt"}"></i>${cert.title}`;
      chips.appendChild(chip);
    });

    group.appendChild(chips);
    container.appendChild(group);
  }

  // Setup toggle button logic
  const toggleBtn = document.getElementById("toggle-certs-btn");
  const collapsible = document.getElementById("certs-collapsible");
  
  if (toggleBtn && collapsible) {
    toggleBtn.addEventListener("click", () => {
      const isExpanded = collapsible.classList.contains("expanded");
      collapsible.classList.toggle("expanded");
      toggleBtn.classList.toggle("active");
      
      const span = toggleBtn.querySelector("span");
      if (isExpanded) {
        span.innerText = "View Certifications & Achievements";
      } else {
        span.innerText = "Hide Certifications";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", generateCertificatesSection);
