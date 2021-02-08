import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const arr = ['111111111111111', '222222222222222222', 'ddddddddddddddddddddddddddddddddddddddddddddddd', 4, 5, 5, 6, 7, 8];

ReactDOM.render(
  <React.StrictMode>
    <App arr={arr} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
