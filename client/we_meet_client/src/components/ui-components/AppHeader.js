import React from 'react'
import {
  Header,
  NavBrand,
  Box,
  NavToggle,
  NavMenu,
  OutlineButton
} from 'tailwind-react-ui';



const AppHeader = () => {
  return (
    <Header bg="red" text="white" screen="md">
      <NavBrand is="a" href="#header" font="semibold" text={['white', 'xl']}>
        <Box inlineBlock>WeMeet</Box>
      </NavBrand>
      <NavToggle />
      <NavMenu>
        <OutlineButton border="white" text="white" text-hocus="blue">
          Login
        </OutlineButton>
        <OutlineButton border="white" text="white" text-hocus="blue">
          Register
        </OutlineButton>
      </NavMenu>
    </Header>
  )
}

export default AppHeader