import React, { Component } from 'react';
import '../App.css';
import { Link} from "react-router-dom";
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class Home extends Component {
  render() {
    let itemRender = null;

    if (this.state.items) {
      itemRender = (
        <div className='menu-wrapper'>
          {this.state.items.map((item, index) => {
            return (
              <Link to={item.route}>
              <span  key={item.id} className='grid5 circle-wrapper'>
                <div className='circle center'><img  className='circleImg' src={'icons/white/' + item.img +'.png'}/></div>
                <div className='Link'>{item.name}</div>
              </span >
              </Link>
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
        name: `${i18next.t('safety-tips')}`,
        route: '/safety',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'charity',
        id: 12
      },
      {
        name: `${i18next.t('contact')}`,
        route: '/contact',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'email',
        id: 11
      },
      {
        name: `${i18next.t('medical-needs')}`,
        route: '/medical',
        authRoute: false,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'heart',
        id: 20
      },
      {
        name: `${i18next.t('faq')}`,
        route: '/faq',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'help',
        id: 21
      },
      {
        name: `${i18next.t('about')}`,
        route: '/laws-traditions',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'libra',
        id: 22
      },
      {
        name: `${i18next.t('about')}`,
        route: '/about',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'man-user',
        id: 23
      },
      {
        name: `${i18next.t('important-locations')}`,
        route: '/important-locations',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'map-location',
        id: 24
      },
      {
        name: `${i18next.t('overnight')}`,
        route: '/overnight',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        img: 'slumber',
        id: 25
      },
      {
        name: `${i18next.t('language-barriers')}`,
        route: '/language-barriers',
        authRoute: false,
        isBurger: false,
        showAllways: true,
        css: '',
        img: 'speaking',
        id: 26
      },
      {
        name: `${i18next.t('theft')}`,
        route: '/theft',
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

export default withTranslation()(Home);
