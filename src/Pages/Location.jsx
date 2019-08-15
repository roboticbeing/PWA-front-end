import React, { Component } from 'react';
import i18next from 'i18next';

class Location extends Component {
  render() {
    return <div>{i18next.t('location')}</div>;
  }
}

export default Location;
