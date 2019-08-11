// import api from './api';
import apiMethods from './apiMethods';

    // https://my-domain.com/api/  person/
    // ^domain^                    ^endpoint^


export default class apiPath extends apiMethods {
   
    endpoint;
    axiosConfig; 
    // TODO - axiosConfig: provide defult values to axios config, if no config is provided
    // TODO - add parameter "relation" * 
    constructor(endpoint = '', axiosConfig = {}) {
        super()
        this.endpoint = endpoint;
        this.axiosConfig = axiosConfig;
    }

    // TODO: provide defult values to axios config, if no config is provided
    // axiosReturnDefaultConfig(obj) {
        
    // }

    /* 
    let relation = ['posts_id', 'freinds_id']
    constructor(endpoint = '', axiosConfig = {}, relation = {} )
    */
}