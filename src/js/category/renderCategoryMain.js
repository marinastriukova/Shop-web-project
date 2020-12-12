import categoryMainTpl from '../../templates/category-main/category-main.hbs';
// import categoryTpl from '../../templates/add-modal-tpls/categories.hbs';
import refs from './refs';
import onSlider from './slider';

fetch('https://callboard-backend.herokuapp.com/call/categories')
  .then(response => response.json())
  .then(result => {
    console.log(result);
    renderCategory(result);
    onSlider();
  })
  .catch(error => console.log('error', error));

function renderCategory(result) {
  refs.categoryMainContainer.innerHTML = categoryMainTpl(result);
}
