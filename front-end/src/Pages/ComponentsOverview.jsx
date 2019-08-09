import React, { Component } from 'react';
import Card from '../Components/Card';
import FeedItem from '../Components/FeedItem';
import CreateNews from '../Components/CreateNews';
import api from '../api/api';
import apiPath from '../api/apiPath';

class ComponentsOverview extends Component {
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
        <button onClick={this.axiosTest}></button>

      </div>
    );
  }
  //  -------------------------------
  // axiosTest = () =>  {
  //   let db = new api(new apiPath());
  //   // db.add(new apiPath(), 'person')
  //   // db.add(new apiPath(), 'personlist')
  //   // db.add(new apiPath(), 'events')
  //   // db.add(new apiPath(), 'person')
  //   // db.person.get()
  //   // db.init()
  //    db.martin.get()
  //    db.martin.post()
  //    db.martin.find()
  //   db.james.
  // }
  //  -------------------------------
  
}

export default ComponentsOverview;
