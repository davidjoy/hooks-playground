import React from 'react';

export default function FunkyCounter(props) {
  console.log('Funky counter rendering!');

  return (
    <div style={{ flex: 1 }}>
      <h3>FunkyCounter</h3>
      <p>Count: {props.count}</p>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}
