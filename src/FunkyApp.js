import React, { useState } from 'react';
import './App.css';
import ClassyCounter from './ClassyCounter';
import FunkyCounter from './FunkyCounter';
import DataLoader from './DataLoader';

export default function FunkyApp() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleReset = event => {
    setCount(0);
  };

  const handleIncrement = event => {
    setCount(count + 1);
  };

  const handleDecrement = event => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setToggle(!toggle)}>Render App!</button>
        <div style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection: 'row'}}>
          <ClassyCounter
            count={count}
            reset={handleReset}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
          <FunkyCounter
            count={count}
            reset={handleReset}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
        </div>
        {/* <DataLoader /> */}
      </header>
    </div>
  );
}
