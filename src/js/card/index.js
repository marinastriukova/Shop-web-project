
import cardTpl from '../../templates/card.hbs';
import Api from './api';
const removePagin = document.querySelector('.pagination-div')
const newApi = new Api();
const cardRef = document.querySelector('.card__list');
const cardExamp = newApi.getQuery();


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
    renderCard(resul)
  }) 


  function renderCard(resul) {     
    const card = cardTpl(resul)
  cardRef.insertAdjacentHTML("beforeend", card);
  }
}
  

