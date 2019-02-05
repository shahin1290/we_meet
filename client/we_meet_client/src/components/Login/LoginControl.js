import React, { Component } from 'react';
import { LinkButton, OutlineButton } from 'tailwind-react-ui';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn
  }
}
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.props.loginHandler.bind(this);
    this.handleLogoutClick = this.props.logoutHandler.bind(this)
  }

  render() {
    const isSignedIn = this.props.isSignedIn;
    let startNewGroupLink, logoutButton, profileLink, loginButton, registerButton
    if (isSignedIn) {
      startNewGroupLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{ textDecoration: 'none' }}>Start a new group</LinkButton>
      profileLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{ marginLeft: '13px', textDecoration: 'none' }}>Profile</LinkButton>
      logoutButton = <OutlineButton onClick={this.handleLogoutClick.bind(this)} brand="primary" text-hocus="white" style={{ marginLeft: '15px' }}>
        Log out</OutlineButton>;
    } else {
      loginButton = <OutlineButton onClick={this.handleLoginClick.bind(this)} id="login-btn" brand="primary" text-hocus="white">
        Log in</OutlineButton>;
      registerButton = <OutlineButton brand="primary" text-hocus="white" style={{ marginLeft: '10px' }}>
        Sign up</OutlineButton>
    }

    return (
      <>
        {startNewGroupLink}
        {profileLink}
        {logoutButton}
        {loginButton}
        {registerButton}
      </>
    );
  }
}

export default connect(mapStateToProps)(LoginControl);
