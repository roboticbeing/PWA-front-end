import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { db } from '../routes';
import Card from '../Components/Card';
import FeedItem from '../Components/FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        news: true,
        announcements: true,
        notices: true,
        events: true,
        alerts: true
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
        <div>{i18next.t('feed')}</div>
        <div className='feed-wrapper'>
          <div>
            <input
              onChange={this.handleChange}
              id='news'
              type='checkbox'
              checked={this.state.filter.news}
            />
            <label htmlFor='news'>{i18next.t('news')}</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              id='announcements'
              type='checkbox'
              checked={this.state.filter.announcements}
            />
            <label htmlFor='announcements'>{i18next.t('announcements')}</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              id='notices'
              type='checkbox'
              checked={this.state.filter.notices}
            />
            <label htmlFor='notices'>{i18next.t('notices')}</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              id='events'
              type='checkbox'
              checked={this.state.filter.events}
            />
            <label htmlFor='events'>{i18next.t('events')}</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              id='alerts'
              type='checkbox'
              checked={this.state.filter.alerts}
            />
            <label htmlFor='alerts'>{i18next.t('alerts')}</label>
          </div>

          <div />
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
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feed: state.feed
  };
};

export default connect(mapStateToProps)(withTranslation()(Feed));
