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

export { burgerButton, headerButtonContainer, headerMenu, headerLinks, headerContent, heroWrapper, modal, aboutButton, form, currentPhone, phoneInput, nameInput, modalSelect, modalMark, modalControl };
