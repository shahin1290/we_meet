import React, { Component } from 'react';
import { LinkButton, OutlineButton } from 'tailwind-react-ui';
import { connect } from 'react-redux';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import CreateGroupForm from '../Groups/CreateGroupForm'

// signUpHandler

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn
  }
}
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLoginForm: false,
      displaySignUpForm: false,
      displayCreateGroupForm: false
    }
    this.loginHandler = this.props.loginHandler.bind(this);
    this.handleLogoutClick = this.props.logoutHandler.bind(this);
    this.signUpHandler = this.props.signUpHandler.bind(this)
  }

  displayLoginForm() {
    this.setState({displayLoginForm: true})
  }

  hideLoginForm() {
    this.setState({displayLoginForm: false})
  }

  displaySignUpForm() {
    this.setState({displaySignUpForm: true})
  }

  hideSignUpForm() {
    this.setState({displaySignUpForm: false})
  }

  handleLoginClick(e) {
    this.setState({displayLoginForm: false})
    this.loginHandler(e);
  }

  handleSignUpClick(e) {
    this.setState({displaySignUpForm: false})
    this.signUpHandler(e);
  }

  handleStartNewGroupClick(e){
    this.setState({displayCreateGroupForm: true})
  }

  render() {
    const isSignedIn = this.props.isSignedIn;
    let startNewGroupLink, logoutButton, profileLink, loginButton, registerButton, loginForm, signUpForm
    if (isSignedIn) {
      startNewGroupLink = <LinkButton onClick={this.handleStartNewGroupClick.bind(this)} text="grey-darkest" text-hocus="teal" style={{ textDecoration: 'none' }}>Start a new group</LinkButton>
      profileLink = <LinkButton text="grey-darkest" text-hocus="teal" style={{ marginLeft: '13px', textDecoration: 'none' }}>Profile</LinkButton>
      logoutButton = <OutlineButton onClick={this.handleLogoutClick.bind(this)} brand="primary" text-hocus="white" style={{ marginLeft: '15px' }}>
        Log out</OutlineButton>;
    } else {
      loginButton = <OutlineButton onClick={this.displayLoginForm.bind(this)} id="login-btn" brand="primary" text-hocus="white">
        Log in</OutlineButton>;
      registerButton = <OutlineButton onClick={this.displaySignUpForm.bind(this)} brand="primary" text-hocus="white" style={{ marginLeft: '10px' }}>
        Sign up</OutlineButton>
    }

    if (this.state.displaySignUpForm) {
      let overlay = document.getElementById('overlay')
      let form = document.getElementById('signup-form')
      if (overlay && form) {
        overlay.style.display = ''
        form.reset()
      }
      signUpForm = <SignUpForm signUpHandler={this.handleSignUpClick.bind(this)} hideFormHandler={this.hideSignUpForm.bind(this)}/ >
  
    }

    if (this.state.displayLoginForm) {
      let overlay = document.getElementById('overlay')
      if (overlay) {
        overlay.style.display = ''
        document.getElementById('login-form').reset()
      }
      loginForm = <LoginForm loginHandler={this.handleLoginClick.bind(this)} hideFormHandler={this.hideLoginForm.bind(this)}/ >
    }

    if (this.state.displayCreateGroupForm) {
      let overlay = document.getElementById('overlay')
      if (overlay) {
        overlay.style.display = ''
        document.getElementById('create-group-form').reset()
      }
      CreateGroupForm = <CreateGroupForm loginHandler={this.handleStartNewGroupClick.bind(this)} hideFormHandler={this.hideLoginForm.bind(this)}/ >
    }

    return (
      <>
        {startNewGroupLink}
        {profileLink}
        {logoutButton}
        {loginButton}
        {registerButton}
        {loginForm}
        {signUpForm}
        {CreateGroupForm}
      </>
    );
  }
}

export default connect(mapStateToProps)(LoginControl);
