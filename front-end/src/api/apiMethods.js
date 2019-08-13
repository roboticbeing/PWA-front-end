import axios from 'axios'

export default class apiMethods {

    endpoint = null;
    axiosConfig = null;

    // constructor(endpoint = '', axiosConfig = {}){
    //     this.endpoint = endpoint;
    //     this.axiosConfig = axiosConfig;
    //     // this.axiosSetupResponseInterseptor()
    // }
    // HTTP --------------------------------------

    getAll(){
        let t = window['myToken'];
        this.axiosConfig.defaults.headers.common['Authorization'] = 'BEARER ' + t
        this.axiosConfig.defaults.headers.common['Content-Type'] = "application/json"
        
        axios.get(this.axiosConfig.defaults.baseURL + this.endpoint, this.axiosConfig)
        .then(res => {
            console.log(res)
        })
    }

    getId(id = -1){
        if ( id === -1 ){
            console.log('apiMethods.js:getid ' ) // debugger;
        }
        axios.get(this.axiosConfig.defaults.baseURL + this.endpoint + id)
        .then(res => {
            console.log(res)
        })
    }
    
    // Auth needed?
    post(data = {}){
        axios.post(this.axiosConfig.defaults.baseURL + this.endpoint, data)
        .then(res => {
            console.log(res)
        })
    }

    // Auth needed?
    put(data = {}){
        axios.post(this.axiosConfig.defaults.baseURL + this.endpoint, data)
        .then(res => {
            console.log(res)
        })
    }

    // REDUX: Gettter, Setters --------------------------------------
    
    // Create
    storeAdd(params) {
        
    }

    // Read
    storeGetId(params) {
        
    }
    
    // Update
    storeUpdateId(params) {
        
    }
    
    // Update
    storeUpdateIdByKeyValue( id = -1, key='', value ) {
        
    }
    
    // Delete
    storeDeleteId(params) {
        
    }
    storeDeleteAll(params) {
        
    }
    
    // REDUX - Subscription: --------------------------------------
    // Here component will subscribe and listen for  changes in redux state,
    // and update when changes happends  

    // TODO: Subscribe to redux

        onStoreChange( callbackFn = ()=>{} ) {
        
        }


    // Auth--------------------------------------    

    authRegister(userName, password ){
        let data = {
            "userName": userName,
            "fullName": "mxartin qwerty",
            "password": password,
            "passwordConfirm": password,
            "statusActivated": true,
            "statusLocked": false,
            "roles": [
                "contentEditor"
            ],
            "claims": [
                {
                    "type": "OU",
                    "value": "Department2"
                },
                {
                    "type": "Task",
                    "value": "canUpdateProducts"
                }
            ]
        }
    
        let that = this
        axios.post(this.axiosConfig.defaults.baseURL + this.endpoint, data, this.axiosConfig)
        .then(res => {
            console.log(res)

        })
    }

    authLogin(userName, password ){
        let data = {
            "userName": userName,
            "fullName": "mxartin qwerty",
            "password": password,
            "passwordConfirm": password,
            "statusActivated": true,
            "statusLocked": false,
            "roles": [
                "contentEditor"
            ],
            "claims": [
                {
                    "type": "OU",
                    "value": "Department2"
                },
                {
                    "type": "Task",
                    "value": "canUpdateProducts"
                }
            ]
        }
    
        let that = this
        axios.post(this.axiosConfig.defaults.baseURL + this.endpoint, data, this.axiosConfig.defaults)
        .then(res => {
            console.log(res)
            // that.axiosConfig.defaults.headers['Authorization'] = 'BEARER ' + res.data.token 
            this.axiosConfig.defaults.headers['Authorization'] = '1'
            this.axiosConfig.defaults.headers.get['Authorization'] = '2'
            this.axiosConfig.defaults.headers.common['Authorization'] = '3'
            // that.axiosConfig.defaults.headers.common.get['Authorization'] = '4'
            // that.config.testDomain.defaults.headers['Authorization'] = 'BEARER ' + res.data.token 
            // axios.defaults.headers.common['Authorization'] = '4'; 
            // axios.defaults.headers['Authorization'] = '5'; 
            // axios.defaults.headers.get['Authorization'] = '6'; 
            console.log('token: ', res.data.token )


            that.setAuthorizationToken( res.data.token)
            // that.authSetHeaderToken(res.data.token ) 
        })
    }

