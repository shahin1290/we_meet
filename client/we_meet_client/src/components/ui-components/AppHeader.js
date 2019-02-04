import React from 'react'
import {
  Header,
  NavToggle,
  NavMenu,
} from 'tailwind-react-ui';

import logo from '../../wemeet_logo.png'
import LoginControl from '../Login/LoginControl';


const AppHeader = () => {
  return (
    <Header bg="white" text="white" screen="md">
      <img src={logo} alt="logo" />
      <NavToggle />
      <NavMenu>
        <LoginControl />
      </NavMenu>
    </Header>
  )
}

export default AppHeader