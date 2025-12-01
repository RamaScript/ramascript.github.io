// script/service-detail.js

// Google Sheets Script URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxPpEHNHYnva1v3Q9_RtK6bbgz9FocgO6G2BIz2qRzwB0_AevWbXE1nvGQo4cGk9ub1/exec";

// Get service data from URL parameter
function getServiceFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceTitle = urlParams.get("service");
  const category = urlParams.get("category");

  console.log("URL Params - Service:", serviceTitle, "Category:", category);

  if (!serviceTitle || !category) {
    console.error("Missing service or category parameter");
    return null;
  }

  if (!servicesData || !servicesData[category]) {
    console.error("servicesData not loaded or category not found:", category);
    return null;
  }

  // Decode and normalize the service title
  const decodedTitle = decodeURIComponent(serviceTitle);
  console.log("Looking for service:", decodedTitle);

  // Find service by exact title match (case-insensitive)
  const service = servicesData[category].find(
    (s) => s.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  if (!service) {
    console.error("Service not found. Available services in", category, ":");
    console.log(servicesData[category].map((s) => s.title));
    return null;
  }

  console.log("Service found:", service.title);
  return { service, category };
}

// Populate teaching service details
function populateTeachingDetails(service) {
  // Topics
  const topicsList = document.getElementById("topics-list");
  topicsList.innerHTML = service.topics
    .map(
      (topic) => `
    <div class="topic-item">
      <i class="fas fa-check-circle"></i>
      ${topic}
    </div>
  `
    )
    .join("");

  // Course info
  document.getElementById("course-duration").textContent = service.duration;
  document.getElementById("course-level").textContent = service.level;
  document.getElementById("course-price").textContent = service.price;
}

// Populate freelance service details
function populateFreelanceDetails(service) {
  // Features
  const featuresList = document.getElementById("features-list");
  featuresList.innerHTML = service.features
    .map(
      (feature) => `
    <li>${feature}</li>
  `
    )
    .join("");

  // Project info
  document.getElementById("project-delivery").textContent =
    service.deliveryTime;
  document.getElementById("project-type").textContent = service.projectType;
  document.getElementById("project-price").textContent = service.startingPrice;
}

// Populate service details
function populateServiceDetails() {
  const data = getServiceFromURL();
  if (!data) {
    console.error("Failed to load service details");
    document.getElementById("service-title").textContent = "Service not found";
    return;
  }

  const { service, category } = data;

  // Update page title
  document.title = `${service.title} - Ramanand Portfolio`;

  // Update header
  document.querySelector(".service-category-badge").textContent = category;
  document.getElementById("service-title").textContent = service.title;
  document.querySelector(".service-detail-icon i").className = service.icon;
  document.getElementById("service-description").textContent =
    service.description;

  // Show appropriate details section
  if (category === "Teaching") {
    document.getElementById("teaching-details").style.display = "block";
    document.getElementById("freelance-details").style.display = "none";

    // Populate teaching details
    populateTeachingDetails(service);

    // Update form
    document.getElementById("form-title").textContent = "Enroll in This Course";
    document.getElementById("submit-button-text").textContent =
      "Submit Enrollment";
  } else {
    document.getElementById("teaching-details").style.display = "none";
    document.getElementById("freelance-details").style.display = "block";

    // Populate freelance details
    populateFreelanceDetails(service);

    // Update form
    document.getElementById("form-title").textContent = "Get a Quote";
    document.getElementById("submit-button-text").textContent = "Request Quote";
  }

  // Setup form submission
  setupFormSubmission(service, category);
}

// Validate email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Validate phone (optional - Indian format)
function validatePhone(phone) {
  if (!phone) return true; // Phone is optional
  const phonePattern = /^[6-9]\d{9}$/; // Indian mobile number
  return phonePattern.test(phone.replace(/\s+/g, "").replace("+91", ""));
}

