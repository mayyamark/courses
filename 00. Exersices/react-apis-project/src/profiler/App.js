import React from 'react';
import './App.css';

const Component = () => {
  const [count, setCount] = React.useState(0);

  return <h3 onClick={() => setCount(count + 1)}>{count}</h3>
}

const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
};

const App = () => {
  return (
  <div style={{ margin: "auto auto", paddingBottom: "50px" }}>
    <h1>Example 4: Profiler API</h1>
    <React.Profiler id="Component" onRender={onRenderCallback}>
      <Component />
    </React.Profiler>
  </div>
  );
};

export default App;