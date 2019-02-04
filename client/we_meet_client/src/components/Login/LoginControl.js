import React, { Component } from 'react';
import { LinkButton, OutlineButton } from 'tailwind-react-ui';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }



  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let startNewGroupLink, logoutButton, profileLink, loginButton, registerButton

    if (isLoggedIn) {
      startNewGroupLink =  <LinkButton text="grey-darkest" text-hocus="teal" style={{textDecoration: 'none'}}>Start a new group</LinkButton>
      profileLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{marginLeft: '13px', textDecoration: 'none'}}>Profile</LinkButton>
      logoutButton = <OutlineButton onClick={this.handleLogoutClick} brand="primary" text-hocus="white" style={{marginLeft: '15px'}}>
        Log out</OutlineButton>;
    } else {
      loginButton = <OutlineButton onClick={this.props.loginHandler} id="login-btn" brand="primary" text-hocus="white">
        Log in</OutlineButton>;
      registerButton = <OutlineButton brand="primary" text-hocus="white" style={{marginLeft: '10px'}}>
        Sign up</OutlineButton>
    }

    return (
      <div>
        {startNewGroupLink}
        {profileLink}
        {logoutButton}
        {loginButton}
        {registerButton}
      </div>
    );
  }
}

export default LoginControl;
