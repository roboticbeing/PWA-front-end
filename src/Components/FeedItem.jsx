import React, { Component } from 'react'

/* Copy Paste Code:
<Card>
  <FeedItem id="5" author="Martin Andersen" category="Alerts" dateTime="2019-12-27" content="<h1>title</h1>">
  </FeedItem>
</Card>
*/

export default class FeedItem extends Component {

state = { id:  'randomId_' + Math.floor((Math.random() * 1000000000000) + 1) };

  render() {
    return <div>
      <div className='FeedItemAutorAndBtnContainer'>
            <div className='FeedItemBtnArea'>
                <div className='FeedItemBtn' onClick={this.showPopupHandler}>...</div>
            </div>
            <div className='FeedItemAuthor'>
                <div className='FeedItemName'>{this.props.author} ➤ {this.props.category}</div>
                <div className='FeedItemDate'>{this.props.dateTime}</div>
                
            </div>
      </div>
      <hr></hr>
      <div id={this.state.id}></div>
      
    </div>
  }

  // INIT -------------------------------

componentDidMount() {
  // good for AJAX: fetch, ajax, or subscriptions.
// invoked once (client-side only).
  // fires before initial 'render'
  if (this.props.content) {
    let html = this.props.content;
    document.getElementById(this.state.id).innerHTML = html;
  }
}
  

  // Methods -------------------------------
  
  showPopupHandler(){
    alert('TODO: Popup')
  }

  // Default Props -------------------------------
  // Set default props
  static defaultProps = {
    author: "Author - Prop Not Defined",
    category: "Category - Prop Not Defined",
    dateTime: "dateTime - Prop Not Defined",
    content: "Content - Prop Not Defined",
  }

}