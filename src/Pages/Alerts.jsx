import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class MyClass extends Component {
  render() {
    return <div>{i18next.t('alerts')}</div>;
  }
}

export default withTranslation()(MyClass);
