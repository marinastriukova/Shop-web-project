import uploadFile from './add-modal-upload-file';

const form = document.querySelector('.js-add-form');
const addImage = document.querySelector('.add-image');
const imageList = document.querySelector('.image-preview');

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);

  if (error === 0) {
  } else {
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = form.querySelectorAll('._req');
  for (let i = 0; i < formReq.length; i++) {
    const element = formReq[i];
    element.nextElementSibling.classList.remove('visible');

    //валидация имени
    if (element.classList.contains('_name')) {
      if (element.value.length <= 3 || element.value.length >= 15) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_description')) {
      //валтдация описания

      if (element.value.length <= 30) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_phone')) {
      //валидация номера телефона

      if (phoneValidate(element)) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_category')) {
      //валидация категории

      if (element.value === 'category') {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_price')) {
      //валидация категории

      if (element.value.length < 2) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (imageList.children.length < 2) {
      //валидация списка картинок

      element.nextElementSibling.classList.add('visible');
      error += 1;
    }
  }
  return error;
}

function phoneValidate(element) {
  return !/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(element.value);
}

addImage.addEventListener('change', () => {
  uploadFile(addImage.files[0]);
});

imageList.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const remove = confirm('Ви впевнені що хочете видалити фото зі списку?');
    if (remove) {
      e.target.parentNode.remove();
    }
  }
});
