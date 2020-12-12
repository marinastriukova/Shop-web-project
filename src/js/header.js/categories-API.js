let title = document.querySelector('.title');

export default class CategoriesApi {
  constructor() {
   
  }
  onHome () {
    // title.innerHTML = 'Home';
}

onSales () {
    // title.innerHTML = 'sales';
   return fetch("https://callboard-backend.herokuapp.com/call/specific/sales")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

onRecreationAndSport () {
    // title.innerHTML = 'recreationAndSport';
   return fetch("https://callboard-backend.herokuapp.com/call/specific/recreationAndSport")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

onFree () {
    // title.innerHTML = 'free';
   return fetch("https://callboard-backend.herokuapp.com/call/specific/free")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}

onbusinessAndServices () {
    // title.innerHTML = 'businessAndServices';
   return fetch("https://callboard-backend.herokuapp.com/call/specific/businessAndServices")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onWork () {
    // title.innerHTML = 'work';
  return  fetch("https://callboard-backend.herokuapp.com/call/specific/work")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onTransport () {
    // title.innerHTML = 'transport';
   return fetch("https://callboard-backend.herokuapp.com/call/specific/transport")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onElectronics () {
    // title.innerHTML = 'electronics';
  return  fetch("https://callboard-backend.herokuapp.com/call/specific/electronics")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onTrade () {
    // title.innerHTML = 'trade';
   return fetch("https://callboard-backend.herokuapp.com/call/specific/trade")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onProperty () {
    // title.innerHTML = 'property';
   return fetch("https://callboard-backend.herokuapp.com/call/specific/property")
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
onError () {
    // title.innerHTML = 'Not found';
}
}








   