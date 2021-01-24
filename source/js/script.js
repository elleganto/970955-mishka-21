// Navigation block

const navMain = document.querySelector('.header-navigation');
const navToggle = document.querySelector('.header-navigation__toggle');

navMain.classList.remove('header-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-navigation--closed')) {
    navMain.classList.remove('header-navigation--closed');
    navMain.classList.add('header-navigation--opened');
  } else {
    navMain.classList.add('header-navigation--closed');
    navMain.classList.remove('header-navigation--opened');
  }
});

// Modal window

const orderProduct = document.querySelector(".order-product");
const orderPopup = document.querySelector(".modal");
const orderAdd = orderPopup.querySelector(".modal__button");
const item = document.querySelector("#model__item");

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
