import axios from 'axios';
import { alert } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
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




  if (refs.modalRegistr.classList === 'is-hidden') {
    document.onkeydown = function (e) {
      if (e.key === 'Escape') {
        toggleRegisterModal();
      }
    }
  }



////BUTTON/////
const singUp = document.querySelector('.registration-button-entry');
const registerBtn = document.querySelector('.registration-button');

// registerBtn.addEventListener('click', toggleRegisterModal);
// singUp.addEventListener('click', toggleRegisterModal);


/////////////////////////

const BASE_URL = 'https://callboard-backend.herokuapp.com';




const registerFormRef = document.querySelector('.registration-form');



const handleRegisterSubmit = event => {
  event.preventDefault();

  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  })
  // console.log(body);

  if (event.target.classList.value === "registration-button") {
    register(body);
    // toggleRegisterModal();
  } else
    if (event.target.classList.value === "registration-button-entry") {
      login(body);
      // toggleRegisterModal();
    }


}

// registerFormRef.addEventListener('submit', handleRegisterSubmit)
registerFormRef.addEventListener('click', handleRegisterSubmit)


////// registr ///////

async function register(log) {
  const regOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log)
  };

  try {
    fetch("https://callboard-backend.herokuapp.com/auth/register", regOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        if (result.message === `User with ${JSON.parse(regOptions.body).email} email already exists`) {
          pushError(result.message)
        } else { 
          console.log(result) }
      })
  }
  catch (error) { console.log('error', error) };
}



//////error//////

function pushError(error) {
  alert({
    title: `${error}`,
    delay: 1500
  });
}

///////// login///////////
async function login(log) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log)
  };

  try {
    await fetch("https://callboard-backend.herokuapp.com/auth/login", requestOptions)

      .then(response => response.json())
      .then(result => {
        if (result.message === 'Password is wrong') {
          pushError(result.message)
        } else if (result.message === `User with ${JSON.parse(requestOptions.body).email} email doesn't exist`) {
          pushError(result.message)}
          else{
          console.log(result)
        }
      })
  }
  catch (error) {
    console.log('error', error);
  };
}


