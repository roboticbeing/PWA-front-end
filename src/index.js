import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <App />, document.getElementById('root'));

if('serviceWorker' in navigator) {
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./customServiceWorker.js')
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();
