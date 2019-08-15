import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class Safety extends Component {
  render () {
    return ( 
    
      <div>{i18next.t('safety-tips')}</div>
    
    );
  }
}

export default withTranslation()(Safety);