import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <p>React Redux Application</p>
        <Counter />
        <br></br>
        <TodoList />
      </div>
    );
  }
}

export default App;
