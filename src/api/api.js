import axios from 'axios'
import apiPath from './apiPath';

/*

apiKing

new apiPath('https://domain.com/api/', 'sub-route-endpoint/', AxiosConfig)

*/

export default class api {
        
        config = {

            cloudDomain: axios.create({
                    baseURL: 'https://some-domain.com/api/',
                    timeout: 1000,
                    headers: {'X-Custom-Header': 'foobar'}
                }
            ),

            testDomain: axios.create({
                    baseURL: 'https://polar-peak-16816.herokuapp.com/api/',
                    timeout: 3000,
                    headers: {
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization':'-not defined',
                        // get:{
                        //     'Accept': 'application/json',
                        //     'Access-Control-Allow-Origin': '*',
                        //     'Content-Type': 'application/json;charset=utf-8',
                        //     'Authorization':'b'
                        // }
                    }
                }
            ),

    }
    constructor() {

        this.useraccountsMe       = new apiPath('useraccounts/me/', this.config.testDomain)
        this.useraccounts         = new apiPath('useraccounts/', this.config.testDomain)
        
        this.useraccountsActivate   = new apiPath('useraccounts/activate/', this.config.testDomain)
        this.useraccountsRegister = new apiPath('useraccounts/register/', this.config.testDomain)
        this.useraccountsLogin    = new apiPath('useraccounts/login/', this.config.testDomain)

        this.persons              = new apiPath('persons/', this.config.testDomain)
        this.personsprotected     = new apiPath('personsprotected/', this.config.testDomain)
        this.feed                 = new apiPath('feed/', this.config.testDomain)
        this.feedActive           = new apiPath('feed/active/', this.config.testDomain)
        this.feedAlerts           = new apiPath('feed/alerts/', this.config.testDomain)
        this.feedEvents           = new apiPath('feed/events/', this.config.testDomain)
        this.feedNews             = new apiPath('feed/news/', this.config.testDomain)
        this.feedNotice           = new apiPath('feed/notices/', this.config.testDomain)
        this.feedAnnouncement   = new apiPath('feed/announcements/', this.config.testDomain)
        this.textcontent           = new apiPath('textcontent/', this.config.testDomain)
        this.peopleList           = new apiPath('peopleList/', this.config.testDomain)
        this.peopleList           = new apiPath('peopleList/', this.config.testDomain)




    }//constructor
}

