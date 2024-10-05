import { heroList } from './variables';


const onButtonChangeCurrentItem = (evt) => {
  if (evt.target.className.includes('news__header-button')) {
    const currentItem = heroList.querySelector('.news__header-button--active');
    currentItem.classList.remove('news__header-button--active');
    evt.target.classList.add('news__header-button--active');
  }
};

export { onButtonChangeCurrentItem };
