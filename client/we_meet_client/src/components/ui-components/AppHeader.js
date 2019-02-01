import React, { Component } from 'react'
import {
  Header,
  NavBrand,
  Box,
  NavToggle,
  NavMenu,
  OutlineButton,
  ErrorText
} from 'tailwind-react-ui';



class AppHeader extends Component {
  render() {
    let userMessage
    if (this.props.message) {
      userMessage = <ErrorText>{this.props.message}</ErrorText>
    }

    return (
      <Header bg="red" text="white" screen="md">
        <NavBrand is="a" href="#header" font="semibold" text={['white', 'xl']}>
          <Box inlineBlock>WeMeet</Box>
        </NavBrand>
        <Box>{userMessage}</Box>
        <NavToggle />
        <NavMenu>
          <OutlineButton onClick={this.props.loginHandler} border="white" text="white" text-hocus="blue">
            Login
          </OutlineButton>
          <OutlineButton border="white" text="white" text-hocus="blue" style={{ marginLeft: '10px' }} >
            Register
          </OutlineButton>
        </NavMenu>
      </Header>
    )
  }

}

export default AppHeader