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

const heroRoles = [
  "AI Engineer &amp; LLM Developer",
  "AI Agents &amp; RAG Architect",
  "Flutter &amp; Mobile App Developer",
  "Full-Stack &amp; AI Systems Builder",
  "Intelligent Chatbot Specialist",
];

const aboutRoles = [
  "AI Engineer &amp; Flutter Developer",
  "LLM Agent &amp; RAG Systems Builder",
  "Mobile &amp; Web App Architect",
  "Data-Driven Product Developer",
];

startTypingAnimation(".typing", heroRoles);
startTypingAnimation(".typing-2", aboutRoles);
