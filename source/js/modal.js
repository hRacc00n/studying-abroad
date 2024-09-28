import { aboutButton, currentPhone, form, modal, modalControl, modalMark, modalSelect, nameInput, phoneInput } from './variables';

const resetValues = () => {
  nameInput.value = '';
  phoneInput.value = '';
  modalSelect.value = 'empty';
  modalControl.checked = false;
};

const openModal = () => {
  modal.classList.remove('modal--hide');
  setTimeout(() => {
    modal.classList.remove('modal--close');
  }, 100);
};

const closeModal = () => {
  modal.classList.add('modal--close');
  setTimeout(() => {
    modal.classList.add('modal--hide');
  }, 300);
};

const checkInput = (element, currentElement) => {
  if (currentElement.test(element.value) || element.value === '') {
    return true;
  }
  return false;
};

const addInputClass = (element, evt) => {
  evt.preventDefault();
  element.classList.add('modal__input--error');
};

aboutButton.addEventListener('click', () => {
  openModal();
});

modal.addEventListener('click', (evt) => {
  const targetClick = evt.target.className;

  if (targetClick === 'modal' || targetClick === 'modal__close-button') {
    closeModal();
    resetValues();
  }
});

phoneInput.addEventListener('input', () => {
  if (checkInput(phoneInput, currentPhone)) {
    phoneInput.classList.remove('modal__input--error');
  }
});

form.addEventListener('submit', (evt) => {
  if (!checkInput(phoneInput, currentPhone)) {
    addInputClass(phoneInput, evt);
  }

  if (modalSelect.value === 'empty') {
    modalSelect.classList.add('modal__select--error');
    evt.preventDefault();
  }

  if (!modalControl.checked){
    evt.preventDefault();
    modalMark.classList.add('modal__mark--error');
  }

  if (checkInput(phoneInput, currentPhone) &&
      modalSelect.value !== 'empty' &&
      modalControl.checked
  ) {
    evt.preventDefault();

    const formData = new FormData(form);

    fetch('https://echo.htmlacademy.ru',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          closeModal();
          resetValues();
        }
      });
  }
});

const modalList = modal.querySelector('.modal__list');

modalList.addEventListener('click', (evt) => {
  if (evt.target.className.includes('modal__item')) {
    modalSelect.value = evt.target.dataset.name;

    modal.querySelector('.modal__item--active').classList.toggle('modal__item--active');
    evt.target.classList.toggle('modal__item--active');
  }
});

modalSelect.addEventListener('mousedown', (evt) => {
  evt.preventDefault();
  if (modalList.classList.contains('modal__list--hide')) {
    modalList.classList.remove('modal__list--hide');
    setTimeout(() => {
      modalList.classList.remove('modal__list--close');
    }, 10);
  }
});

modalSelect.addEventListener('keydown', (evt) => {
  if ((evt.key === 'Enter' || evt.key === ' ')) {
    evt.preventDefault();
    if (modalList.classList.contains('modal__list--hide')) {
      modalList.classList.remove('modal__list--hide');
      setTimeout(() => {
        modalList.classList.remove('modal__list--close');
      }, 10);
    }
  }
});

modal.addEventListener('click', (evt) => {
  if (evt.target.className.includes('modal__item') ||
      !evt.target.className.includes('modal__item') && !evt.target.className.includes('modal__select')) {
    const currentElement = modal.querySelector('.modal__item--active');
    if (currentElement.textContent !== '') {
      modalSelect.classList.remove('modal__select--error');
    }
    modalList.classList.add('modal__list--close');
    setTimeout(() => {
      modalList.classList.add('modal__list--hide');
    }, 250);
  }
});

modalControl.addEventListener('change', () => {
  if (modalMark.classList.contains('modal__mark--error') && modalControl.checked) {
    modalMark.classList.remove('modal__mark--error');
  }
});

export { openModal };
