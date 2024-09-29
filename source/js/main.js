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

