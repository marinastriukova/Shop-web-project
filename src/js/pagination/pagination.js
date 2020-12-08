
// import hendelLi from '../../templates/pagination//paginationLi.hbs'
import hendelDiv from '../../templates/pagination/paginationDiv.hbs'
// const groupName = document.querySelector('.pagination-div')
const btn = document.getElementsByClassName('pagination-catigories-btn')
const renderDiv = document.querySelector('.pagination-div')
// console.log(renderGroup);
function renLi() {
    let page = 1
    btn[0].addEventListener('click', btn1)
    btn[1].addEventListener('click', btn2)
    btn[2].addEventListener('click', btn3)
    const URL = "https://callboard-backend.herokuapp.com/call?page="
        
    
    
    const options = {
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmNmODc2ZDJkNTVkOTAwMTdhZTMzOTciLCJzaWQiOiI1ZmNmZjYwMjI4YjhhNzAwMTc5ODMyNTMiLCJpYXQiOjE2MDc0NjQ0NTAsImV4cCI6MTYwNzQ2ODA1MH0.hMvcJNhFoPUUiHHAPpAb-JUa8geUs7yjO65xur79XxI"
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
renLi()