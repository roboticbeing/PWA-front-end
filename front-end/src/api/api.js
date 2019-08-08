import axios from 'axios'
// import apiPath from './apiPath';

export default class api {
    


     /**
  * @param userInfo Information about the user.
  * @param userInfo.name The name of the user.
  * @param userInfo.email The email of the user.
  */
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