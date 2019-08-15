import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class Push extends Component {
  render () {
    return ( 

    <div >
       return <div>{i18next.t('alerts')}</div>;
    </div>
    
    );
  }
}

export default withTranslation()(Push);;
