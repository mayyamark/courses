import React from 'react';
import './App.css';

const MemoComponent = React.memo(({ name, company }) => {
  React.useEffect(() => {
    console.log('MemoComponent has rendered!'); // executes only the first time
  });

  return (
    <div>
      <h3>Name: {name}</h3>
      <h5>Company: {company}</h5>
    </div>
  );
});

const Memo = () => {
  const [clicks, setClicks] = React.useState(0);

  return (
    <div style={{ margin: "auto auto", paddingBottom: "50px" }}>
      <h1>Example 1: memo()</h1>
      <h2 onClick={() => setClicks(clicks+1)}>Rerenders of App: {clicks} </h2>
      <MemoComponent name="Mayya" company="Accedia" />
    </div>
  );
}

export default Memo;
