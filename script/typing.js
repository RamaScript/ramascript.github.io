// Typing Text Animation
function startTypingAnimation(selector, strings) {
  const el = document.querySelector(selector);
  if (!el) return;
  new Typed(selector, {
    strings: strings,
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
  });
}

const myRoles = [
  "Flutter Developer",
  "Android Developer",
  "Full-Stack Dev",
  "Freelancer",
  "Problem Solver",
];

startTypingAnimation(".typing", myRoles);
startTypingAnimation(".typing-2", myRoles);
