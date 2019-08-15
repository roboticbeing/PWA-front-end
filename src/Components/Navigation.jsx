import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/* PROPS Documentation:

- "auth" prop: true / false: will show different menu items, depending if the user is logged in or not.

*/
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.NavLinkCss = this.NavLinkCss.bind(this);
  }

  render() {
    let navRender = null;

    if (this.state.items) {
      navRender = (
        <ul className='topnav'>
          {this.state.items.map((item, index) => {
            return (
              <li key={item.id} className={this.LiCss(item)}>
                <NavLink
                  to={item.route}
                  onClick={this.navClickHandler}
                  key={item.id}
                  id={item.id + ''}
                  className={this.NavLinkCss(item)}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div>
        <div>{navRender}</div>
      </div>
    );
  }

  // Methods -------------------------------

  navClickHandler = event => {
    let id = parseInt(event.target.id);
    this.setState({ activeId: id });
    let item = this.state.items.find(item => item.id === id);

    if (item.isBurger && this.state.showMobileMenu === false) {
      this.setState({
        showMobileMenu: true
      });
    }
    if (item.isBurger && this.state.showMobileMenu === true) {
      this.setState({
        showMobileMenu: false
      });
    }
    if (!item.isBurger) {
      this.setState({
        showMobileMenu: false
      });
    }
  };

  isMobile = () => {
    return window.innerWidth < 600;
  };

  // CSS -------------------------------

  LiCss = item => {
    let a = [];

    const { isAuthenticated } = this.props;

    // Add css to "Menu burger"
    if (item.isBurger) {
      a.push('nav-menu-button right');
    }
    // in mobile, hide the menu items when it is not in use
    if (!this.state.showMobileMenu && !item.isBurger) {
      a.push('menu-hidden');
    }
    // Show menu items for users that is NOT logged in
    if (!isAuthenticated && item.authRoute && !item.showAllways) {
      a.push('nav-hidden');
    }
    // Show menu items for users that IS logged in
    if (isAuthenticated && !item.authRoute && !item.showAllways) {
      a.push('nav-hidden');
    }
    let res = a.join(' ');
    return res;
  };

  NavLinkCss = item => {
    let a = [];
    // Color the active menu item green
    if (item.id === this.state.activeId && !item.isBurger) {
      a.push('active');
    }

    return a.join(' ');
  };

  // State -------------------------------
  state = {
    showMobileMenu: false,
    activeId: null,
    auth:
      (this.props.auth === 'true' ? true : false) ||
      (this.props.auth === true ? true : false),
    items: [
      {
        name: '☰ Menu',
        authRoute: false,
        route: '#',
        isBurger: true,
        showAllways: true,
        css: '',
        id: 1
      },
      {
        name: 'Home',
        route: '/home',
        authRoute: false,
        isBurger: false,
        showAllways: true,
        css: '',
        id: 10
      },
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
        name: 'Logout',
        route: '/logout',
        authRoute: true,
        isBurger: false,
        showAllways: false,
        css: '',
        id: 27
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
      //do we need this? v
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
        name: 'People-List',
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

  //  -------------------------------
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(Navigation);
