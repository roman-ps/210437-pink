var open = document.querySelector(".header__open");
var close = document.querySelector(".header__close");
var menu = document.querySelector(".header__menu");
var popup = document.querySelector(".popup-success");
var popupBtn = document.querySelector(".form__submit-btn");
var popupClose = document.querySelector(".popup-success__btn-close");


open.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.add("header__btn-hide");
  close.classList.add("header__btn-show");
  menu.classList.add("header__menu-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  close.classList.remove("header__btn-show");
  menu.classList.remove("header__menu-show");
  open.classList.remove("header__btn-hide");
});

popupBtn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-success__show");
});

popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-success__show");
});
