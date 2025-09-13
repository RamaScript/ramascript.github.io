// Initialize the show/hide functionality
function initializeShowHideButtons() {
  document.querySelectorAll(".show.btn").forEach((button) => {
    button.addEventListener("click", () => {
      const fview = button.closest(".frame").querySelector(".fview");
      if (button.innerText === "Show") {
        fview.style.display = "flex";
        button.innerText = "Hide";
      } else {
        fview.style.display = "none";
        button.innerText = "Show";
      }
    });
  });
}

function generateCertificatesSection() {
  const certificateContent = document.querySelector(".certificate-content");
  if (!certificateContent) return;

  // Clear existing content
  certificateContent.innerHTML = "";

  // Generate content for each category
  for (const [category, certificates] of Object.entries(certificatesData)) {
    const frame = document.createElement("div");
    frame.className = "frame";

    // Create frame top
    const ftop = document.createElement("div");
    ftop.className = "ftop";

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";
    categoryDiv.textContent = category;

    const preview = document.createElement("div");
    preview.className = "preview";
    const previewImg = document.createElement("img");
    previewImg.src = certificates[0].image; // Use first certificate as preview
    previewImg.alt = category;
    preview.appendChild(previewImg);

    ftop.appendChild(categoryDiv);
    ftop.appendChild(preview);

    // Create frame bottom
    const fbtm = document.createElement("div");
    fbtm.className = "fbtm";
    const showBtn = document.createElement("button");
    showBtn.className = "show btn";
    showBtn.textContent = "Show";
    fbtm.appendChild(showBtn);

    // Create frame view
    const fview = document.createElement("div");
    fview.className = "fview";
    fview.style.display = "none";

    // Generate certificate cards
    certificates.forEach((cert) => {
      const viewCer = document.createElement("div");
      viewCer.className = "view-cer";

      viewCer.innerHTML = `
                <div class="details">
                    <h3>${cert.title}</h3>
                </div>
                <div class="cer-img">
                    <img src="${cert.image}" alt="${cert.title}">
                </div>
                <div class="cer-details">
                    <p>${cert.description}</p>
                    <p>Issue Date: ${cert.date}</p>
                    <p>Issuer: <a href="${cert.issuerUrl}" target="_blank">${cert.issuer}</a></p>
                </div>
                <div class="btns">
                    <a href="${cert.image}" target="_blank" class="btn">View</a>
                    <a href="${cert.image}" download class="btn">Download</a>
                </div>
            `;

      fview.appendChild(viewCer);
    });

    // Assemble the frame
    frame.appendChild(ftop);
    frame.appendChild(fbtm);
    frame.appendChild(fview);

    // Add to main container
    certificateContent.appendChild(frame);
  }

  // Initialize buttons after adding all content
  initializeShowHideButtons();
}

// Generate certificates when document is loaded
document.addEventListener("DOMContentLoaded", generateCertificatesSection);
