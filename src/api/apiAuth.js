import axios from 'axios'

export function  setAuthorizationToken (token) {
        if(token) {
            axios.defaults.headers.common['authorization'] = `BEARER ${token}`;
            axios.defaults.headers.common['Content-Type'] = "application/json;charset=utf-8"
            axios.defaults.headers.common['Accept'] = "application/json"
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
            axios.defaults.headers.get['Content-Type'] = "application/json;charset=utf-8"
            axios.defaults.headers.get['Accept'] = "application/json"
            axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*"
        } else {
            delete axios.defaults.headers.common['authorization'];
        }
}

export default {setAuthorizationToken}
