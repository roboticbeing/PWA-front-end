import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    let itemRender = null;

    if (this.state.items) {
      itemRender = (
        <div className='menu-wrapper'>
          {this.state.items.map((item, index) => {
            return (
              <span key={item.id} className='grid5 circle-wrapper'>
                <div className='circle center'>
                  <img
                    className='circleImg'
                    alt='circle'
                    src={'icons/white/' + item.img + '.png'}
                  />
                </div>
                <div className='Link'>{item.name}</div>
              </span>
            );
          })}
        </div>
      );
    }

    return (
      <div className='home'>
        <div className='home-header'>
          <img alt='moves people' src='img/moves_logo_large_white.png' />
        </div>
        <div className='home-item'>{itemRender}</div>
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
        name: 'Charity',
        route: '/charity',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'charity',
        id: 12
      },
      {
        name: 'Email',
        route: '/email',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'email',
        id: 11
      },
      {
        name: 'Heart',
        route: '/heart',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'heart',
        id: 20
      },
      {
        name: 'Help',
        route: '/help',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'help',
        id: 21
      },
      {
        name: 'Libra',
        route: '/libra',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'libra',
        id: 22
      },
      {
        name: 'Man User',
        route: '/man-user',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'man-user',
        id: 23
      },
      {
        name: 'Location',
        route: '/map-location',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'map-location',
        id: 24
      },
      {
        name: 'Slumber',
        route: '/slumber',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'slumber',
        id: 25
      },
      {
        name: 'speaking',
        route: '/speaking',
        authRoute: false,
        isBurger: false,
        showAllways: true,
        css: '',
        img: 'speaking',
        id: 26
      },
      {
        name: 'Thief',
        route: '/thief',
        authRoute: false,
        isBurger: false,
        showAllways: true,
        css: '',
        img: 'thief',
        id: 26
      }
    ]
  };
}

export default Home;
