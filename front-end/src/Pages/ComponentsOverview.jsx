import React, { Component } from 'react';
import Card from '../Components/Card';
import FeedItem from '../Components/FeedItem';
import CreateNews from '../Components/CreateNews';

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
      </div>
    );
  }
}

export default ComponentsOverview;
