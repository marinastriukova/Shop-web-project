const routers = [
    
    {
        path: '/Shop-web-project/',    
        component: fun1,
        meta: { auth: false}
    },
    {
        path: '/Shop-web-project/page2',    
        component: fun2,
        meta: { auth: false}
    },
    {
        path: '/Shop-web-project/page3',   
        component: fun3,
        meta: { auth: false}
    }
];

let auth = true;
let startState = true;

let navbarNav = document.querySelector('.navbar-nav');

function updatePage (e) {
    if (e.target.tagName !== "A") return
    e.preventDefault();
    updateHistory(e);    
}

function updateHistory(e) {
    const query = e.target.getAttribute('href');
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}
function updatedContent() {
    let router = routers.find( item => item.path === history.state || item.path === location.pathname)
    if (!router) {
        fun5();
        return
    }
    if (!router.meta.auth || !auth) {
        router.component(); 
    }
    else if (router.meta.auth && auth && startState) {
        routers[0].component();
        history.pushState(routers[0].path, null, routers[0].path) 
    } 
    startState = false;
}

window.onpopstate = function(event) {
    updatedContent();
};

navbarNav.addEventListener('click', updatePage);

window.addEventListener('load', updatedContent());



function fun1 () {

}
function fun2 () {

}
function fun3 () {

}
function fun5 () {
   alert('Not found');
}