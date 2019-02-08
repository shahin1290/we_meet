import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/tailwind.css';
import axios from "axios";
import { Switch, Route, withRouter } from 'react-router-dom'
import { signInUser, signOutUser, registerUser } from './redux-token-auth-config' 
import NavBar from './components/ui-components/NavBar'
import Footer from './components/ui-components/Footer'
import CreateGroupForm from './components/Groups/CreateGroupForm';
import MainView from './components/Views/MainView';
import EventView from './components/Views/EventView';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      containerMessage: ''
    };
    this.authorizeUser = this.authorizeUser.bind(this)
    this.unauthorizeUser = this.unauthorizeUser.bind(this)
    this.registerUser = this.registerUser.bind(this)
    this.rsvp = this.rsvp.bind(this)
  }

  authorizeUser(e) {
    e.preventDefault()
    const { signInUser } = this.props
    let credentials = {
      email: e.target[0].value,
      password: e.target[1].value
    }

    // This is hacky as hell!
    // e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement)
    document.getElementById('overlay').style.display = 'none'
    signInUser(credentials)
      .then(() => {

        // Let's add this flash at some point
        this.setState({ headerMessage: `You are logged in` })
      })
      .catch((error) => {
        // Let's add this flash at some point
        console.log(error)
        this.setState({ headerMessage: `That did not fly....` })
      })
  }

  unauthorizeUser(e) {
    e.preventDefault()
    const { signOutUser } = this.props
    signOutUser()
      .then(() => {
        // Let's flash the user something
      })
      .catch(() => {

      })
  }

  registerUser(e) {
    e.preventDefault()
    const { registerUser } = this.props
    let credentials = {
      email: e.target[0].value,
      password: e.target[1].value,
      password_confirmation: e.target[3].value
    }
    registerUser(credentials)
      .then(() => {
        // Let's flash the user something
        document.getElementById('overlay').style.display = 'none'

      })
      .catch(() => {

      })
  }

  async rsvp(id) {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }
    try {
      let response = await axios.post("http://localhost:3000/events/" + id + '/attendees', {}, { headers: credentials })
      let message = response.data.message
      this.setState({ containerMessage: message })
    } catch (error) {
      let message = JSON.parse(error.request.responseText).errors[0]
      this.setState({ containerMessage: message })
    }
  }
  
  render() {
    return (
      <>
        <NavBar signUpHandler={this.registerUser} loginHandler={this.authorizeUser} logoutHandler={this.unauthorizeUser} />
        <Switch>
          <Route exact path='/' component={MainView}></Route>
          <Route exact path='/events/:id' component={EventView}></Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(connect(
  null,
  { signInUser, signOutUser, registerUser },
)(App))