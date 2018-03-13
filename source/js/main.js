var open = document.querySelector(".header__open");
var close = document.querySelector(".header__close");
var menu = document.querySelector(".header__menu");
var popupBtn = document.querySelector(".form__submit-btn");
var popup = document.querySelector(".popup-success");
var popupNo = document.querySelector(".popup");
var popupClose = popup.querySelector(".popup-success__btn-close");
var popupNoClose = popupNo.querySelector(".popup__btn");
var form = document.querySelector("form");
var name = document.querySelector("[name=name]");
var surname = document.querySelector("[name=surname]");
var mail = document.querySelector("[name=email]");


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

form.addEventListener("submit", function(event) {
  if ((!name.value) || (!surname.value) || (!mail.value)) {
    event.preventDefault();
    popup.classList.add("popup-success__show");
  } else {
    event.preventDefault();
    popupNo.classList.add("popup__show");
  }
});

popupNoClose.addEventListener("click", function(event) {
  event.preventDefault();
  popupNo.classList.remove("popup__show");
});

popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-success__show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupNo.classList.contains("popup__show")) {
      popupNo.classList.remove("popup__show");
    }
    if (popup.classList.contains("popup-success__show")) {
      popup.classList.remove("popup-success__show");
    }
  }
});
