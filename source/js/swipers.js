import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { heroWrapper } from './variables';

const swiperHero = new Swiper('.hero__swiper', {
  modules: [Pagination],
  pagination: {
    el: '.hero__shadow-pagination',
    renderBullet: function(index) {
      return `<span class="bullet-${index} swiper-pagination-bullet""></span>`;
    },
    clickable: true,
  },
  loop: true,
  breakpoints: {
    320: {
      simulateTouch: true,
    },
    1440: {
      simulateTouch: false,
    },
  },
});

heroWrapper.addEventListener('click', (evt) => {
  if (evt.target.className.includes('hero__pagination-button--1')) {
    const bullet1 = document.querySelector('.bullet-0');
    bullet1.click();
  }
  if (evt.target.className.includes('hero__pagination-button--2')) {
    const bullet2 = document.querySelector('.bullet-1');
    bullet2.click();
  }
  if (evt.target.className.includes('hero__pagination-button--3')) {
    const bullet3 = document.querySelector('.bullet-2');
    bullet3.click();
  }
});

// swiper programs

const swiperPrograms = new Swiper('.programs__swiper', {
  modules: [Navigation, Scrollbar],
  navigation: {
    prevEl: '.programs__pagination-button--prev',
    nextEl: '.programs__pagination-button--next',
  },
  scrollbar: {
    el: '.programs__swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 3,
    },
  }
});

export { swiperHero, swiperPrograms };
