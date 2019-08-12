import React, { Component } from 'react';
import Card from '../Components/Card';
import FeedItem from '../Components/FeedItem';
import CreateNews from '../Components/CreateNews';
import api from '../api/api';
// import apiPath from '../api/apiPath';

class ComponentsOverview extends Component {
 state = {email: 'a@a.dk'};

  render() {
    return (
      <div>
        <h1>Components Overview</h1>

        <hr />

        <hr />
        <h1>Card</h1>
        <Card>My card</Card>

        <hr />
        <h1>Card + CardFeed</h1>
        <Card>
          <FeedItem
            id='5'
            author='Martin'
            category='Alerts'
            dateTime='2019-12-27'
            content='<h1>Lorem html</h1> <u>Ipsum underline</u><h3>H3 tag</h3><strong>bold text</strong> <b>This is the content</b> Lorem <i>Ipsim</i> <u>rich html</u>'
          >
          </FeedItem>
        </Card>

        <hr />
        <h1>Card + CardFeed (no props defined)</h1>
        <Card>
          <FeedItem>
          </FeedItem>
        </Card>

        <hr />
        <h1>CreateNews</h1>
        <Card>
          <CreateNews />
        </Card>

        <hr/>
        <h1>Axios</h1>
        <input type='text' name="name" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}></input>
        <button onClick={this.axiosRegister}>Axios Register Account</button>
        <button onClick={this.axiosLogin}>Axios Login</button>
        <button onClick={this.axiosMe}>Axios /ME</button>

      </div>
    );
  }
  //  -------------------------------
  axiosRegister = () =>  {
    let db = new api();
    let email= this.state.email;
    db.useraccountsRegister.authRegister(email, 'apple123')
  }
  axiosLogin = () =>  {
    let db = new api();
    db.useraccountsLogin.authLogin(this.state.email, 'apple123')
  }
  axiosMe = () =>  {
    let db = new api();
    db.useraccountsMe.me()
  }

  handleChange(event) {
    console.log('ComponentsOverview.jsx:74|', event.target) // debugger
    this.setState({email: event.target.email});
  }
  //  -------------------------------


}

export default ComponentsOverview;
