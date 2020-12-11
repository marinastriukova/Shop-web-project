fetch("https://callboard-backend.herokuapp.com/call/categories")
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



   