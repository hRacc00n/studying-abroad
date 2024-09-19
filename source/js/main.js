// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const burgerButton = document.querySelector('.toggle-burger');
const headerButtonContainer = document.querySelector('.header__button-container');

headerButtonContainer.addEventListener('click', () => {
  headerButtonContainer.classList.toggle('header__button-container--open');
  burgerButton.classList.toggle('toggle-burger--open');
});
