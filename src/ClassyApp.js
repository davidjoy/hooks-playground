import React, { Component } from 'react';
import './App.css';
import ClassyCounter from './ClassyCounter';
import FunkyCounter from './FunkyCounter';
import DataLoader from './DataLoader';

class ClassyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleReset = event => {
    this.setState({
      count: 0
    });
  };

  handleIncrement = event => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = event => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setState({toggle: !this.state.toggle})}>Render App!</button>

          <div style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection: 'row'}}>
            <ClassyCounter
              count={this.state.count}
              reset={this.handleReset}
              increment={this.handleIncrement}
              decrement={this.handleDecrement}
            />
            <FunkyCounter
              count={this.state.count}
              reset={this.handleReset}
              increment={this.handleIncrement}
              decrement={this.handleDecrement}
            />
          </div>
          {/* <DataLoader /> */}
        </header>
      </div>
    );
  }
}

export default ClassyApp;
