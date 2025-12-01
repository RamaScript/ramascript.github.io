// script/services.js

function generateServicesSection() {
  const servicesContainer = document.querySelector(".services-content");
  if (!servicesContainer) return;

  servicesContainer.innerHTML = "";

  // Create tabs for Teaching and Freelance
  const tabsContainer = document.createElement("div");
  tabsContainer.className = "services-tabs";
  tabsContainer.innerHTML = `
    <button class="service-tab active" data-category="Teaching">
      <i class="fas fa-chalkboard-teacher"></i>
      Teaching Services
    </button>
    <button class="service-tab" data-category="Freelance">
      <i class="fas fa-briefcase"></i>
      Freelance Services
    </button>
  `;
  servicesContainer.appendChild(tabsContainer);

  // Create containers for each category
  Object.keys(servicesData).forEach((category, index) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.className = `services-category ${
      index === 0 ? "active" : ""
    }`;
    categoryContainer.setAttribute("data-category", category);

    const services = servicesData[category];

    services.forEach((service) => {
      const serviceCard = document.createElement("div");
      serviceCard.className = "service-card";

      if (category === "Teaching") {
        serviceCard.innerHTML = `
          <div class="service-card-header">
            <div class="service-icon">
              <i class="${service.icon}"></i>
            </div>
            ${
              service.highlight
                ? `<span class="service-badge">${service.highlight}</span>`
                : ""
            }
          </div>
          <div class="service-card-body">
            <h3>${service.title}</h3>
            <p class="service-description">${service.description}</p>
            
            <div class="service-topics">
              <h4><i class="fas fa-book"></i> Topics Covered:</h4>
              <div class="topics-list">
                ${service.topics
                  .map((topic) => `<span class="topic-tag">${topic}</span>`)
                  .join("")}
              </div>
            </div>
            
            <div class="service-details">
              <div class="detail-item">
                <i class="fas fa-clock"></i>
                <div>
                  <span class="detail-label">Duration</span>
                  <span class="detail-value">${service.duration}</span>
                </div>
              </div>
              <div class="detail-item">
                <i class="fas fa-signal"></i>
                <div>
                  <span class="detail-label">Level</span>
                  <span class="detail-value">${service.level}</span>
                </div>
              </div>
              <div class="detail-item">
                <i class="fas fa-rupee-sign"></i>
                <div>
                  <span class="detail-label">Price Range</span>
                  <span class="detail-value">${service.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="service-card-footer">
            <a href="service-detail.html?service=${encodeURIComponent(
              service.title
            )}&category=Teaching" class="btn-enroll">
              <i class="fas fa-arrow-right"></i>
              View Details
            </a>
          </div>
        `;
      } else {
        // Freelance services
        serviceCard.innerHTML = `
          <div class="service-card-header">
            <div class="service-icon">
              <i class="${service.icon}"></i>
            </div>
            ${
              service.highlight
                ? `<span class="service-badge">${service.highlight}</span>`
                : ""
            }
          </div>
          <div class="service-card-body">
            <h3>${service.title}</h3>
            <p class="service-description">${service.description}</p>
            
            <div class="service-features">
              <h4><i class="fas fa-check-circle"></i> What's Included:</h4>
              <ul class="features-list">
                ${service.features
                  .map(
                    (feature) =>
                      `<li><i class="fas fa-check"></i>${feature}</li>`
                  )
                  .join("")}
              </ul>
            </div>
            
            <div class="service-details">
              <div class="detail-item">
                <i class="fas fa-calendar-alt"></i>
                <div>
                  <span class="detail-label">Delivery</span>
                  <span class="detail-value">${service.deliveryTime}</span>
                </div>
              </div>
              <div class="detail-item">
                <i class="fas fa-tag"></i>
                <div>
                  <span class="detail-label">Type</span>
                  <span class="detail-value">${service.projectType}</span>
                </div>
              </div>
              <div class="detail-item price-highlight">
                <i class="fas fa-rupee-sign"></i>
                <div>
                  <span class="detail-label">Starting at</span>
                  <span class="detail-value">${service.startingPrice}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="service-card-footer">
            <a href="service-detail.html?service=${encodeURIComponent(
              service.title
            )}&category=Freelance" class="btn-hire">
              <i class="fas fa-arrow-right"></i>
              View Details
            </a>
          </div>
        `;
      }

      categoryContainer.appendChild(serviceCard);
    });

    servicesContainer.appendChild(categoryContainer);
  });

  // Add tab switching functionality
  const tabs = document.querySelectorAll(".service-tab");
  const categories = document.querySelectorAll(".services-category");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetCategory = tab.getAttribute("data-category");

      // Update active tab
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Update visible category
      categories.forEach((cat) => {
        if (cat.getAttribute("data-category") === targetCategory) {
          cat.classList.add("active");
        } else {
          cat.classList.remove("active");
        }
      });
    });
  });
}

// Generate services when document is loaded
document.addEventListener("DOMContentLoaded", generateServicesSection);
