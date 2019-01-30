import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../actions/counter';

class Counter extends Component {
  incrementCounter = () => {
    this.props.dispatch(incrementCounter());
  }

  decrementCounter = () => {
    this.props.dispatch(decrementCounter());
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <p>Counter: {count || 0}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { counter } = state;
  return {
    count: counter.count,
  };
}

export default connect(mapStateToProps)(Counter);
