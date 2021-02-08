import { useState, useEffect, useMemo } from "react";

const slowFunc = (num) => {
  for (let index = 0; index < 100000000; index++) {};
  return num ** 2;
}
const MemoHook = () => {
  const [num, setNum] = useState(0);
  const [isBlack, setIsBlack] = useState(true);

  const doubleNum = useMemo(() => slowFunc(num), [num]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: isBlack ? 'black' : 'white',
      color: isBlack ? 'white' : 'black',
    }
  }, [isBlack]);

  useEffect(() => {
    console.log('Theme changed...');
  }, [themeStyles]); // themeStyles е мемоизиран


  return (
    <div style={{ margin: 'auto auto', paddingBottom: '100px' }}>
      <h1>useMemo Hook Example:</h1>
        <input type="number" value={num} onChange={(ev) => setNum(+ev.target.value)} />
        <button onClick={() => setIsBlack((prevState) => !prevState)}>change theme</button>
        <div style={themeStyles}>{doubleNum}</div>
    </div>
  );
};

export default MemoHook;