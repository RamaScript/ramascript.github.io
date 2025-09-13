// Typing Text Animation
function startTypingAnimation(selector, strings) {
  new Typed(selector, {
    strings: strings,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
}
startTypingAnimation(".typing-2", ["Student", "Web Developer", "Programmer"]);
startTypingAnimation(".typing", ["Student", "Web Developer", "Programmer"]);

// Leetcode card click
let leetcodeImg = document.querySelector("#leetcode-card");
leetcodeImg.addEventListener("click", () => {
  window.open("https://leetcode.com/u/ramanand7/", "_blank");
});
