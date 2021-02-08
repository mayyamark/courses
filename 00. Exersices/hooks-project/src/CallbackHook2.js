import { useState, useCallback } from "react";

const CallbackHook2 = () => {
  const [num, setNum] = useState(0);
  const memoizedNumPowered = useCallback(() => num ** num, [num]);

  return (
    <p onClick={() => setNum(num + 1)}>
      {num}-{memoizedNumPowered()}
    </p>
  );
};

export default CallbackHook2;
