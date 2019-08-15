import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../routes';
import Card from '../Components/Card';
import FeedItem from '../Components/FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        news: false,
        announcements: false,
        notices: false,
        events: false,
        alerts: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
//Get All Active Feed
  componentDidMount() {
    db.feedActive.getAll();
  }

  handleChange = event => {
    const { filter } = this.state;
    const id = event.target.id;

    filter[id] = !filter[id];

    this.setState({
      filter
    });
  };

  render() {
    const { filter } = this.state;
    const { feed } = this.props;

    return (
      <div>
        <div>Feed</div>
        <div>
          <input
            onChange={this.handleChange}
            id='news'
            type='checkbox'
            checked={this.state.filter.news}
          />
          <label htmlFor={this.id}>News</label>
        </div>
        <div>
          <input
            onChange={this.handleChange}
            id='announcements'
            type='checkbox'
            checked={this.state.filter.announcements}
          />
          <label htmlFor={this.id}>Announcements</label>
        </div>
        <div>
          <input
            onChange={this.handleChange}
            id='notices'
            type='checkbox'
            checked={this.state.filter.notices}
          />
          <label htmlFor={this.id}>Notices</label>
        </div>
        <div>
          <input
            onChange={this.handleChange}
            id='events'
            type='checkbox'
            checked={this.state.filter.events}
          />
          <label htmlFor={this.id}>Events</label>
        </div>
        <div>
          <input
            onChange={this.handleChange}
            id='alerts'
            type='checkbox'
            checked={this.state.filter.alerts}
          />
          <label htmlFor={this.id}>Alerts</label>
        </div>
        
        <div>
          {feed &&
            feed.map((item, index) => {
              if (filter[item.category]) {
                return (
                  <Card key={item._id}>
                    <FeedItem
                      id={item._id}
                      author='Martin'
                      category={item.category}
                      dateTime={item.dateCreated}
                      content={item.content}
                    />
                  </Card>
                );
              } else {
                return null;
              }
            })}
        </div>

        {/* <div>
        {feed &&
            feed.map((item, index) => {
             
                return (
                  <Card key={item._id}>
                    <FeedItem
                      id={item._id}
                      author='Martin'
                      category={item.category}
                      dateTime={item.dateCreated}
                      content={item.content}
                    />
                  </Card>
                );
            
            })}
        </div> */}
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feed: state.feed
  };
};

export default connect(mapStateToProps)(Feed);
