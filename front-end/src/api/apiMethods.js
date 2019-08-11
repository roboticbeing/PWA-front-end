import axios from 'axios'

export default class apiMethods {

    endpoint = null;
    axiosConfig = null;

    getAll(){
        axios.get(this.axiosConfig.defaults.baseURL + this.endpoint)
        .then(res => {
            console.log(res)
        })
    }

    getId(id = -1){
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

}