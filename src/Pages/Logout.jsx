import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { db } from '../routes';

class Logout extends Component {
  componentDidMount() {
    db.useraccountsLogin.unauth();
  }

  render() {
    return <Redirect to='/' />;
  }
}

export default Logout;
