import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class Geolocation extends Component {
  render () {
    return ( 
    
      <div>{i18next.t('geolocation')}</div>
    
    );
  }
}

export default withTranslation()(Geolocation);
