
import cardTpl from '../../templates/card.hbs';
const btn = document.getElementsByClassName('pagination-catigories-btn')
const cleanButton = document.querySelector('.header-nav__clear__button')
const removePagin = document.querySelector('.pagination-div')
const cardRef = document.querySelector('.card__list');
const renderDiv = document.querySelector('.pagination-div')


cleanButton.addEventListener('click', cleanRenderCategory)
function cleanRenderCategory() {
   
    
     if (btn[0].children[0].classList.contains('active')) {
         renderDiv.classList.remove('render_card')
         cardRef.innerHTML = '' 
         
         

        
    }
    if (btn[1].children[0].classList.contains('active')) {
        renderDiv.classList.remove('render_card')
        cardRef.innerHTML = '' 
        
    }
    if (btn[2].children[0].classList.contains('active')) {
        renderDiv.classList.remove('render_card')
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
        function camelize() {
            return query.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                if (+match === 0) return "";
                return index === 0 ? match.toLowerCase() : match.toUpperCase();
            });
        }

        cardExamp.then(resul => {
            renderCard(resul)
        }) 


        function renderCard(resul) { 
            renderDiv.classList.add('render_card')
            cardRef.innerHTML = ''            
            const card = cardTpl(resul[camelQuery])
        cardRef.insertAdjacentHTML("beforeend", card);
        }

    }
}
  
