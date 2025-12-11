import { useState } from "react";

export const MyCounterApp = () => {
  const [counter, setCounter] = useState(5);

  const handleCounterAdition = () => setCounter(counter + 1);
  const handleCounterSubstract = () => setCounter(counter - 1);
  const handleCounterReset = () => setCounter(5);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter: {counter}</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
        <button onClick={handleCounterAdition}>+1</button>
        <button onClick={handleCounterSubstract}>-1</button>
        <button onClick={handleCounterReset}>Reset</button>
      </div>
    </div>
  );
};
