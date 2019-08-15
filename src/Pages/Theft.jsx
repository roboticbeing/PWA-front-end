import React, { Component } from 'react'
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';


class Theft extends Component {
  render () {
    return ( 
    
      <div>{i18next.t('theft')}</div>
    );
  }
}

export default withTranslation()(Theft);