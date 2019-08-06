import React, { Component } from 'react'

/* Copy Paste Code:
<Card>
  <FeedItem id="5" author="Martin Andersen" category="Alerts" dateTime="2019-12-27" >
      <h1>Title of Content</h1>Lorem <i>Ipsim</i> <u>rich html</u>
  </FeedItem>
</Card>
*/

export default class FeedItem extends Component {



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

      <div className='FeedItemContent'>{this.props.children}</div>
      
    </div>
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
  }

}