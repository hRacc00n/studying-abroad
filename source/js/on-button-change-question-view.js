const onButtonChangeQuestionView = (evt) => {
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
};

export { onButtonChangeQuestionView };
