import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'
import store from './store';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
