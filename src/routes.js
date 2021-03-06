import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Todo from './components/Todo';
import Counter from './components/Counter';
import Weather from './components/Weather';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} />
        <Route path="/weather" component={Weather} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Routes;
