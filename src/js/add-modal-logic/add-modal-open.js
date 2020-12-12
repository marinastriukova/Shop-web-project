import refs from './refs';

const { openModalAddBtn, openModalAddBtnMobile, body, addModalOverlay } = refs;

openModalAddBtn.addEventListener('click', handleOpenModal);
openModalAddBtnMobile.addEventListener('click', handleOpenModal);

function handleOpenModal() {
  addModalOverlay.classList.add('visible');
  body.classList.add('hidden');
}

// fetch('https://callboard-backend.herokuapp.com/call/categories')
//   .then(response => response.json())
//   .then(result => result)
//   .catch(error => console.log('error', error));
