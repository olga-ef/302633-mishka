var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav--closed");
var user = document.querySelector(".user-nav--closed");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--opened");
  user.classList.toggle("user-nav--opened");
});
