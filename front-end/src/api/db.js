import axios from 'axios'
// import apiPath from './apiPath';

export default class db {
    
    constructor(config) {
        // this.domain = config.domain;
        // this.path = '/'
        // this.person = new apiPath();
    }

    get(){
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            console.log(res)
        })
    }

    add(apiObj,name ) {
        this[name] = apiObj;
    }
}