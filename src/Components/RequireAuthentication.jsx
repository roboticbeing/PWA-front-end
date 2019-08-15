import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from '../Pages/Login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      const { isAuthenticated } = this.props;

      console.log('isAuthenticated: ' + isAuthenticated);

      return isAuthenticated ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Redirect to='/login' />
      );
    }
  }

  Authentication.contextTypes = {
    router: PropTypes.objectOf(PropTypes.object)
  };

  Authentication.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  function mapStateToProps(state) {
    return { isAuthenticated: state.isAuthenticated };
  }

  return withRouter(connect(mapStateToProps)(Authentication));
}
