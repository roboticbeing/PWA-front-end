import React, { Component } from 'react';

class Register extends Component {
  handleSubmit() {
    alert('New feature coming soon...');
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input type='text' name='userName' />
          </label>
          <br />
          <label>
            Full Name:
            <input type='text' name='fullName' />
          </label>
          <br />
          <label>
            Password:
            <input type='password' name='Password' />
          </label>
          <br />
          <label>
            Confirm Password:
            <input type='password' name='confirmPassword' />
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

export default Register;
