import React from 'react'
import {
  Header,
  NavToggle,
  NavMenu,
} from 'tailwind-react-ui';

import LoginControl from '../Login/LoginControl';


const AppHeader = () => {
  return (
    <Header bg="white" text="white" screen="md">
      <img src='./assets/images/wemeet_logo.png' alt="logo" />
      <NavToggle />
      <NavMenu>
        <LoginControl />
      </NavMenu>
    </Header>
  )
}

export default AppHeader