import React, { Component } from 'react'
import Card from '../Components/Card';
import FeedItem from '../Components/FeedItem';


class ComponentsOverview extends Component {
  render () {
    return ( 
    
    <div >
      <h1>Components Overview</h1>
      
      <hr/>
      <h1>Card</h1>
      <Card>My card</Card>
      
      <hr/>
      <h1>Card + CardFeed</h1>
      <Card>
        <FeedItem id="5" author="Martin" category="Alerts" dateTime="2019-12-27" >
            <b>This is the content</b> Lorem <i>Ipsim</i> <u>rich html</u>
        </FeedItem>
      </Card>
      
      <hr/>
      <h1>Card + CardFeed (no props defined)</h1>
      <Card>
        <FeedItem>
            <b>This is the content</b> Lorem <i>Ipsim</i> <u>rich html</u>
        </FeedItem>
      </Card>
      

    </div>
    
    );
  }
}

export default ComponentsOverview;