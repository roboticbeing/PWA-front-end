import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class Laws extends Component {
  render () {
    return ( 
    
      <div>{i18next.t('laws')}</div>
    
    );
  }
}

export default withTranslation()(Laws);