import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class Overnight extends Component {
  render () {
    return ( 
    
      <div>{i18next.t('overnight')}</div>
    
    );
  }
}

export default withTranslation()(Overnight);