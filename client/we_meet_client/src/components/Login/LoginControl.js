import React, { Component } from 'react';
import { LinkButton, OutlineButton } from 'tailwind-react-ui';
import { connect } from 'react-redux';
import LoginForm from './LoginForm'


const mapStateToProps = (state) => {
  return {
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn
  }
}
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLoginForm: false
    }
    this.handleLoginClick = this.props.loginHandler.bind(this);
    this.handleLogoutClick = this.props.logoutHandler.bind(this)
  }

  displayLoginForm() {
    this.setState({displayLoginForm: true})
  }

  hideLoginForm() {
    this.setState({displayLoginForm: false})
  }

  render() {
    const isSignedIn = this.props.isSignedIn;
    let startNewGroupLink, logoutButton, profileLink, loginButton, registerButton, loginForm
    if (isSignedIn) {
      startNewGroupLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{ textDecoration: 'none' }}>Start a new group</LinkButton>
      profileLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{ marginLeft: '13px', textDecoration: 'none' }}>Profile</LinkButton>
      logoutButton = <OutlineButton onClick={this.handleLogoutClick.bind(this)} brand="primary" text-hocus="white" style={{ marginLeft: '15px' }}>
        Log out</OutlineButton>;
    } else {
      loginButton = <OutlineButton onClick={this.displayLoginForm.bind(this)} id="login-btn" brand="primary" text-hocus="white">
        Log in</OutlineButton>;
      registerButton = <OutlineButton brand="primary" text-hocus="white" style={{ marginLeft: '10px' }}>
        Sign up</OutlineButton>
    }

    if (this.state.displayLoginForm) {
      let overlay = document.getElementById('overlay')
      if (overlay) {
        overlay.style.display = ''
        document.getElementById('login-form').reset()
      }
      loginForm = <LoginForm loginHandler={this.handleLoginClick.bind(this)} hideFormHandler={this.hideLoginForm.bind(this)}/ >
    }

    return (
      <>
        {startNewGroupLink}
        {profileLink}
        {logoutButton}
        {loginButton}
        {registerButton}
        {loginForm}
      </>
    );
  }
}

export default connect(mapStateToProps)(LoginControl);
