const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('myVideo');

    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0; // Reset to the start if you want it to replay from the beginning on next hover
    });
});


