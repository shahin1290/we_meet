import React, { Component } from 'react'
import {
  Header,
  NavToggle,
  NavMenu
} from 'tailwind-react-ui';

import logo from '../../wemeet_logo.png'
import LoginControl from '../Login/LoginControl';


class AppHeader extends Component {
  render() {

    return (
      <Header bg="white" text="white" screen="md">
        <img src={logo} alt="logo" />
        <NavToggle />
        <NavMenu>
          <LoginControl loginHandler={this.props.loginHandler} logoutHandler={this.props.logoutHandler}/>
        </NavMenu>
      </Header>
    )
  }


}

export default AppHeader