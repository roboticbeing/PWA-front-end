import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render( <App />, document.getElementById('root'));

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', {scope: './'}).then(function(registration) {
        console.log('ServiceWorker registration successful with scope:',  registration.scope);
      }).catch(function(error) {
        console.log('ServiceWorker registration failed:', error);
      });     
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
