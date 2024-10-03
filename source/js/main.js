// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { openModal } from './modal';
import { onButtonBurgerOpenMenu } from './on-button-burger-open-menu';
import { swiperHero, swiperPrograms } from './swipers';
import { aboutButton, headerButtonContainer,} from './variables';

headerButtonContainer.addEventListener('click', onButtonBurgerOpenMenu);
swiperHero.update();
swiperPrograms.update();

aboutButton.addEventListener('click', openModal);

// new__hero-list

const heroList = document.querySelector('.news__header-list');

heroList.addEventListener('click', (evt) => {
  if (evt.target.className.includes('news__header-button')) {
    console.log('ok');

    const currentItem = heroList.querySelector('.news__header-button--active');
    currentItem.classList.remove('news__header-button--active');
    evt.target.classList.add('news__header-button--active');
  }
});
