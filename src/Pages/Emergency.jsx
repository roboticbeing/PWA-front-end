import React, { Component } from 'react';
import i18next from 'i18next';

class Emergency extends Component {
  render() {
    return <div>{i18next.t('emergency')}</div>;
  }
}

export default Emergency;
