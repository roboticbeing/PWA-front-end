import React, { Component } from 'react';
import i18next from 'i18next';

class PeopleList extends Component {
  render() {
    return <div>{i18next.t('people-list')}</div>;
  }
}

export default PeopleList;