// Setup form submission
function setupFormSubmission(service, category) {
  const form = document.getElementById("service-inquiry-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitButton = form.querySelector(".submit-button");
    const originalButtonText = submitButton.querySelector("span").textContent;

    // Get form data
    const name = document.getElementById("inquiry-name").value.trim();
    const email = document.getElementById("inquiry-email").value.trim();
    const phone = document.getElementById("inquiry-phone").value.trim();
    const userMessage = document.getElementById("inquiry-message").value.trim();

    // Validation
    if (!name || !email || !userMessage) {
      showToast("Please fill all required fields!", "error");
      return;
    }

    if (!validateEmail(email)) {
      showToast("Please enter a valid email address!", "error");
      return;
    }

    if (phone && !validatePhone(phone)) {
      showToast("Please enter a valid phone number!", "error");
      return;
    }

    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.querySelector("span").textContent = "Sending...";
    submitButton.querySelector("i").className = "fas fa-spinner fa-spin";

    // Prepare enhanced subject and message for Google Sheet
    let enhancedSubject = "";
    let enhancedMessage = "";

    if (category === "Teaching") {
      enhancedSubject = `📚 Course Enrollment: ${service.title}`;
      enhancedMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 NEW COURSE ENROLLMENT REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 COURSE DETAILS:
   • Course Name: ${service.title}
   • Category: Teaching Service
   • Duration: ${service.duration}
   • Level: ${service.level}
   • Price Range: ${service.price}
   ${service.highlight ? `• Badge: ${service.highlight}` : ""}

📚 Topics Covered:
   ${service.topics.map((topic) => `• ${topic}`).join("\n   ")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 STUDENT INFORMATION:
   • Name: ${name}
   • Email: ${email}
   ${phone ? `• Phone: ${phone}` : "• Phone: Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 STUDENT'S MESSAGE:
${userMessage}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 SOURCE INFORMATION:
   • Source: Portfolio Website - Services Detail Page
   • Service Type: ${category}
   • Submission Time: ${new Date().toLocaleString("en-IN", {
     timeZone: "Asia/Kolkata",
     dateStyle: "full",
     timeStyle: "long",
   })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ ACTION REQUIRED: Please respond to the student within 24 hours
      `.trim();
    } else {
      enhancedSubject = `💼 Project Quote: ${service.title}`;
      enhancedMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 NEW PROJECT QUOTE REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 PROJECT DETAILS:
   • Service: ${service.title}
   • Category: Freelance Service
   • Project Type: ${service.projectType}
   • Estimated Delivery: ${service.deliveryTime}
   • Starting Price: ${service.startingPrice}
   ${service.highlight ? `• Badge: ${service.highlight}` : ""}

✨ Features Included:
   ${service.features.map((feature) => `• ${feature}`).join("\n   ")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CLIENT INFORMATION:
   • Name: ${name}
   • Email: ${email}
   ${phone ? `• Phone: ${phone}` : "• Phone: Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 CLIENT'S REQUIREMENTS:
${userMessage}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 SOURCE INFORMATION:
   • Source: Portfolio Website - Services Detail Page
   • Service Type: ${category}
   • Submission Time: ${new Date().toLocaleString("en-IN", {
     timeZone: "Asia/Kolkata",
     dateStyle: "full",
     timeStyle: "long",
   })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ ACTION REQUIRED: Please send quote to the client within 24 hours
      `.trim();
    }

    // Prepare form data for Google Sheets
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Phone", phone || "Not provided");
    formData.append("Subject", enhancedSubject);
    formData.append("Message", enhancedMessage);
    formData.append("ToEmail", "ramanand.in7@gmail.com");
    formData.append(
      "Source",
      `Portfolio - ${category} Service: ${service.title}`
    );

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.result === "success") {
        showToast(
          "✅ Your inquiry has been sent successfully! I'll get back to you within 24 hours.",
          "success"
        );
        form.reset();

        // Scroll to top to show success message clearly
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      showToast(
        "❌ Failed to send inquiry. Please try again or contact directly via email/WhatsApp.",
        "error"
      );
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.querySelector("span").textContent = originalButtonText;
      submitButton.querySelector("i").className = "fas fa-paper-plane";
    }
  });
}

// Show toast message
function showToast(message, type = "success") {
  const toast = document.getElementById("toast-message");
  const toastText = document.getElementById("toast-text");
  const toastIcon = toast.querySelector("i");

  toastText.textContent = message;

  if (type === "success") {
    toast.classList.remove("error");
    toastIcon.className = "fas fa-check-circle";
  } else {
    toast.classList.add("error");
    toastIcon.className = "fas fa-exclamation-circle";
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

// Custom cursor
const cursor = document.querySelector(".cursor");
if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  });

  document.addEventListener("click", () => {
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });
}

// Add expand animation for cursor
const expandStyle = document.createElement("style");
expandStyle.textContent = `
  .cursor.expand {
    animation: cursorExpand 0.5s forwards;
    border: 2px solid var(--main-color);
  }
  
  @keyframes cursorExpand {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(3);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
document.head.appendChild(expandStyle);

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  populateServiceDetails();
  console.log("✅ Service detail page loaded successfully");
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
