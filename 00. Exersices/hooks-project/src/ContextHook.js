import { useContext, createContext } from "react";

const moods = { happy: ":)", sad: ":(" };

const MoodContext = createContext(moods);
MoodContext.displayName = 'Mayya';

const Emoji1 = () => {
  const mood = useContext(MoodContext);

  return <p>Emoji1: {mood}</p>;
};

const Emoji2 = () => {
  return (
    <MoodContext.Consumer>
      {(mood) => <p>Emoji2: {mood}</p>}
    </MoodContext.Consumer>
  );
};

const ContextHook = () => {
  return (
    <MoodContext.Provider value={moods.happy}>
      <div style={{ margin: "auto auto", paddingBottom: "100px" }}>
        <h1>useContext Hook Example:</h1>
        <Emoji1 />
        <Emoji2 />
      </div>
    </MoodContext.Provider>
  );
};

export default ContextHook;
