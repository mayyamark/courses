import { useState, useEffect, useRef } from "react";

const EffectHook = () => {
  const [num, setNum] = useState(0);
  const myPar = useRef(null);

  useEffect(() => {
    console.log('Hi'); // изпълнява се винаги, когато компонентът се рендерира
    window.localStorage.setItem('num', num);
    return () => {
      window.localStorage.removeItem('num'); // когато компонентът се пререндерира се изпълнява този callback, преди да се изпълни горния отново
      console.log('Bye');
    }
  });


  return (
    <div style={{ margin: 'auto auto', paddingBottom: '100px' }}>
      <h1>useEffect Hook Example:</h1>
        <p ref={myPar}>{num}</p>
      <button onClick={() => setNum((prevState) => prevState + 1)}>increment</button>
    </div>
  );
};

export default EffectHook;
