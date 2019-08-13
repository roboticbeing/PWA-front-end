import axios from 'axios';
import store from '../store';
import apiAuth from './apiAuth';

import * as actionTypes from '../actions';

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
            store.dispatch({type:actionTypes.GET_FEED, data: res.data.data})
            store.dispatch({type:actionTypes.GET_FEED_TIMESTAMP, timestamp: res.timestamp})
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

    authRegister(userName, fullName, password, passwordConfirm ){
        let data = {
            "userName": userName,
            "fullName": fullName,
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

    authLogin(userName, fullName, password, passwordConfirm ){
        let data = {
            "userName": userName,
            "fullName": fullName,
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
            apiAuth.setAuthorizationToken( res.data.token)
            // that.authSetHeaderToken(res.data.token ) 
            store.dispatch({type:actionTypes.LOGIN})
        })
    }


    me(){
        let www = 'useraccounts/me/'

        axios.get('https://polar-peak-16816.herokuapp.com/api/useraccounts/me/')
        .then(res => {
            console.log(res)
        })
       // https://polar-peak-16816.herokuapp.com/api/useraccounts/me/
    }

}

