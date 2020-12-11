
import renderDi from './render' 
const btn = document.getElementsByClassName('pagination-catigories-btn')
const cardRef = document.querySelector('.card__list');

export default function renLi(token) {
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
        cardRef.innerHTML = ''
        if(btn[1].children[0].classList.contains('active')){btn[1].children[0].classList.remove('active')} else if( btn[2].children[0].classList.contains('active')){btn[2].children[0].classList.remove('active')}
        btn[0].children[0].classList.add('active')
        fetch(`${URL}${page}`, options).then(r=>r.json()).then(e => {
        renderDi(e);        
    })
        
    }
    function btn2() {        
        page = 2
        cardRef.innerHTML = ''
        if(btn[0].children[0].classList.contains('active')){btn[0].children[0].classList.remove('active')} else if( btn[2].children[0].classList.contains('active')){btn[2].children[0].classList.remove('active')}
        btn[1].children[0].classList.add('active')
        fetch(`${URL}${page}`, options).then(r=>r.json()).then(e => {
        renderDi(e)       
    })
    }
    function btn3() {        
        page = 3
        cardRef.innerHTML = ''
        if(btn[0].children[0].classList.contains('active')){btn[0].children[0].classList.remove('active')} else if( btn[1].children[0].classList.contains('active')){btn[1].children[0].classList.remove('active')}
        btn[2].children[0].classList.add('active')
        fetch(`${URL}${page}`, options).then(r=>r.json()).then(e => {
        renderDi(e)       
    })
    }
}

