import { useReducer, useState } from "react";

const CounterByReducer = () => {
  const intialState = {
    counter: 0,
  };

  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return { counter: state.counter + 1 };
      case "DECREMENT":
        return { counter: state.counter - 1 };
      case "RESET":
        return { counter: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Counter By Reducer: {state.counter}</h1>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
      <button onClick={() => dispatch("RESET")}>RESET</button>
    </div>
  );
};

export default CounterByReducer;
