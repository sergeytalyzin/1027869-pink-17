var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.header');
var nojs = document.querySelector(".nojs");
navMain.classList.remove('main-nav--nojs');
nojs.classList.remove('nojs')
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
var formTrue = document.querySelector(".modal__true");
var formError = document.querySelector(".modal__error");
var name2 = document.querySelector(".form__name-input");
var surname = document.querySelector(".form__surname-input");
var email = document.querySelector(".form__email");
var closeError = document.querySelector(".modal__error-button");
var closeTrue = document.querySelector(".modal__true-button");



form.addEventListener("click", function(evt) {
  if (!name2.value || !surname.value || !email.value) {
    evt.preventDefault();
    formError.classList.add("modal__show")}
  else {
    evt.preventDefault();
    formTrue.classList.add("modal__show")
  }});
closeError.addEventListener("click", function(evt) {
  evt.preventDefault();
  formError.classList.remove("modal__show");
});
closeTrue.addEventListener("click", function(evt) {
  evt.preventDefault();
  formTrue.classList.remove("modal__show");
});
