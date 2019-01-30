import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { history } from './helpers/history';
import store from './store';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  rootElement
);
