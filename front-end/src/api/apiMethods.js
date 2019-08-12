import axios from 'axios'

export default class apiMethods {

    endpoint = null;
    axiosConfig = null;

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
        axios.post(this.axiosConfig.defaults.baseURL + this.endpoint, data, this.axiosConfig)
        .then(res => {
            console.log(res)
            console.log('token: ', res.data.token )
            that.authSetHeaderToken(res.data.token ) 
        })
    }

    authSetHeaderToken(token){
        window['myToken'] = token;
        this.axiosConfig.defaults.headers.common['Authorization'] = 'BEARER ' + token
       this.axiosConfig.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
        this.axiosConfig.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
        this.axiosConfig.defaults.headers.common['Accept'] = 'application/json'

        console.log('apiMethods.js:150|authSetHeaderToken', this.axiosConfig.defaults.headers.common['Authorization']) // debugger
    }

    me(){
        // this.axiosConfig.defaults.headers.common['Authorization'] = 'BEARER ' + t
        // this.axiosConfig.defaults.headers.common['Content-Type'] = "application/json"
        
        let www = 'useraccounts/me/'
        let pik= axios.create({
                baseURL: 'https://polar-peak-16816.herokuapp.com/api/',
                timeout: 1000,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyYWNjb3VudHMuZXhhbXBsZS5jb20iLCJleHAiOjE1NjY4NDQ1NTQsInN1YiI6Im1hcnRpbkBnbWFpbC5jb20iLCJlbWFpbCI6Im1hcnRpbkBnbWFpbC5jb20iLCJuYW1lIjoibWFydGluIHF3ZXJ0eSIsInJvbGVzIjpbImNvbnRlbnRFZGl0b3IiXSwiY2xhaW1zIjpbeyJ0eXBlIjoiT1UiLCJ2YWx1ZSI6IkRlcGFydG1lbnQyIn0seyJ0eXBlIjoiVGFzayIsInZhbHVlIjoiY2FuVXBkYXRlUHJvZHVjdHMifV0sImlhdCI6MTU2NTYzNDk1M30.4zrBlBo8ZMMRXWbSvzjrTktUcpIwWk1ByKJYrKBOb6A',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        )
        axios.get('https://polar-peak-16816.herokuapp.com/api/useraccounts/me/', 
        {
                //baseURL: 'https://polar-peak-16816.herokuapp.com/api/',
                timeout: 1000,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyYWNjb3VudHMuZXhhbXBsZS5jb20iLCJleHAiOjE1NjY4NDQ1NTQsInN1YiI6Im1hcnRpbkBnbWFpbC5jb20iLCJlbWFpbCI6Im1hcnRpbkBnbWFpbC5jb20iLCJuYW1lIjoibWFydGluIHF3ZXJ0eSIsInJvbGVzIjpbImNvbnRlbnRFZGl0b3IiXSwiY2xhaW1zIjpbeyJ0eXBlIjoiT1UiLCJ2YWx1ZSI6IkRlcGFydG1lbnQyIn0seyJ0eXBlIjoiVGFzayIsInZhbHVlIjoiY2FuVXBkYXRlUHJvZHVjdHMifV0sImlhdCI6MTU2NTYzNDk1M30.4zrBlBo8ZMMRXWbSvzjrTktUcpIwWk1ByKJYrKBOb6A',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }        
        )
        .then(res => {
            console.log(res)
        })
       // https://polar-peak-16816.herokuapp.com/api/useraccounts/me/
    }


}