import React, { Component } from 'react';
import './css/tailwind.css';
import Events from './components/Events/Events';
import AppHeader from './components/ui-components/AppHeader'
import { Container, TailwindThemeProvider } from 'tailwind-react-ui';

class App extends Component {
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
          <AppHeader />
          <Container style={{marginTop: '20px'}}>
            <Events />
          </Container>
        </TailwindThemeProvider>
      </>
    );
  }
}

export default App;