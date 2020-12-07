
import hendel from '../../templates/pagination.hbs'
const cardName = document.querySelector('.pagination-name-card')
const render = document.querySelector('.pagination-card-all')


const search = 'nike'




    const API_KEY = '19060894-87e054058a337546d07970d77'
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=1&per_page=6&key=${API_KEY}`
    fetch(URL).then(r => r.json()).then(e => { 
        console.log(e);
        renderCard(e.hits)       
    })



function renderCard(resul) {
    render.innerHTML = ""
    const markup = hendel(resul);
    render.insertAdjacentHTML('beforeend', markup);
}