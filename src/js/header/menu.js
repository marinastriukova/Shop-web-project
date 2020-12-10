  
const links = {
    burgerButton: document.querySelector('.js-menu-button'),
    closeButton: document.querySelector('.js-close-button'),   
    nav: document.querySelector('.js-nav'),
    header: document.querySelector('.js-header'),    
    headerMenu: document.querySelector('.js-header-menu'),
}
links.burgerButton.addEventListener('click', evt => {
    if (evt) {
        links.nav.classList.add('is-open')
        links.header.style.overflow = 'visible';
        links.headerMenu.style.opacity = 0;       
    }
})
links.closeButton.addEventListener('click', evt => {
    if (evt) {
        links.nav.classList.remove('is-open')
        links.header.style.overflow = 'hidden';
        links.headerMenu.style.opacity = 1;        
    }
})

