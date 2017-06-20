var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav--closed");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--opened");
});
