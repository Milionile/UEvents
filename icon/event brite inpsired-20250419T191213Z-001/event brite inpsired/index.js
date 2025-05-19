let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function moveSlide(step) {
  slideIndex += step;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  document.querySelector(".slider").style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-slide every 7 seconds
setInterval(() => moveSlide(1), 7000);

// Login Modal Logic
const loginModal = document.getElementById("loginModal");
const openLoginBtn = document.getElementById("openLogin");
const closeLoginBtn = document.getElementById("closeLogin");
const cancelLoginBtn = loginModal.querySelector(".cancelbtn");

openLoginBtn.onclick = () => loginModal.style.display = "block";
closeLoginBtn.onclick = () => loginModal.style.display = "none";
cancelLoginBtn.onclick = () => loginModal.style.display = "none";

window.onclick = (e) => {
  if (e.target == loginModal) loginModal.style.display = "none";
};