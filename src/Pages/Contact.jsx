import React, { Component } from 'react';
import i18next from 'i18next';

class Contact extends Component {
  render() {
    return <div>{i18next.t('contact')}</div>;
  }
}

export default Contact;
