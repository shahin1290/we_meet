import React, { Component } from 'react'
import {
  Header,
  NavToggle,
  NavMenu
} from 'tailwind-react-ui';

import { Link, Route } from 'react-router-dom';
import AppControl from '../ui-components/login/AppControl';

class NavBar extends Component {
  render() {

    return (
      <Header bg="white" text="white" screen="md">
        <div>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <img src='./assets/images/wemeet_logo.png' id="logo" alt="logo" />
          </Link>
        </div>
        <NavToggle />
        <NavMenu>
          <AppControl signUpHandler={this.props.signUpHandler} loginHandler={this.props.loginHandler} logoutHandler={this.props.logoutHandler}/>
        </NavMenu>
      </Header>
    )
  }

}

export default NavBar