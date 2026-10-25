// script/services.js — Dynamic Services Section Rendering

function generateServicesSection() {
  const servicesContainer = document.querySelector(".services-content");
  if (!servicesContainer) return;

  const data = typeof servicesData !== "undefined" ? servicesData : (window.servicesData || {});
  if (!data || Object.keys(data).length === 0) return;

  servicesContainer.innerHTML = "";

  // Create Tabs
  const tabsContainer = document.createElement("div");
  tabsContainer.className = "services-tabs";

  const categories = Object.keys(data);
  const defaultCategory = categories[0] || "Software";

  tabsContainer.innerHTML = `
    <button class="service-tab active" data-category="Software">
      <i class="fas fa-code"></i>
      <span>Software &amp; AI Services</span>
    </button>
    ${
      data.Mentorship
        ? `<button class="service-tab" data-category="Mentorship">
             <i class="fas fa-chalkboard-user"></i>
             <span>1-on-1 Mentorship</span>
           </button>`
        : ""
    }
  `;
  servicesContainer.appendChild(tabsContainer);

  // Create Category Grids
  categories.forEach((category, index) => {
    const categoryGrid = document.createElement("div");
    categoryGrid.className = `services-category ${category === defaultCategory ? "active" : ""}`;
    categoryGrid.setAttribute("data-category", category);

    const services = data[category] || [];

    services.forEach((service) => {
      const card = document.createElement("div");
      card.className = "service-card";

      // Tags / Features items
      const features = service.features || service.topics || [];
      const featuresHTML = features
        .slice(0, 6)
        .map((f) => `<span class="service-feature-tag"><i class="fas fa-check"></i> ${f}</span>`)
        .join("");

      card.innerHTML = `
        <div class="service-card-top">
          <div class="service-icon-box">
            <i class="${service.icon}"></i>
          </div>
          ${
            service.highlight
              ? `<span class="service-highlight-badge">${service.highlight}</span>`
              : ""
          }
        </div>

        <div class="service-card-body">
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.description}</p>

          <div class="service-features-wrap">
            <div class="service-features-list">
              ${featuresHTML}
            </div>
          </div>
        </div>

        <div class="service-card-footer">
          <a
            href="service-detail.html?service=${encodeURIComponent(service.title)}&category=${encodeURIComponent(category)}"
            class="service-cta-btn"
          >
            <span>View Scope &amp; Details</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      `;

      categoryGrid.appendChild(card);
    });

    servicesContainer.appendChild(categoryGrid);
  });

  // Tab Switching Logic
  const tabs = tabsContainer.querySelectorAll(".service-tab");
  const categoryContainers = servicesContainer.querySelectorAll(".services-category");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetCategory = tab.getAttribute("data-category");

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      categoryContainers.forEach((grid) => {
        grid.classList.toggle(
          "active",
          grid.getAttribute("data-category") === targetCategory
        );
      });
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", generateServicesSection);
} else {
  generateServicesSection();
}
