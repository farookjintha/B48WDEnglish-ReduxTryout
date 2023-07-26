import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
      <button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
      <button onClick={() => setCounter(0)}>RESET</button>
    </div>
  );
};

export default Counter;
