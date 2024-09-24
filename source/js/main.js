// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { onButtonBurgerOpenMenu } from './on-button-burger-open-menu';
import { headerButtonContainer } from './variables';

headerButtonContainer.addEventListener('click', onButtonBurgerOpenMenu);

// Слайдер

const swiperHero = new Swiper('.hero__swiper', {
  modules: [Pagination],
  pagination: {
    el: '.hero__shadow-pagination',
  },
});
