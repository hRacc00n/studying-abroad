// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { onSubmitSendInfo } from './form';
import { openModal } from './modal';
import { onButtonBurgerOpenMenu } from './on-button-burger-open-menu';
import { onButtonChangeCurrentItem } from './on-button-change-current-item';
import { onButtonChangeQuestionView } from './on-button-change-question-view';
import { swiperHero, swiperPrograms, swiperReviews } from './swipers';
import { aboutButton, faqList, formGroup, headerButtonContainer, heroList,} from './variables';

headerButtonContainer.addEventListener('click', onButtonBurgerOpenMenu);
swiperHero.update();
swiperPrograms.update();
swiperReviews.update();

aboutButton.addEventListener('click', openModal);
heroList.addEventListener('click', onButtonChangeCurrentItem);
faqList.addEventListener('click', onButtonChangeQuestionView);
formGroup.addEventListener('submit', onSubmitSendInfo);
