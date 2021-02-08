import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

const FirstText = () => {
  const { color, setColor } = useContext(ColorContext);

  return (
    <p onClick={() => setColor("green")} style={{ color }}>
      green
    </p>
  );
};

const SecondText = () => {
  const { setColor } = useContext(ColorContext);

  return (
    <ColorContext.Consumer>
      {({ color, newColor }) => (
        <p
          onClick={() => {
            setColor("blue");
          }}
          style={{ color }}
        >
          blue
        </p>
      )}
    </ColorContext.Consumer>
  );
};

const ContextHook2 = () => {
  const [color, setColor] = useState("red");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <div>
        <div>
          <FirstText />
        </div>
        <SecondText />
      </div>
    </ColorContext.Provider>
  );
};

export default ContextHook2;
