const burgerButton = document.querySelector('.toggle-burger');
const headerButtonContainer = document.querySelector('.header__button-container');
const headerMenu = document.querySelector('.header__menu');
const headerLinks = headerMenu.querySelectorAll('.header__link');
const headerContent = document.querySelector('.header__content');
const heroWrapper = document.querySelector('.hero__wrapper');

const aboutButton = document.querySelector('.about__button');
const modal = document.querySelector('.modal');
const form = modal.querySelector('.modal__form');
const currentPhone = /^\d{10}$/;
const phoneInput = modal.querySelector('.modal__input--phone');
const nameInput = modal.querySelector('#name');
const modalSelect = modal.querySelector('#city');
const modalMark = modal.querySelector('.modal__mark');
const modalControl = modal.querySelector('.modal__control');
const modalInputs = modal.querySelectorAll('.modal__input');
const modalButton = modal.querySelector('.modal__button');

const heroList = document.querySelector('.news__header-list');
const faqList = document.querySelector('.faq__list');

const formBlock = document.querySelector('.form');
const formGroup = formBlock.querySelector('.form__form');
const formPhoneInput = formBlock.querySelector('#form-phone');
const formNameInput = formBlock.querySelector('#form-name');
const formSelect = formBlock.querySelector('#form-city');
const formMark = formBlock.querySelector('.form__mark');
const formControl = formBlock.querySelector('.form__control');
const formInputs = formBlock.querySelectorAll('.form__input');
const formButton = formBlock.querySelector('.form__button');
const formList = formBlock.querySelector('.form__list');
const formMessage = formBlock.querySelector('#form-message');

export { burgerButton, headerButtonContainer, headerMenu, headerLinks, headerContent, heroWrapper, modal, aboutButton, form, currentPhone, phoneInput, nameInput, modalSelect, modalMark, modalControl, modalInputs, modalButton, faqList, heroList, formBlock, formGroup, formPhoneInput, formNameInput, formSelect, formMark, formControl, formInputs, formButton, formList, formMessage };
