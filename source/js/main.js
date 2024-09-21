// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const burgerButton = document.querySelector('.toggle-burger');
const headerButtonContainer = document.querySelector('.header__button-container');
const headerMenu = document.querySelector('.header__menu');

headerButtonContainer.addEventListener('click', () => {
  headerButtonContainer.classList.toggle('header__button-container--open');
  burgerButton.classList.toggle('toggle-burger--open');
  headerMenu.classList.toggle('header__menu--open');
});

headerMenu.addEventListener('click', (evt) => {
  if (evt.target.className === 'header__link header__link--submenu') {
    evt.preventDefault();
    evt.target.parentNode.classList.toggle('header__item--submenu-open');
  }
});
