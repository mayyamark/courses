import { createContext, useContext, useReducer } from "react";

const ColorContext = createContext();

const FirstText = () => {
  const { style, dispatch } = useContext(ColorContext);
  return (
    <p onClick={() => { dispatch({ type: 'setStyles', payload: { color: 'green', fontSize: '24px' } }); }}
      style={style}>green
    </p>
  );
}

const SecondText = () => {
  return (
  <ColorContext.Consumer>
    {({ style, dispatch }) => <p onClick={() => { dispatch({ type: 'setStyles', payload: { color: 'blue', fontSize: '36px' } }); }}
      style={style}>blue</p>}
  </ColorContext.Consumer> );
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setColor':
      return { ...state, color: payload };
    case 'setFontSize':
      return { ...state, fontSize: payload };
    case 'setStyles':
      return { ...state, ...payload };
    default:
      return state;
  }
}

const ReducerContextHooks = () => {
  const [style, dispatch] = useReducer(reducer, { color: 'red', fontSize: '12px' });

  return (
    <ColorContext.Provider value={{ style, dispatch }}>
      <div>
        <div>
          <FirstText />
        </div>
        <SecondText />
      </div>
    </ColorContext.Provider>
  );
}

export default ReducerContextHooks;