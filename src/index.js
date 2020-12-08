import "./sass/main.scss";


// registration open/close logic

const refs = {
    openBtnRegistrModal : document.querySelector('[data-modal-open]'),
    closeBtnRegistrModal : document.querySelector('[data-modal-close]'),
    modalRegistr : document.querySelector('[data-modal]'), 
}

refs.openBtnRegistrModal.addEventListener('click', toggleRegistrModal);
refs.closeBtnRegistrModal.addEventListener('click', toggleRegistrModal);

function toggleRegistrModal () {
    refs.modalRegistr.classList.toggle('is-hidden')
}