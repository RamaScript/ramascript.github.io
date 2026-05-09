// Contact Section
function appScript() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxPpEHNHYnva1v3Q9_RtK6bbgz9FocgO6G2BIz2qRzwB0_AevWbXE1nvGQo4cGk9ub1/exec";
  const form = document.forms["contact"];
  const formData = new FormData(form);

  // Add custom fields to identify source and destination
  formData.append("ToEmail", "ramanand.in7@gmail.com"); // Where you want to receive notifications
  formData.append("Source", "Portfolio Website"); // Which project this is from

  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      console.log("✅ Success:", data);
    })
    .catch((error) => console.error("❌ Error!", error.message));
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function showMsg(el, message, type, duration = 4000) {
  el.innerHTML = message;
  el.className = type; // "success" or "error"
  setTimeout(() => {
    el.innerHTML = "";
    el.className = "";
  }, duration);
}

function thank(event) {
  event.preventDefault();
  let name = document.querySelector("#name-id");
  let email = document.querySelector("#email-id");
  let sub = document.querySelector("#subject-id");
  let msg = document.querySelector("#msg-id");
  let p = document.querySelector("#msg-sent");

  if (
    name.value === "" ||
    email.value === "" ||
    sub.value === "" ||
    msg.value === ""
  ) {
    showMsg(p, "⚠️ Please fill in all the fields.", "error");
  } else if (!validateEmail(email.value)) {
    showMsg(p, "⚠️ Please enter a valid email address.", "error");
  } else {
    appScript();
    name.value = "";
    email.value = "";
    sub.value = "";
    msg.value = "";
    showMsg(p, "✅ Message sent! I'll get back to you soon.", "success");
  }
}

