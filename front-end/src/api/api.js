import axios from 'axios'
import apiPath from './apiPath';

/*

apiKing

new apiPath('https://domain.com/api/', 'sub-route-endpoint/', AxiosConfig)

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

                testDomain: axios.create({
                        baseURL: 'https://polar-peak-16816.herokuapp.com/api/',
                        timeout: 3000,
                        headers: {'X-Custom-Header': 'foobar'}
                    }
                ),

        }

        // public: | jwt: 
        this.useraccountsMe       = new apiPath('useraccounts/me/', config.testDomain)
        this.useraccounts         = new apiPath('useraccounts/', config.testDomain)
        this.useraccountsActive   = new apiPath('useraccounts/active/', config.testDomain)
        this.useraccountsRegister = new apiPath('useraccounts/register/', config.testDomain)
        this.useraccountsLogin    = new apiPath('useraccounts/login/', config.testDomain)

        // public: get | jwt: get, post, put
        this.persons              = new apiPath('persons/', config.testDomain)
        this.personsprotected     = new apiPath('personsprotected/', config.testDomain)
        this.feed                 = new apiPath('feed/', config.testDomain)
        this.feedActive           = new apiPath('feed/active/', config.testDomain)
        this.feedAlerts           = new apiPath('feed/alerts/', config.testDomain)
        this.feedEvents           = new apiPath('feed/events/', config.testDomain)
        this.feedNews             = new apiPath('feed/news/', config.testDomain)
        this.feedNotice           = new apiPath('feed/notices/', config.testDomain)
        this.textcontent           = new apiPath('textcontent/', config.testDomain)
        this.peopleList           = new apiPath('peopleList/', config.testDomain)
        this.peopleList           = new apiPath('peopleList/', config.testDomain)

    }//constructor
}

