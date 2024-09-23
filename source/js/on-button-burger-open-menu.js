import { burgerButton, headerButtonContainer, headerContent, headerLinks, headerMenu } from './variables';


const shadowDivProperty = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2D383F;
  opacity: 0.6;
  z-index: 2;
`;

const changeHeaderAttributes = (elements) => {
  if (burgerButton.classList.contains('toggle-burger--open')) {
    elements.forEach((element) => {
      element.setAttribute('tabindex', '1');
      element.setAttribute('aria-hidden', false);
    });
  } else {
    elements.forEach((element) => {
      element.setAttribute('tabindex', '-1');
      element.setAttribute('aria-hidden', true);
    });
  }
};

const makeShadowDiv = () => {
  const shadowDiv = document.createElement('div');
  shadowDiv.classList.add('shadowDiv');
  shadowDiv.style.cssText = shadowDivProperty;
  headerContent.append(shadowDiv);
};

const removeShadowDiv = () => {
  if(document.querySelector('.shadowDiv')) {
    document.querySelector('.shadowDiv').remove();
  }
};

const changeClasses = () => {
  headerButtonContainer.classList.toggle('header__button-container--open');
  burgerButton.classList.toggle('toggle-burger--open');
  headerMenu.classList.toggle('header__menu--open');
};

const onButtonBurgerOpenMenu = () => {
  changeClasses();
  changeHeaderAttributes(headerLinks);

  if (burgerButton.classList.contains('toggle-burger--open')) {
    makeShadowDiv();
  } else {
    removeShadowDiv();
  }
};

changeHeaderAttributes(headerLinks);

headerContent.addEventListener('click', (evt) => {
  if (evt.target.className === 'header__link header__link--submenu') {
    evt.preventDefault();
    evt.target.parentNode.classList.toggle('header__item--submenu-open');
  }
  if (evt.target.nodeName === 'A' && evt.target.className !== 'header__link header__link--submenu' || evt.target.className === 'shadowDiv') {
    removeShadowDiv();
    changeClasses();
  }
});

export { onButtonBurgerOpenMenu };
