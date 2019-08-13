import React, { Component } from 'react';
import { db } from '../routes';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      fullName: '',
      password: '',
      passwordConfirm: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleSubmit(event) {
    event.preventDefault();
    db.useraccountsLogin.authLogin(
      this.state.userName, 
      this.state.fullName, 
      this.state.password, 
      this.state.passwordConfirm)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input type='text' name='userName'onChange={(e)=>this.setState({userName: e.target.value})}   />
          </label>
          <br />
          <label>
            Password:
            <input type='password' name='Password' onChange={(e)=>this.setState({password: e.target.value})}/>
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
