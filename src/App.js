import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarabun');
  body {
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
      <React.Fragment>
        <GlobalStyles />
        {history.location.pathname !== '/'
          ? <button onClick={history.goBack}>Back</button>
          : ''
        }
        <div className="container">
          <p>React Redux Application</p>
          <Routes />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
