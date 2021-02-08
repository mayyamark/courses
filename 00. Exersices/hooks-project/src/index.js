import React from 'react';
import ReactDOM from 'react-dom';
import RefHook from './RefHook';
import ReducerHook from './ReducerHook';
import EffectHook from './EffectHook';
import ContextHook from './ContextHook';
import MemoHook from './MemoHook';
import CallbackHook from './CallbackHook';

ReactDOM.render(
  <React.StrictMode>
    <RefHook />
    <ReducerHook />
    <EffectHook />
    <ContextHook />
    <MemoHook />
    <CallbackHook />
  </React.StrictMode>,
  document.getElementById('root')
);

