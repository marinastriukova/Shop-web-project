import renLi from './btn'

export default function loginning(params) {        
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");    
    const raw = JSON.stringify({"email":"andreyz11288@gmail.com","password":"123456"});    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    
    fetch("https://callboard-backend.herokuapp.com/auth/login", requestOptions)
    .then(response => response.json())
        .then(result => {            
            const token = result.accessToken
            renLi(token)
            
        })
    .catch(error => console.log('error', error));
}