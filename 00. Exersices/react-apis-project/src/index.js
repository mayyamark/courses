import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Memo from './memo/App';
import Clone from './cloneElement/App';
import ChildrenAPI from './children/App';
import Profiler from './profiler/App';
import Refs from './refs/App';

ReactDOM.render(
  <React.StrictMode>
    <Memo />
    <hr />
    <Clone />
    <hr />
    <ChildrenAPI />
    <hr />
    <Profiler />
    <hr />
    <Refs />
  </React.StrictMode>,
  document.getElementById('root')
);

