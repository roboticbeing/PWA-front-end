import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import i18next from 'i18next';
import { db } from '../routes';
import { withTranslation } from 'react-i18next';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      fullName: '',
      password: '',
      passwordConfirm: '',
      renderRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    db.useraccountsLogin
      .authLogin(
        this.state.userName,
        this.state.fullName,
        this.state.password,
        this.state.passwordConfirm
      )
      .then(res => {
        if (res) {
          this.setState({ renderRedirect: true });
        }
      });
  }

  render() {
    const { renderRedirect } = this.state;

    if (renderRedirect) {
      return <Redirect to='/feed' />;
    } else {
      return (
        <div>
          <h1>{i18next.t('login')}</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              {i18next.t('username')}
              <input
                type='text'
                name='userName'
                onChange={e => this.setState({ userName: e.target.value })}
              />
            </label>

            <br />
            <label>
              {i18next.t('password')}
              <input
                type='password'
                name='Password'
                onChange={e => this.setState({ password: e.target.value })}
              />
            </label>
            <br />
            <button type='submit' className='btn btn-primary'>
              {i18next.t('login')}
            </button>
          </form>
        </div>
      );
    }
  }
}

export default withTranslation()(Login);
