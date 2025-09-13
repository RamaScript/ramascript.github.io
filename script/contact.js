// Contact Section
function appScript() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz9R81FxlG-ZtVzllIdXvR9v3Jp4vBOeENBBGHMMsKqIoKHRbBTCuch0GAXJnulbYYyyw/exec";
  const form = document.forms["contact"];
  const formData = new FormData(form);
  formData.append("to", "Ramanand");
  fetch(scriptURL, { method: "POST", body: formData }).catch((error) =>
    console.error("Error!", error.message)
  );
}
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
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
    p.innerHTML = "Please fill all the fields!!";
    setTimeout(() => {
      p.innerHTML = "";
    }, 3000);
  } else if (!validateEmail(email.value)) {
    p.innerHTML = "Please enter a valid email address!";
    setTimeout(() => {
      p.innerHTML = "";
    }, 3000);
  } else {
    appScript();
    name.value = "";
    email.value = "";
    sub.value = "";
    msg.value = "";
    p.innerHTML = "Thank you! Message sent successfully.";
    setTimeout(() => {
      p.innerHTML = "";
    }, 3000);
  }
}