    // authSetHeaderToken(token){
    //     window['myToken'] = token;
    //     this.axiosConfig.defaults.headers.common['Authorization'] = 'BEARER ' + token
    //    this.axiosConfig.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    //     this.axiosConfig.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
    //     this.axiosConfig.defaults.headers.common['Accept'] = 'application/json'

    //     console.log('apiMethods.js:150|authSetHeaderToken', this.axiosConfig.defaults.headers.common['Authorization']) // debugger
    // }

    me(){
        // this.axiosConfig.defaults.headers.common['Authorization'] = 'BEARER ' + t
        // this.axiosConfig.defaults.headers.common['Content-Type'] = "application/json"
        console.log('apiMethods.js:166|', this.axiosConfig.defaults) // debugger
        let www = 'useraccounts/me/'

        axios.get('https://polar-peak-16816.herokuapp.com/api/useraccounts/me/')
        .then(res => {
            console.log(res)
            console.log('apiMethods.js:189|this.axiosConfig.defaults', this.axiosConfig.defaults) // debugger
        })
       // https://polar-peak-16816.herokuapp.com/api/useraccounts/me/
    }

    meme(){
        let t = window['myToken'];
        this.axiosConfig.defaults.headers.get['Authorization'] = 'BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyYWNjb3VudHMuZXhhbXBsZS5jb20iLCJleHAiOjE1NjY4NjA4OTcsInN1YiI6ImFAYS5kayIsImVtYWlsIjoiYUBhLmRrIiwibmFtZSI6Im14YXJ0aW4gcXdlcnR5Iiwicm9sZXMiOlsiY29udGVudEVkaXRvciJdLCJjbGFpbXMiOlt7InR5cGUiOiJPVSIsInZhbHVlIjoiRGVwYXJ0bWVudDIifSx7InR5cGUiOiJUYXNrIiwidmFsdWUiOiJjYW5VcGRhdGVQcm9kdWN0cyJ9XSwiaWF0IjoxNTY1NjUxMjk2fQ.L6sIQj3TwqPxZwUGPJxw97IahnQuhY7IbMli8NSnN4o'
        this.axiosConfig.defaults.headers.get['Content-Type'] = "application/json;charset=utf-8"
        this.axiosConfig.defaults.headers.get['Accept'] = "application/json"
        this.axiosConfig.defaults.headers.get['Access-Control-Allow-Origin'] = "*"
        console.log('apiMethods.js:201|', this.axiosConfig.defaults.headers ) // debugger
        this.axiosConfig.get(this.axiosConfig.defaults.baseURL + this.endpoint, this.axiosConfig.defaults)
        .then(res => {
            console.log(res)
        })
    }

    // Axios response interceptor--------------------------------------
    axiosSetupResponseInterseptor(){
        console.log('apiPath.js:34|', '--start----') // debugger
        let that = this;
        axios.interceptors.response.use(function (response) {
            console.log('apiPath.js:50|response', response) // debugger
            // check if token exists
            if(response.data && response.data.token && response.data.token.length > 20 ){
                console.log('apiPath.js:53|', 'SETUP') // debugger
                 // debugger
                that.axiosConfig.defaults.headers.common['Authorization'] = 'BEARER ' + response.data.token 
                that.axiosConfig.defaults.headers.common['Content-Type'] = "application/json;charset=utf-8"
                // that.axiosConfig.defaults.headers.common['Accept'] = "application/json"
                that.axiosConfig.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

                that.axiosConfig.defaults.headers.get['Authorization'] = 'BEARER ' + response.data.token 
                that.axiosConfig.defaults.headers.get['Content-Type'] = "application/json;charset=utf-8"
                that.axiosConfig.defaults.headers.get['Accept'] = "application/json"
                that.axiosConfig.defaults.headers.get['Access-Control-Allow-Origin'] = "*"
                console.log('apiPath.js:53|axiosconfig.default', that.axiosConfig.defaults.headers)
            }
            console.log('apiPath.js:33|', '-----end------') // debugger
          // Do something with response data
          return response;
        }, function (error) {
          // Do something with response error
          return Promise.reject(error);
        });
    }

    setAuthorizationToken(token) {
        if(token) {
            axios.defaults.headers.common['authorization'] = `BEARER ${token}`;
            axios.defaults.headers.common['Content-Type'] = "application/json;charset=utf-8"
            axios.defaults.headers.common['Accept'] = "application/json"
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
            axios.defaults.headers.get['Content-Type'] = "application/json;charset=utf-8"
            axios.defaults.headers.get['Accept'] = "application/json"
            axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*"
        } else {
            delete axios.defaults.headers.common['authorization'];
        }
    }
}

