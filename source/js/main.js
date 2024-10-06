// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { openModal } from './modal';
import { onButtonBurgerOpenMenu } from './on-button-burger-open-menu';
import { onButtonChangeCurrentItem } from './on-button-change-current-item';
import { onButtonChangeQuestionView } from './on-button-change-question-view';
import { swiperHero, swiperNews, swiperPrograms, swiperReviews } from './swipers';
import { aboutButton, faqList, headerButtonContainer, heroList,} from './variables';

headerButtonContainer.addEventListener('click', onButtonBurgerOpenMenu);
swiperHero.update();
swiperPrograms.update();
swiperNews.update();
swiperReviews.update();

aboutButton.addEventListener('click', openModal);
heroList.addEventListener('click', onButtonChangeCurrentItem);
faqList.addEventListener('click', onButtonChangeQuestionView);
