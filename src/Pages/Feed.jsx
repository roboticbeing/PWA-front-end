import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../routes';
import Card from '../Components/Card';
import FeedItem from '../Components/FeedItem';

class Feed extends Component {
  componentDidMount() {
    db.feed.getAll();
  }

  render() {
    const { feed } = this.props;

    console.log(feed);

    return (
      <div>
        <div>Feed</div>
        <div>
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
        </div>
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
