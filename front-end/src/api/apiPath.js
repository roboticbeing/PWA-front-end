import api from './api';
import apiMethods from './apiMethods';

    // https://my-domain.com/api/  person/
    // ^domain^                    ^endpoint^


export default class apiPath extends apiMethods {
   
    // TODO - axiosConfig: provide defult values to axios config, if no config is provided

    constructor(endpoint = '', axiosConfig = {}) {
        super()
        this.endpoint = endpoint;
        this.axiosConfig = axiosConfig;
    }

    // TODO: provide defult values to axios config, if no config is provided
    // axiosReturnConfig(obj) {
        
    // }
}