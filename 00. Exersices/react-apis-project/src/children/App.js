import React from 'react';
import './App.css';

const ForEachToArrayCount = ({ children }) => {
  React.Children.forEach(children, console.log);
  console.log(React.Children.toArray(children));
  return (
    <div>
      <p>Children are logged in the console as a single object and as one array!</p>
      <p>Children count: {React.Children.count(children)}</p>
    </div>
  );
};

const Map = ({ children }) => {
  React.Children.map(children, console.log)
  
  return (
    <div>
      {React.Children.map(children, child => (
        React.cloneElement(child, { style: {...child.props.style, color: 'red' }})
    ))}
    </div>
  );
};


const ChildrenAPI = () => {
  return (
    <>
      <div style={{ margin: "auto auto", paddingBottom: "25px" }}>
        <h1>Example 3.1: Children.forEach() & toArray & count() APIs</h1>
        <ForEachToArrayCount>
          <h3>Name: Mayya</h3>
          <h6>Software Consultant</h6>
          <h5>Company: Accedia</h5>
        </ForEachToArrayCount>
      </div>
      <div style={{ margin: "auto auto", paddingBottom: "25px" }}>
        <h1>Example 3.2: Children.map() & cloneElement() APIs</h1>
        <Map>
          <h3>Name: Mayya</h3>
          <h6>Software Consultant</h6>
          <h5>Company: Accedia</h5>
        </Map>
      </div>
    </>
  );
}

export default ChildrenAPI;
