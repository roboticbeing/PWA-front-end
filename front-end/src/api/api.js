import axios from 'axios'
import apiPath from './apiPath';

/*

apiKing

new apiPath('https://domain.com/api/', 'sub-route-endpoint/', AxiosConfig)

*/
let authBearerToken = 'a'
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
                        'Authorization':authBearerToken,
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
      // Config for multiple Axios Config's


        // public: | jwt: 
        this.useraccountsMe       = new apiPath('useraccounts/me/', this.config.testDomain)
        this.useraccounts         = new apiPath('useraccounts/', this.config.testDomain)
        this.useraccountsActive   = new apiPath('useraccounts/active/', this.config.testDomain)
        this.useraccountsRegister = new apiPath('useraccounts/register/', this.config.testDomain)
        this.useraccountsLogin    = new apiPath('useraccounts/login/', this.config.testDomain)

        // public: get | jwt: get, post, put
        this.persons              = new apiPath('persons/', this.config.testDomain)
        this.personsprotected     = new apiPath('personsprotected/', this.config.testDomain)
        this.feed                 = new apiPath('feed/', this.config.testDomain)
        this.feedActive           = new apiPath('feed/active/', this.config.testDomain)
        this.feedAlerts           = new apiPath('feed/alerts/', this.config.testDomain)
        this.feedEvents           = new apiPath('feed/events/', this.config.testDomain)
        this.feedNews             = new apiPath('feed/news/', this.config.testDomain)
        this.feedNotice           = new apiPath('feed/notices/', this.config.testDomain)
        this.textcontent           = new apiPath('textcontent/', this.config.testDomain)
        this.peopleList           = new apiPath('peopleList/', this.config.testDomain)
        this.peopleList           = new apiPath('peopleList/', this.config.testDomain)


      /* 
      this.config.testDomain.interceptors.response.use((res)=> {

          // check if token exists
          if(res.data && res.data.token && res.data.token.length > 20 ){
              console.log('apiPath.js:26|START: RESPONSE------------', res) // debugger
              console.log('apiPath.js:26|TOKEN------------', res.data.token) // debugger
              console.log('apiPath.js:53|', 'SETUP') // debugger
               // debugger
              //  this.config.testDomain.defaults.headers.common['Authorization'] = 'BEARER ' + res.data.token 
              // this.config.testDomain.defaults.headers.common['Content-Type'] = "application/json;charset=utf-8"
              // // that.axiosConfig.defaults.headers.common['Accept'] = "application/json"
              // this.config.testDomain.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

              // this.config.testDomain.defaults.headers.get['Authorization'] = 'BEARER ' + res.data.token 
              // this.config.testDomain.defaults.headers.get['Content-Type'] = "application/json;charset=utf-8"
              // this.config.testDomain.defaults.headers.get['Accept'] = "application/json"
              // this.config.testDomain.defaults.headers.get['Access-Control-Allow-Origin'] = "*"
              this.config.testDomain.defaults.headers['Authorization'] = 'BEARER ' + res.data.token 
              this.config.testDomain.defaults.headers['Content-Type'] = "application/json;charset=utf-8"
              // this.config.testDomain.defaults.headers['Accept'] = "application/json"
              this.config.testDomain.defaults.headers['Access-Control-Allow-Origin'] = "*"
              console.log('apiPath.js:53|axiosconfig.default', this.config.testDomain.defaults.headers)
              console.log('apiPath.js:33|', '-----end------') // debugger
          }

        // Do something with response data
        return res;
      }, function (error) {
        // Do something with response error
        return Promise.reject(error);
      });
      */



    }//constructor
}

