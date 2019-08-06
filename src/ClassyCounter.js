import React, { Component } from 'react';

export default class ClassyCounter extends Component {
  render() {
    console.log('Classy counter rendering!');
    return (
      <div style={{ flex: 1 }}>
        <h3>ClassyCounter</h3>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.reset}>Reset</button>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}
