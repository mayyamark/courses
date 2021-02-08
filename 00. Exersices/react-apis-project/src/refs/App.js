import React from 'react';
import './App.css';

class String extends React.Component {
  render() {
    return <input onClick={() => this.action()} ref='input' />;
  }
  action() {
    console.log(this.refs.input.value);
  }
}

class Callback extends React.Component {
  render() {
    return <input onClick={() => this.action()} ref={input => (this._input = input)} />;
  }
  action() {
    console.log(this._input.value);
  }
}

const App = () => {
  return (
    <div style={{ margin: "auto auto", paddingBottom: "50px" }}>
      <h1>Example 5.1: Legacy string ref API</h1>
      <String />
      <h1>Example 5.2: Callback ref API</h1>
      <Callback />
    </div>
  );
}

export default App;