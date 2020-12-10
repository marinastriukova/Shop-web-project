import axios from 'axios';

///////// registration open/close logic //////////////

const refs = {
    openBtnRegistrModal: document.querySelector('[data-modal-open]'),
    closeBtnRegistrModal: document.querySelector('[data-modal-close]'),
    modalRegistr: document.querySelector('[data-modal]'),
}

function toggleRegisterModal() {
    refs.modalRegistr.classList.toggle('is-hidden')
}

refs.openBtnRegistrModal.addEventListener('click', toggleRegisterModal);
refs.closeBtnRegistrModal.addEventListener('click', toggleRegisterModal);


const registerBtn = document.querySelector('.registration-button');
registerBtn.addEventListener('click', toggleRegisterModal);



////////// registr ////////////////

const BASE_URL = 'https://callboard-backend.herokuapp.com';

const registerUser = userData => {
     const { email, password } = userData;

     return axios.post(`${BASE_URL}/auth/register`, { email, password });
 }

const registerFormRef = document.querySelector('.registration-form');


////////


const handleRegisterSubmit = event => {
    event.preventDefault();

    const { currentTarget: form } = event;
    const formData = new FormData(form);
    const body = {};

    formData.forEach((value, key) => {
        body[key] = value;
    })
    console.log(body);
    
    //register(body);
    registerUser(body);
    login(body);
}

registerFormRef.addEventListener('submit', handleRegisterSubmit)



////// ПОСМАН ///////

// function register(log){
// const regOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(log)
// };



///////// login///////////

function login(log){
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log)
  };
  
  fetch("https://callboard-backend.herokuapp.com/auth/login", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
