import axios from 'axios'

export default class apiMethods {

    get(){
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            console.log(res)
        })
    }
    getId(id){
        axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(res => {
            console.log(res)
        })
    }
    
    create(date){
        axios.post('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(res => {
            console.log(res)
        })
    }

}