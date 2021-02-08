import React from 'react';
import './App.css';

const Element = ({ text }) => (
  <div>
    <h3>{text}</h3>
  </div>
);

const Cloned = React.cloneElement(<Element />, { text: 'Cloned h3' } )

const Clone = () => {

  return (
    <div style={{ margin: "auto auto", paddingBottom: "50px" }}>
      <h1>Example 2: cloneElement() & isValidElement()</h1>
      <Element text="Original h3" />
      <p>The component Element is a valid React element: {React.isValidElement(<Element />).toString()}</p>
      {Cloned}
      {/* <p>The component Cloned is a valid React element: {React.isValidElement(<Cloned />).toString()}</p> */}
    </div>
  );
}

export default Clone;
