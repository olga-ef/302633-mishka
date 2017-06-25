var orderButton = document.querySelector(".week-product__btn");
var orderModal =  document.querySelector(".order-modal");

orderButton.addEventListener("click", function(event) {
  event.preventDefault();
  orderModal.classList.add("order-modal--open");
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    if(orderModal.classList.contains("order-modal--open")) {
      orderModal.classList.remove("order-modal--open");
    }
  }
});
