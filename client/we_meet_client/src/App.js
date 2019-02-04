import React, { Component } from 'react';
import './css/tailwind.css';
import Events from './components/Events/Events';
import AppHeader from './components/ui-components/AppHeader'
import { Container, TailwindThemeProvider } from 'tailwind-react-ui';
import Hero from './components/ui-components/Hero'
import Footer from './components/ui-components/Footer'

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
          <Hero />
          <Container style={{marginTop: '20px'}}>
            <Events />
          </Container>
          <Footer />
        </TailwindThemeProvider>
      </>
    );
  }
}

export default App;