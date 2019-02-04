import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/tailwind.css';
import Events from './components/Events/Events';
import AppHeader from './components/ui-components/AppHeader'
import axios from "axios";
import { signInUser } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module
import { Container, TailwindThemeProvider } from 'tailwind-react-ui';
import Hero from './components/ui-components/Hero'
import Footer from './components/ui-components/Footer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      headerMessage: '',
      containerMessage: '',
      email: 'rand@random.com',
      password: 'password'
    };
    this.authorizeUser = this.authorizeUser.bind(this)
    this.rsvp = this.rsvp.bind(this)
  }


  authorizeUser(e) {
    e.preventDefault()
    const { signInUser } = this.props
    const {
      email,
      password,
    } = this.state
    signInUser({ email, password })
      .then(() => {
        this.setState({ headerMessage: `You are logged in` })
      })
      .catch((error) => {
        debugger;
        console.log(error)
        this.setState({ headerMessage: `That did not fly....` })
      })
  }

  async rsvp(id) {
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
        <TailwindThemeProvider
          theme={{
            brandColors: {
              primary: 'teal',
            },
          }}
        >
          <AppHeader loginHandler={this.authorizeUser} message={this.state.headerMessage}/>
          <Hero />
          <Container style={{marginTop: '20px'}}>
            <Events rsvpHandler={this.rsvp} responseMessage={this.state.containerMessage} />
          </Container>
          <Footer />
        </TailwindThemeProvider>
      </>
    );
  }
}

export default connect(
  null,
  { signInUser },
)(App)
