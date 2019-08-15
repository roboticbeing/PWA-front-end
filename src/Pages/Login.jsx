import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { db } from '../routes';

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
        console.log(res);
        if (res) {
          this.setState({ renderRedirect: true });
        }
      });
  }

  render() {
    const { renderRedirect } = this.state;

    if (renderRedirect) {
      return <Redirect to='/location' />;
    } else {
      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              User Name:
              <input
                type='text'
                name='userName'
                onChange={e => this.setState({ userName: e.target.value })}
              />
            </label>

            <br />
            <label>
              Password:
              <input
                type='password'
                name='Password'
                onChange={e => this.setState({ password: e.target.value })}
              />
            </label>
            <br />
            <button type='submit' className='btn btn-primary'>
              Log In
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
