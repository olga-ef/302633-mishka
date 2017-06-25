var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");
var user = document.querySelector(".user-nav");
var pageHeader = document.querySelector(".page-header");

pageHeader.classList.remove("page-header--nojs");
menu.classList.remove("main-nav--nojs");
user.classList.remove("user-nav--nojs");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--opened");
  user.classList.toggle("user-nav--opened");
});
