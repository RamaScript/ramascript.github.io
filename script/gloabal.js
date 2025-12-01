// Dark mode / Light mode with persistence
const mode = document.querySelector(".day-night-mode");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  mode.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Toggle theme
mode.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    mode.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    mode.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  }
});


// Custom Cursor (Safe + Works on all pages)
const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY - 10 + "px";
    cursor.style.left = e.pageX - 10 + "px";
  });

  document.addEventListener("click", () => {
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });
}
