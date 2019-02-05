import React, { Component } from 'react'
import {
  Header,
  NavToggle,
  NavMenu
} from 'tailwind-react-ui';

import LoginControl from '../Login/LoginControl';

class AppHeader extends Component {
  render() {

    return (
      <Header bg="white" text="white" screen="md">
      <img src='./assets/images/wemeet_logo.png' id="logo" alt="logo" />
        <NavToggle />
        <NavMenu>
          <LoginControl signUpHandler={this.props.signUpHandler} loginHandler={this.props.loginHandler} logoutHandler={this.props.logoutHandler}/>
        </NavMenu>
      </Header>
    )
  }

}

export default AppHeader