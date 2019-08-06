import React, { Component } from 'react'

export default class CreateNews extends Component {
  render() {
    return <div>

        <div>Category</div>
        <select>
          <option value="Alerts">Alerts</option>
          <option value="News">News</option>
          <option value="Announcements">Announcements</option>
          <option value="Notices">Notices</option>
          <option value="Events">Events</option>
        </select>

        <div>Content</div>
        {/* TODO: Replace Textarea with rich HTML Editor */}
        <textarea></textarea>

        <fieldset>
            <legend>News Expiration Date</legend>
            
                <input type="checkbox" id="hasExpiration" /> <label for="hasExpiration" className='pointer'>Has Expiration Date </label>
           
        <div>Date</div>

            <input type="datetime-local"/>

        </fieldset>

        <input type="submit" value="Create News"/>

    </div>
  }
}