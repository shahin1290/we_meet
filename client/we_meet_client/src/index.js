import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { verifyCredentials } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module


const store = configureStore();
verifyCredentials(store) // <-<-<-<-<- here's the important part <-<-<-<-<-


render(
  <Provider store={store}>
    <App />

  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
