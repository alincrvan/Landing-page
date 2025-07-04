const menuButton = document.querySelector(".header__btn--hamburger");
const hamburgerMenu = document.querySelector(".header__menu--hamburger");

menuButton.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hide");
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    hamburgerMenu.classList.add("hide");
  }
});