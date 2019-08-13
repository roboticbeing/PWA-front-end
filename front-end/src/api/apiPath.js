// import api from './api';
import apiMethods from './apiMethods';
import axios from 'axios'
    // https://my-domain.com/api/  person/
    // ^domain^                    ^endpoint^


export default class apiPath extends apiMethods {
   
    endpoint;
    axiosConfig; 
    bearerToken;

    // TODO - axiosConfig: provide defult values to axios config, if no config is provided
    // TODO - add parameter "relation" * 
    constructor(endpoint = '', axiosConfig = {}) {
        // super(endpoint,axiosConfig)
        super()
        this.endpoint = endpoint;
        this.axiosConfig = axiosConfig;

        // let that = this;
        // console.log('apiPath.js:22|', this.axiosConfig.interceptors) // debugger
        // this.axiosConfig.interceptors.response.use((res)=> {
            
        //     // check if token exists
        //     if(res.data && res.data.token && res.data.token.length > 20 ){
        //         console.log('apiPath.js:26|START: response------------', res) // debugger
        //         console.log('apiPath.js:53|', 'SETUP') // debugger
        //          // debugger
        //         // that.axiosConfig.defaults.headers.common['Authorization'] = 'BEARER ' + response.data.token 
        //         this.axiosConfig.defaults.headers.common['Content-Type'] = "application/json;charset=utf-8"
        //         // that.axiosConfig.defaults.headers.common['Accept'] = "application/json"
        //         this.axiosConfig.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

        //         this.axiosConfig.defaults.headers.get['Authorization'] = 'BEARER ' + res.data.token 
        //         this.axiosConfig.defaults.headers.get['Content-Type'] = "application/json;charset=utf-8"
        //         this.axiosConfig.defaults.headers.get['Accept'] = "application/json"
        //         this.axiosConfig.defaults.headers.get['Access-Control-Allow-Origin'] = "*"
        //         console.log('apiPath.js:53|axiosconfig.default', that.axiosConfig.defaults.headers)
        //         console.log('apiPath.js:33|', '-----end------') // debugger
        //     }
           
        //   // Do something with response data
        //   return res;
        // }, function (error) {
        //   // Do something with response error
        //   return Promise.reject(error);
        // });
        
        // console.log('apiPath.js:20|this.axiosConfig',   axiosConfig.defaults) // debugger
        // axios.interceptors.response.use( response => {
        //     console.log('apiPath.js:33|', 'BOOOsdfsdfsdffdsfdsfdfsfsdfsfdsdfsd') // debugger
        //   // Do something with response data
        //   return response;
        // }, function (error) {
        //   // Do something with response error
        //   console.log('apiPath.js:33|', 'EOROROROORORROROORORRO') // debugger

        //   return Promise.reject(error);
        // });


    }

    // TODO: provide defult values to axios config, if no config is provided
    // axiosReturnDefaultConfig(obj) {
        
    // }

    /* 
    let relation = ['posts_id', 'freinds_id']
    constructor(endpoint = '', axiosConfig = {}, relation = {} )
    */

    

     
}