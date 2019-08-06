import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    const links = [
      <li className='nav-item' key={`${1}header`}>
        <NavLink className='nav-link' to='/'>
          Home
        </NavLink>
      </li>
    ];

    // Unauthenticated navigation
    links.push(
      <li className='nav-item' key={2}>
        <NavLink className='nav-link' to='/login'>
          Login
        </NavLink>
      </li>
    );
    links.push(
      <li className='nav-item' key={3}>
        <NavLink className='nav-link' to='/register'>
          Register
        </NavLink>
      </li>
    );

    return links;
  }

  render() {
    const { title } = this.props;

    return (
      <div>
        <nav className='navbar navbar-expand-md navbar-light fixed-top bg-light'>
          <NavLink className='navbar-brand' to='/'>
            {title}
          </NavLink>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>{this.renderLinks()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
