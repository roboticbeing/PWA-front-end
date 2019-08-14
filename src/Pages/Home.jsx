import React, { Component } from 'react'
import '../App.css';

class Home extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    let itemRender = null;

    if (this.state.items) {
      itemRender = (
        <div className='menu-wrapper'>
          {this.state.items.map((item, index) => {
            return (
              <span  key={item.id} className='grid5 circle-wrapper'>
                <div className='circle center'><img  className='circleImg' src='icons/white/email.png'/></div>
                <div className='Link'>{item.name}</div>
              </span >
            );
          })}
        </div>
      );
    }

    return ( 
    
    <div className='home'>
       <div className='home-header'><img src='img/moves_logo_large_white.png'/></div>
       <div className='home-item'>
        
            {itemRender}
         
       </div>
    </div>
    
    );
  }

  // State -------------------------------
  // State -------------------------------
   state = {
    showMobileMenu: false,
    activeId: null,
    auth:
      (this.props.auth === 'true' ? true : false) ||
      (this.props.auth === true ? true : false),
    items: [
      {
        name: 'Register',
        route: '/register',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 12
      },
      {
        name: 'Login',
        route: '/login',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 11
      },
      {
        name: 'News',
        route: '/news',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 20
      },
      {
        name: 'Location',
        route: '/location',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 21
      },
      {
        name: 'Emergency',
        route: '/emergency',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 22
      },
      {
        name: 'Alerts',
        route: '/alerts',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 23
      },
      {
        name: 'People-list',
        route: '/people-list',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 24
      },
      {
        name: 'Feed',
        route: '/feed',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 25
      },
      {
        name: 'Contact',
        route: '/contact',
        authRoute: false,
        isBurger: false,
        showAllways: true,
        css: '',
        id: 26
      }
    ]
  };
}

export default Home;