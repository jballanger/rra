import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, clearTodos } from '../../actions/todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: '',
    };
  }

  clearTodos = () => {
    this.props.dispatch(clearTodos());
  }

  addTodo = () => {
    const todoValue = this.state.todoValue.trim();
    if (!todoValue) return;
    this.props.dispatch(addTodo(todoValue));
    this.setState({ todoValue: '' });
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { todoValue } = this.state;
    const { todos } = this.props;
    return (
      <div>
        <label htmlFor="todoText">Todo: </label>
        <input name="todoValue" id="todoText" type="text" value={todoValue} onChange={this.handleInputChange} />
        <button onClick={this.addTodo}>Add</button>
        <br></br>
        <p>List of todos:</p>
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.content}</li>;
          })}
        </ul>
        <button onClick={this.clearTodos}>Clear todos</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { todo } = state;
  return {
    todos: todo.todos,
  };
}

export default connect(mapStateToProps)(TodoList);
