import React from 'react'
import {
  Header,
  NavBrand,
  Box,
  NavToggle,
  NavMenu,
} from 'tailwind-react-ui';

import logo from '../../wemeet_logo.png'
import LoginControl from './LoginControl';


const AppHeader = () => {
  return (
    <Header bg="white" text="white" screen="md">
      <img src={logo} alt="Logo" />
      <NavToggle />
      <NavMenu>
        <LoginControl />
      </NavMenu>
    </Header>
  )
}

export default AppHeader