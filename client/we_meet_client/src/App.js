import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../src/actions/actions';
import './css/tailwind.css';
import Events from './components/Events/Events';
import AppHeader from './components/ui-components/AppHeader'
import Auth from './services/Auth'
import { Container } from 'tailwind-react-ui';
import axios from "axios";
import { signInUser } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      headerMessage: '',
      containerMessage: '',
      credentials: this.getCredentials()
    };
    this.fakeLogin = this.fakeLogin.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.rsvp = this.rsvp.bind(this)
  }


  async getCredentials() {
    let credentials = await (await Auth.getUser())
    return credentials
  }

  submitForm(e) {
    e.preventDefault()
    const { signInUser } = this.props
    const {
      email,
      password,
    } = this.state
    signInUser({ email: 'rand@random.com', password: 'password' }) // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then((user) => {
        this.setState({ message: `You are logged in as ${user.uid}` })
      })
      .catch(() => {
        this.setState({ message: `That did not fly....` })
      })
  }

  fakeLogin() {
    Auth.storeUser().then(() => {
      Auth.getUser().then(user => {
        this.setState({ message: `You are logged in as ${user.uid}` })
      })
    })
  }

  async rsvp(id) {
    // Auth.getUser().then(credentials => {
    //   this.setState({ credentials: credentials })
    // })

    // this.setState({credentials: await Auth.getUser()})
    try {
      let response = await axios.post("http://localhost:3000/events/" + id + '/attendees', {}, { headers: this.state.credentials })

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
        <AppHeader loginHandler={this.submitForm} message={this.state.headerMessage} />
        <Container style={{ marginTop: '20px' }}>
          <Events rsvpHandler={this.rsvp} responseMessage={this.state.containerMessage} />
        </Container>
      </>
    );
  }
}

export default connect(
  null,
  { signInUser },
)(App)