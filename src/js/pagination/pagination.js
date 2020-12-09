

import hendelDiv from '../../templates/pagination/paginationDiv.hbs'
const btn = document.getElementsByClassName('pagination-catigories-btn')
const renderDiv = document.querySelector('.pagination-div')


setInterval(loginning(), 58000)

function loginning(params) {        
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


function renLi(token) {
    let page = 1
    btn[0].addEventListener('click', btn1)
    btn[1].addEventListener('click', btn2)
    btn[2].addEventListener('click', btn3)
    const URL = "https://callboard-backend.herokuapp.com/call?page="
            
    const options = {
        headers: {
            Authorization: `${token}`
        }
    }
    
   const fetchRender = fetch(`${URL}${page}`, options).then(r=>r.json()).then(e => {renderDi(e)       
    })
    
    function btn1() {        
        page = 1
        if(btn[1].classList.contains('activ')){btn[1].classList.remove('activ')} else if( btn[2].classList.contains('activ')){btn[2].classList.remove('activ')}
        btn[0].classList.add('activ')
        fetch(`${URL}${page}`, options).then(r=>r.json()).then(e => {
        renderDi(e);        
    })
        
    }
    function btn2() {        
        page = 2
        if(btn[0].classList.contains('activ')){btn[0].classList.remove('activ')} else if( btn[2].classList.contains('activ')){btn[2].classList.remove('activ')}
        btn[1].classList.add('activ')
        fetch(`${URL}${page}`, options).then(r=>r.json()).then(e => {
        renderDi(e)       
    })
    }
    function btn3() {        
        page = 3
        if(btn[0].classList.contains('activ')){btn[0].classList.remove('activ')} else if( btn[1].classList.contains('activ')){btn[1].classList.remove('activ')}
        btn[2].classList.add('activ')
        fetch(`${URL}${page}`, options).then(r=>r.json()).then(e => {
        renderDi(e)       
    })
    }


    function renderDi(resul) {    
        renderDiv.innerHTML = ""
        const markup = hendelDiv(resul);    
        renderDiv.insertAdjacentHTML('afterbegin', markup);
    }
}
