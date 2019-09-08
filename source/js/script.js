var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.header');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    header.classList.add('header--js');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    header.classList.remove('header--js');
  }
});


var form = document.querySelector(".form__button");
var formtrue = document.querySelector(".modal__true");
var formerror = document.querySelector(".modal__error");
var name = document.querySelector(".form__name");
var surname = document.querySelector(".form__surname");
var email = document.querySelector(".form__email");
var closeerror = document.querySelector(".modal__true-button");
var closetrue = document.querySelector("modal__error-button");



form.addEventListener("click", function(evt) {
  if (!name.value || !surname.value || !email.value) {
    evt.preventDefault();
    formerror.classList.add("modal-show")}
    else {
    formtrue.classList.add("modal-show")
  }});
closeerror.addEventListener("click", function(evt) {
  evt.preventDefault();
  formerror.classList.remove("modal-show");
});
closetrue.addEventListener("click", function(evt) {
  evt.preventDefault();
  formtrue.classList.remove("modal-show");
});


