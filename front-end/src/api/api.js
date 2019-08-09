import axios from 'axios'
// import apiPath from './apiPath';


export default class api {
    

    constructor(config) {
        // this.domain = config.domain;
        // this.path = '/'
        // this.person = new apiPath();
        
           /**
        * @param james.fuck Information about the user.
        * @param userInfo.name The name of the user.
        * @param userInfo.email The email of the user.
        */
        this.james = config
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

    init() {
        // this.martin = new apiPath();
    }
}
