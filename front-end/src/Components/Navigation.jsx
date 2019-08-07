import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  state = { showMobileMenu: false };

  render() {
    return (
      <div>
        <ul className='topnav'>
          <li className='nav-menu-button right'>
            <a href='#toggleMobileMenu' onClick={this.toggleMenuHandler}>
              ☰ Menu
            </a>
          </li>
          <li className={this.isVisible()}>
            <a className='active' href='#home'>
              Home
            </a>
          </li>
          <li className='nav-item' key={2}>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>
          </li>
          <li className='nav-item' key={3}>
            <NavLink className='nav-link' to='/register'>
              Register
            </NavLink>
          </li>
          <li className={this.isVisible()}>
            <a href='#news'>News</a>
          </li>
          <li className={this.isVisible()}>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    );
  }

  // Methods -------------------------------

  // Mobile: Will hide/unhide the nav bar in mobile view
  isVisible = () => {
    return this.state.showMobileMenu ? '' : 'menu-hidden';
  };

  toggleMenuHandler = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  };
}
