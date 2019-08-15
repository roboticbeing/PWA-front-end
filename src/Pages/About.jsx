import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class About extends Component {
  render() {
    return <div>{i18next.t('about')}</div>;
  }
}

export default withTranslation()(About);
