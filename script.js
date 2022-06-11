const hamburger = document.getElementById("hamburger");
const hamburgerlinks = document.getElementById("hamburger-links");

hamburger.addEventListener("click", () => {
  hamburgerlinks.classList.toggle("active");
});
