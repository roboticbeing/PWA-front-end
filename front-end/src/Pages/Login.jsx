import React, { Component } from 'react';

class Login extends Component {
  handleSubmit() {
    alert('New feature coming soon...');
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type='text' name='email' />
          </label>
          <br />
          <label>
            Password:
            <input type='password' name='Password' />
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

export default Login;
