import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';


const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Sarabun');
    font-family: 'Sarabun', sans-serif;
    background-color: #DDDDDD;
  }
  .container {
    text-align: center;
  }
`;

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <GlobalStyles />
        {history.location.pathname !== '/'
          ? <button onClick={history.goBack}>Back</button>
          : ''
        }
        <div className="container">
          <p>React Redux Application</p>
          <Routes />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
