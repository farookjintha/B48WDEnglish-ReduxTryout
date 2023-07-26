import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/actions/counter.actions";

const CounterByRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter); //Consuming the data from store

  // useDispatch - to trigger the action
  // useSelector - select the data from store
  return (
    <div>
      <h1>Counter By Redux: {counter}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
};

export default CounterByRedux;

// Redux -> Context API and Reducer

// CONTEXT API
// 1. Create the context
// 2. Provide the context
// 3. Consume the context

// REDUX
// 1. Create the store (redux)
// 2. Providing the store (redux)
// 3. Consuming the store (redux)

// REDUCER;
// 1. Initial State
// 2. Reducer
// 3. Action
// 4. Dispatch

// REDUX
// 1. InitialState
// 2. Reducer
// 3. Action
// 4. Dispatch
