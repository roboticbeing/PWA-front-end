import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class ImportantLocations extends Component {
  render () {
    return ( 
    
    <div >
     <div>{i18next.t('important-locations')}</div>
    </div>
    
    );
  }
}

export default withTranslation()(ImportantLocations);