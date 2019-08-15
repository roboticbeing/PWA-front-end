import React, { Component } from 'react';
import i18n from '../i18n';

class LanguageSelector extends Component {
  render() {
    return (
      <div className='lang-footer'>
        <span
          onClick={() => {
            i18n.changeLanguage('da');
          }}
        >
          DA
        </span>{' '}
        |{' '}
        <span
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        >
          EN
        </span>{' '}
        |{' '}
        <span
          onClick={() => {
            i18n.changeLanguage('ar');
          }}
        >
          AR
        </span>
      </div>
    );
  }
}

export default LanguageSelector;
