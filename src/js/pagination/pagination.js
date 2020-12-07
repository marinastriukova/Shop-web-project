
// import hendelLi from '../../templates/pagination//paginationLi.hbs'
import hendelDiv from '../../templates/pagination/paginationDiv.hbs'
const groupName = document.querySelector('.pagination-name-group')
const renderGroup = document.querySelector('.pagination-card-all')
const renderDiv = document.querySelector('.section-pagination')
// console.log(renderGroup);
const API_KEY = '19060894-87e054058a337546d07970d77'
    function renDiv(params) {
        const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&page=1&per_page=15&key=${API_KEY}`
    fetch(URL).then(r => r.json()).then(e => { 
       console.log(e);
        renderCard(e.hits)       
    })
    function renderCard(resul, search) {
    renderDiv.innerHTML = ""
    const markup = hendelDiv(resul, search);
    renderDiv.insertAdjacentHTML('beforeend', markup);
}
    }
renDiv(API_KEY)
function renLi(params) {
    
const search = 'nice'


// groupName.textContent = search

    // const API_KEY = '19060894-87e054058a337546d07970d77'
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=1&per_page=6&key=${API_KEY}`
    fetch(URL).then(r => r.json()).then(e => { 
       console.log(e);
        renderCard(e.hits)       
    })



function renderCard(resul) {
    renderGroup.innerHTML = ""
    const markup = hendelDiv(resul);
    renderGroup.insertAdjacentHTML('beforeend', markup);
}
}
renLi(API_KEY)