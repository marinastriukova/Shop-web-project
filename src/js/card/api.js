
import cardTpl from '../../templates/card.hbs';
const btn = document.getElementsByClassName('pagination-catigories-btn')
const cleanButton = document.querySelector('.header-nav__clear__button ')
const cleanButton2 = document.querySelector('.header-menu__clear__button')
const removePagin = document.querySelector('.pagination-div')
const cardRef = document.querySelector('.card__list');
const renderDiv = document.querySelector('.pagination-div')
const is_hiden = document.querySelector('.card')
import CategoriesApi from '../header.js/categories-API'
const catApi = new CategoriesApi();
const cat = document.querySelector('.js-header-list')


cat.addEventListener('click', clickFilter)
function clickFilter(e) {
    e.preventDefault 
    if (e.target.tagName !== "A") return
    
    if(e.target.getAttribute('href') === '/property'){
     catApi.onProperty().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/electronics'){
    catApi.onElectronics().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/free'){
    catApi.onFree().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/recreationAndSport'){
    catApi.onRecreationAndSport().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/sales'){
    catApi.onSales().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/trade'){
    catApi.onTrade().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/transport'){
    catApi.onTransport().then(result =>render(result))};
                            
    if(e.target.getAttribute('href') === '/work'){
    catApi.onWork().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/businessAndServices'){
    catApi.onbusinessAndServices().then(result =>render(result))};
                                    
}

cleanButton2.addEventListener('click', cleanRenderCategory)


cleanButton.addEventListener('click', cleanRenderCategory)
function cleanRenderCategory(e) {
   e.preventDefault()
    
     if (btn[0].children[0].classList.contains('active')) {
         renderDiv.classList.remove('render_card')
         is_hiden.classList.add('is_hiden')
         cardRef.innerHTML = '' 
         
         

        
    }
    if (btn[1].children[0].classList.contains('active')) {
        renderDiv.classList.remove('render_card')
        is_hiden.classList.add('is_hiden')
        cardRef.innerHTML = '' 
        
    }
    if (btn[2].children[0].classList.contains('active')) {
        renderDiv.classList.remove('render_card')
        is_hiden.classList.add('is_hiden')
        cardRef.innerHTML = '' 
       
    }
}


removePagin.addEventListener('click', clickCategory) 

function clickCategory(e) {
    e.preventDefault();
    let url = `https://callboard-backend.herokuapp.com/call?page=1`

     if (btn[0].children[0].classList.contains('active')) {
        url = `https://callboard-backend.herokuapp.com/call?page=1`
    }
    if (btn[1].children[0].classList.contains('active')) {
        url = `https://callboard-backend.herokuapp.com/call?page=2`
    }
    if (btn[2].children[0].classList.contains('active')) {
        url = `https://callboard-backend.herokuapp.com/call?page=3`
    }
    
    
    const headers = {
            Authorization: `Bearer ${refreshToken}`
    }       
    const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQwZWEyODBjOGRhNDAwMTc2ODljMjQiLCJzaWQiOiI1ZmQxMTM1OTBjOGRhNDAwMTc2ODljYTAiLCJpYXQiOjE2MDc1Mzc0OTcsImV4cCI6MTYxMDE2NTQ5N30.NoWT46_Jwpx8ohODgqzneECBSbQKtn610a3lsM27iYc';

    const cardExamp = fetch(url, { headers })
        .then(resronce => resronce.json())
        .catch (error => console.log('idi v les'))
   


    const query = e.target.getAttribute('class');
    if (e.target.tagName === "A") {
        const camelQuery = camelize(query)
        console.log(camelQuery);
        function camelize() {
            return query.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                if (+match === 0) return "";
                return index === 0 ? match.toLowerCase() : match.toUpperCase();
            });
        }

        cardExamp.then(resul => {console.log(resul[camelQuery]);
            render(resul[camelQuery])
        }) 
        

    }
}
 


 function render(result) {
    //  console.log(result);       
    renderDiv.classList.add('render_card')
      cardRef.innerHTML = ''   
      is_hiden.classList.remove('is_hiden')  
      const card = cardTpl(result)
  cardRef.insertAdjacentHTML("beforeend", card);
  }