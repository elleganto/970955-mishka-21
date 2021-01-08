const orderProduct = document.querySelector(".products__button");
const orderPopup = document.querySelector(".modal");
const orderAdd = orderPopup.querySelector(".modal__button");

orderProduct.addEventListener("click", function(evt) {
  evt.preventDefault();
  orderPopup.classList.add("modal-show");
});

orderAdd.addEventListener("click", function(evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      orderPopup.classList.remove("modal-show");
    }
  }
});
