


export default class Api {
    constructor() {
        // this.page = 2
    }

    getQuery (page) {

    const headers = {
            Authorization: `Bearer ${refreshToken}`
    }    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQwZWEyODBjOGRhNDAwMTc2ODljMjQiLCJzaWQiOiI1ZmQxMTM1OTBjOGRhNDAwMTc2ODljYTAiLCJpYXQiOjE2MDc1Mzc0OTcsImV4cCI6MTYwNzU0MTA5N30.kRfvq6dAj3iuJryIfKwOo1rXzgzbfaRmbBSQV8XZPjM';

    const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQwZWEyODBjOGRhNDAwMTc2ODljMjQiLCJzaWQiOiI1ZmQxMTM1OTBjOGRhNDAwMTc2ODljYTAiLCJpYXQiOjE2MDc1Mzc0OTcsImV4cCI6MTYxMDE2NTQ5N30.NoWT46_Jwpx8ohODgqzneECBSbQKtn610a3lsM27iYc';

    const url = `https://callboard-backend.herokuapp.com/call?page=1`
    return fetch(url, {headers})
        .then(resronce => resronce.json())
        .catch (error => console.log('idi v les'))
    }

    get query(){
        return this.page;
    }
    set query(newQuery){
        return this.page = newPage;
    }

    resetPage() {
        this.page = 1;
    }

}
