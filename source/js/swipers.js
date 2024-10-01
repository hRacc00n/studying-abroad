import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
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
      simulateTouch: true,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
      simulateTouch: true,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 3,
      simulateTouch: false,
    },
  }
});

const swiperNewsHeader = new Swiper('.news__header-swiper', {
  spaceBetween: 9,
  slidesPerView: 'auto',
  simulateTouch: true,
  grabCursor: true,
});

const swiperNews = new Swiper('.news__swiper', {
  modules: [Grid, Pagination],
  spaceBetween: 15,
  pagination: {
    el: '.news__pagination',
    dynamicBullets: true,
    dynamicMainBullets: 2,
    clickable: true,
    renderBullet: function(index) {
      return `<button class="button-swipe button-swipe--${index + 1} swiper-pagination-bullet" type="button">
                <span>${index + 1}</span>
                <span class="viasully-hidden">Перейти к ${index + 1} слайду</span>
              </button>`;
    },
  },
  breakpoints: {
    320: {
      grid: {
        rows: 1,
      },
      slidesPerView: 1,
    },
    768: {
      grid: {
        rows: 2,
        fill: 'row',
      },
      slidesPerView: 1,
    },
    1440: {
      grid: {
        rows: 1,
      },
      slidesPerView: 1.5,
    }
  }
});

export { swiperHero, swiperPrograms };
