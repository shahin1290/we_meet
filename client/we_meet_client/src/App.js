import React, { Component } from 'react';
import './css/tailwind.css';
import Events from './components/Events/Events';
import AppHeader from './components/ui-components/AppHeader'
import Auth from './services/Auth'
import { Container } from 'tailwind-react-ui';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { message: '' };
    this.fakeLogin = this.fakeLogin.bind(this)
  }

  fakeLogin() {
    Auth.storeUser().then(() => {
      Auth.getUser().then(user => {
        this.setState({ message: `You are logged in as ${user.uid}` })
      })
    })
  }
  render() {
    return (
      <>
        <AppHeader loginHandler={this.fakeLogin} message={this.state.message}/>
        <Container style={{ marginTop: '20px' }}>
          <Events />
        </Container>

      </>
    );
  }
}

export default App;
