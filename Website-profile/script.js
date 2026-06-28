function changeText() {
  document.getElementById("secret").innerText =
    "🔥 Nice! Anda nemuin teks rahasia hahaha!";
}

function randomColor() {
  const colors = [
    "linear-gradient(135deg, #ff6b6b, #f06595)",
    "linear-gradient(135deg, #6bcB77, #4d96ff)",
    "linear-gradient(135deg, #f9c74f, #f9844a)"
  ];
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}

// FADE SCROLL
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});