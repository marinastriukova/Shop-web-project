
import cardTpl from '../../templates/card.hbs';
import Api from './api';
const removePagin = document.querySelector('.pagination-div')
const newApi = new Api();
const cardRef = document.querySelector('.card__list');
const cardExamp = newApi.getQuery();
const renderDiv = document.querySelector('.pagination-div')

removePagin.addEventListener('click', clickCategory) // клик по "Дивитись всі"

function clickCategory(e) {
  const query = e.target.getAttribute('class');
  const camelQuery = camelize(query)
  function camelize() {
  return query.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
  
  cardExamp.then(resul => {
    console.log(camelQuery);
    console.log(resul);
    renderCard(resul)
  }) 


  function renderCard(resul) { 
    renderDiv.innerHTML = ''
    cardRef.innerHTML = ''    
    const card = cardTpl(resul.property)
  cardRef.insertAdjacentHTML("beforeend", card);
  }
}
  

