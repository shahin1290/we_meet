import React, { Component } from 'react';
import './css/tailwind.css';
import Events from './components/Events/Events';
import AppHeader from './components/ui-components/AppHeader'
import { Container } from 'tailwind-react-ui';


class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <Container>
          <Events />
        </Container>

      </>
    );
  }
}

export default App;
