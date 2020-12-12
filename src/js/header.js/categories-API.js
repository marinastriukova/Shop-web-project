let title = document.querySelector('.title');
import render from '../card/api'

export default class CategoriesApi {
  constructor() {
   
  }
  onHome () {
    title.innerHTML = 'Home';
}

onSales () {
    title.innerHTML = 'sales';
    fetch("https://callboard-backend.herokuapp.com/call/specific/sales")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}

onRecreationAndSport () {
    title.innerHTML = 'recreationAndSport';
    fetch("https://callboard-backend.herokuapp.com/call/specific/recreationAndSport")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}

onFree () {
    title.innerHTML = 'free';
    fetch("https://callboard-backend.herokuapp.com/call/specific/free")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}

onbusinessAndServices () {
    title.innerHTML = 'businessAndServices';
    fetch("https://callboard-backend.herokuapp.com/call/specific/businessAndServices")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}
onWork () {
    title.innerHTML = 'work';
    fetch("https://callboard-backend.herokuapp.com/call/specific/work")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}
onTransport () {
    title.innerHTML = 'transport';
    fetch("https://callboard-backend.herokuapp.com/call/specific/transport")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}
onElectronics () {
    title.innerHTML = 'electronics';
    fetch("https://callboard-backend.herokuapp.com/call/specific/electronics")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}
onTrade () {
    title.innerHTML = 'trade';
    fetch("https://callboard-backend.herokuapp.com/call/specific/trade")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}
onProperty () {
    title.innerHTML = 'property';
    fetch("https://callboard-backend.herokuapp.com/call/specific/property")
  .then(response => response.json())
  .then(result => {console.log(result)
    render(result);})
  .catch(error => console.log('error', error));
}
onError () {
    title.innerHTML = 'Not found';
}
}








   