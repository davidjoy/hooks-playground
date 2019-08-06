import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassyApp from './ClassyApp';
import FunkyApp from './FunkyApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ClassyApp />, document.getElementById('root'));
// ReactDOM.render(<FunkyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
