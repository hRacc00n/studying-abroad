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
const form = modal.querySelector('.modal__form');
const currentPhone = /^\d{10}$/;
const phoneInput = modal.querySelector('.modal__input--phone');
const modalSelect = modal.querySelector('.modal__select');

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

const checkInput = (element, currentElement, evt) => {
  if (!currentElement.test(element.value) || element.value === '') {
    evt.preventDefault();
    element.classList.add('modal__input--error');
  }
};

phoneInput.addEventListener('input', () => {
  if (currentPhone.test(phoneInput.value) || phoneInput.value === '') {
    phoneInput.classList.remove('modal__input--error');
  }
});

form.addEventListener('submit', (evt) => {
  checkInput(phoneInput, currentPhone, evt);

  if (modalSelect.value === 'empty') {
    modalSelect.classList.add('modal__select--error');
    evt.defaultPrevented();
  }
});

const modalList = modal.querySelector('.modal__list');

modalList.addEventListener('click', (evt) => {
  if (evt.target.className.includes('modal__item')) {
    modalSelect.value = evt.target.dataset.name;

    modal.querySelector('.modal__item--active').classList.toggle('modal__item--active');
    evt.target.classList.toggle('modal__item--active');тз
  }
});
