import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';


class Medical extends Component {
  render () {
    return ( 
    
      <div>{i18next.t('medical')}</div>
    
    );
  }
}

export default withTranslation()(Medical);