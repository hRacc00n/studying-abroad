import { currentPhone, formBlock, formButton, formControl, formGroup, formInputs, formList, formMark, formMessage, formNameInput, formPhoneInput, formSelect } from './variables';

const resetValues = () => {
  formNameInput.value = '';
  formPhoneInput.value = '';
  formMessage.value = '';
  formSelect.value = 'empty';
  formControl.checked = false;
  formNameInput.classList.remove('form__input--error');
  formPhoneInput.classList.remove('form__input--error');
  formSelect.classList.remove('form__select--error');
  formMark.classList.remove('form__mark--error');
};

const checkInput = (element, currentElement) => {
  if (currentElement.test(element.value) || element.value === '') {
    return true;
  }
  return false;
};

const addInputClass = (element, evt) => {
  evt.preventDefault();
  element.classList.add('form__input--error');
};

formPhoneInput.addEventListener('input', () => {
  if (checkInput(formPhoneInput, currentPhone)) {
    formPhoneInput.classList.remove('form__input--error');
  }
});

formButton.addEventListener('click', () => {
  formInputs.forEach((input) => {
    if (!input.value) {
      input.classList.add('form__input--error');
    }
    if (formSelect.value === 'empty') {
      formSelect.classList.add('form__select--error');
    }
  });
});

const onSubmitSendInfo = (evt) => {
  if (!checkInput(formPhoneInput, currentPhone)) {
    addInputClass(formPhoneInput, evt);
  }

  if (formSelect.value === 'empty') {
    formSelect.classList.add('form__select--error');
    evt.preventDefault();
  }

  if (!formControl.checked){
    evt.preventDefault();
    formMark.classList.add('form__mark--error');
  }

  if (checkInput(formPhoneInput, currentPhone) &&
      formSelect.value !== 'empty' &&
      formControl.checked
  ) {
    evt.preventDefault();

    const formData = new FormData(formGroup);

    fetch('https://echo.htmlacademy.ru',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          resetValues();
        }
      });
  }
};

formList.addEventListener('click', (evt) => {
  if (evt.target.className.includes('form__item')) {
    formSelect.value = evt.target.dataset.name;

    formBlock.querySelector('.form__item--active').classList.toggle('form__item--active');
    evt.target.classList.toggle('form__item--active');
  }
});

formSelect.addEventListener('mousedown', (evt) => {
  evt.preventDefault();
  if (formList.classList.contains('form__list--hide')) {
    formList.classList.remove('form__list--hide');
    setTimeout(() => {
      formList.classList.remove('form__list--close');
    }, 10);
  }
});

formSelect.addEventListener('keydown', (evt) => {
  if ((evt.key === 'Enter' || evt.key === ' ')) {
    evt.preventDefault();
    if (formList.classList.contains('form__list--hide')) {
      formList.classList.remove('form__list--hide');
      setTimeout(() => {
        formList.classList.remove('form__list--close');
      }, 10);
    }
  }
});

formBlock.addEventListener('click', (evt) => {
  if (evt.target.className.includes('form__item') ||
      !evt.target.className.includes('form__item') && !evt.target.className.includes('form__select')) {
    const currentElement = formBlock.querySelector('.form__item--active');
    if (currentElement.textContent !== '') {
      formSelect.classList.remove('form__select--error');
    }
    formList.classList.add('form__list--close');
    setTimeout(() => {
      formList.classList.add('form__list--hide');
    }, 250);
  }
});

formControl.addEventListener('change', () => {
  if (formMark.classList.contains('form__mark--error') && formControl.checked) {
    formMark.classList.remove('form__mark--error');
  }
});

formNameInput.addEventListener('input', () => {
  if (formNameInput.classList.contains('form__input--error') && formNameInput.value) {
    formNameInput.classList.remove('form__input--error');
  }
});

formMessage.addEventListener('input', () => {
  if (formMessage.classList.contains('form__input--error') && formMessage.value) {
    formMessage.classList.remove('form__input--error');
  }
});

export { onSubmitSendInfo };
