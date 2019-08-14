import React, { Component } from 'react';

export default class CreateNews extends Component {
  state = {
    hasExpiration: false
  };

  render() {
    return (
      <div>
        <div>Category</div>
        <select>
          <option value='Alerts'>Alerts</option>
          <option value='News'>News</option>
          <option value='Announcements'>Announcements</option>
          <option value='Notices'>Notices</option>
          <option value='Events'>Events</option>
        </select>

        <div>Content</div>
        {/* TODO: Replace Textarea with rich HTML Editor */}
        <textarea />

        <fieldset>
          <legend>News Expiration Date</legend>
          <label className='pointer'>
            <input
              type='checkbox'
              id='hasExpiration'
              checked={this.state.hasExpiration}
              onChange={this.checkboxHandle}
            />{' '}
            Has Expiration Date{' '}
          </label>

          <div>Date</div>

          <input type='datetime-local' disabled={!this.state.hasExpiration} />
        </fieldset>

        <input type='submit' value='Create News' />
      </div>
    );
  }

  // Methods -------------------------------
  checkboxHandle = () => {
    this.setState({
      hasExpiration: !this.state.hasExpiration
    });
  };
}
