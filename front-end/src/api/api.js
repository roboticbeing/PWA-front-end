import axios from 'axios'
import apiPath from './apiPath';

/*

new apiPath('https://domain.com/api/', 'sub-route-endpoint/', AxiosConfig)

getAll()
getId() / findId()
query({id:5, biggerThan:5})
save()
*/

export default class api {
    
    constructor() {

        // Config for multiple Axios Config's
        let config = {

                cloudDomain: axios.create({
                        baseURL: 'https://some-domain.com/api/',
                        timeout: 1000,
                        headers: {'X-Custom-Header': 'foobar'}
                    }
                ),

                otherDomain: axios.create({
                        baseURL: 'https://other-domain.com/api/',
                        timeout: 1000,
                        headers: {'X-Custom-Header': 'foobar'}
                    }
                ),
        }

        // Api Endpoints
        this.example =      new apiPath('sub-route-endpoint/', config.cloudDomain)
        this.peopleList =   new apiPath('peopleList/', config.cloudDomain)
        this.james =        new apiPath('sub-route-endpoint/', config.cloudDomain)

    }//constructor
}

