// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { onButtonBurgerOpenMenu } from './on-button-burger-open-menu';
import { swiperHero } from './swipers';
import { headerButtonContainer,} from './variables';

headerButtonContainer.addEventListener('click', onButtonBurgerOpenMenu);
swiperHero.update();

// модальное окно

const aboutButton = document.querySelector('.about__button');
const modal = document.querySelector('.modal');
const currentPhone = /^\d{10}$/;

aboutButton.addEventListener('click', () => {
  modal.classList.remove('modal--hide');
  setTimeout(() => {
    modal.classList.remove('modal--close');
  }, 100);
});

modal.addEventListener('click', (evt) => {
  if (evt.target.className === 'modal' || evt.target.className === 'modal__close-button') {
    modal.classList.add('modal--close');
    setTimeout(() => {
      modal.classList.add('modal--hide');
    }, 300);
  }
});

