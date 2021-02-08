import { useState, useEffect, useMemo, useCallback } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Items changed...");
  }, [getItems]); // themeStyles е мемоизиран

  return items.map((i) => <div key={i}>{i}</div>);
};

const CallbackHook = () => {
  const [num, setNum] = useState(0);
  const [isBlack, setIsBlack] = useState(true);

  const getItems = useCallback((incrementor) => [num + incrementor, num + 1 + incrementor, num + 2 + incrementor], [num]); // без useCallback функцията ще се създава наново и List ще получава нова референция след всяко рендериране на parent-компонента

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: isBlack ? "black" : "white",
      color: isBlack ? "white" : "black",
    };
  }, [isBlack]);

  return (
    <div style={{ margin: "auto auto", paddingBottom: "100px" }}>
      <h1>useCallback Hook Example:</h1>
      <div style={themeStyles}>
        <input
          type="number"
          value={num}
          onChange={(ev) => setNum(+ev.target.value)}
        />
        <button onClick={() => setIsBlack((prevState) => !prevState)}>
          change theme
        </button>
        <List getItems={getItems} />
      </div>
    </div>
  );
};

export default CallbackHook;
