let logint = document.querySelector(".Rectangle1");
document.querySelector("#login-but").onclick = () => {
  logint.classList.toggle("active");
};
document.querySelector("#close-login-btn").onclick = () => {
  logint.classList.remove("active");
};
document.querySelector(".Rectangle4").onclick = () => {
  logint.classList.remove("active");
};
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const Rectangleu = document.getElementById("Rectangle");
const contantt = document.querySelectorAll(".content");
const boxcon = document.querySelectorAll(".content2");

var slidernav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contantt.forEach((cont) => {
    cont.classList.remove("active");
  });
  boxcon.forEach((box) => {
    box.classList.remove("active");
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contantt[manual].classList.add("active");
  boxcon[manual].classList.add("active");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slidernav(i);
  });
});
