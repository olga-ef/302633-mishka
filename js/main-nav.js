var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav--opened");
var user = document.querySelector(".user-nav--opened");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--closed");
  user.classList.toggle("user-nav--closed");
});
