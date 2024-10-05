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
    const currentItem = heroList.querySelector('.news__header-button--active');
    currentItem.classList.remove('news__header-button--active');
    evt.target.classList.add('news__header-button--active');
  }
});


// faq

const faqList = document.querySelector('.faq__list');

faqList.addEventListener('click', (evt) => {
  if (evt.target.className.includes('faq__question') || evt.target.className.includes('faq__button')) {

    const targetParent = evt.target.parentNode.parentNode;
    const currentButton = evt.target.parentNode.querySelector('.faq__button span');

    if (targetParent.className.includes('faq__item--open')) {
      targetParent.classList.toggle('faq__item--open');
      currentButton.textContent = 'Раскрыть вопрос';
      setTimeout(() => {
        targetParent.classList.toggle('faq__item--hide');
      }, 300);
    } else {
      targetParent.classList.toggle('faq__item--hide');

      currentButton.textContent = 'Скрыть вопрос';
      setTimeout(() => {
        targetParent.classList.toggle('faq__item--open');
      }, 50);
    }
  }

});
