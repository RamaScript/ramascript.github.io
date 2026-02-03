// Typing Text Animation
function startTypingAnimation(selector, strings) {
  new Typed(selector, {
    strings: strings,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
}
let myRoles = [
  "App Developer",
  "Web Developer",
  "Computer Geek",
  "Problem Solver",
];
startTypingAnimation(".typing-2", myRoles);
startTypingAnimation(".typing", myRoles);

// Leetcode card click
let leetcodeImg = document.querySelector("#leetcode-card");
leetcodeImg.addEventListener("click", () => {
  window.open("https://leetcode.com/u/ramanand7/", "_blank");
});
