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
                <div className='circle center'><img  className='circleImg' src={'icons/white/' + item.img +'.png'}/></div>
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
        name: 'Safety Tips',
        route: '/safety',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'charity',
        id: 12,
      },
      {
        name: 'Contact Us',
        route: '/contact',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'email',
        id: 11
      },
      {
        name: 'Medical Needs',
        route: '/medical',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'heart',
        id: 20
      },
      {
        name: 'FAQ',
        route: '/faq',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'help',
        id: 21
      },
      {
        name: 'Laws and Traditions',
        route: '/laws-traditions',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'libra',
        id: 22
      },
      {
        name: 'About Us',
        route: '/about',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'man-user',
        id: 23
      },
      {
        name: 'Important Locations',
        route: '/important-locations',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'map-location',
        id: 24
      },
      {
        name: 'Overnight Stays',
        route: '/overnight',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img:'slumber',
        id: 25
      },
      {
        name: 'Language Barriers',
        route: '/language-barriers',
        authRoute: false,
        isBurger: false,
        showAllways: true,
        css: '',
        img:'speaking',
        id: 26
      },
      {
        name: 'Theft Cases',
        route: '/theft',
        authRoute: false,
        isBurger: false,
        showAllways: true,
        css: '',
        img:'thief',
        id: 26
      }
    ]
  };
}

export default Home;