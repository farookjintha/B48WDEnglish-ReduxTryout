import Counter from "./components/Counter";
import "./App.css";
import CounterByReducer from "./components/CounterByReducer";
import { Provider } from "react-redux";
import store from "./store";
import CounterByRedux from "./components/CounterByRedux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React-Redux Tryout</h1>
        <Counter />
        <CounterByReducer />
        <CounterByRedux />
      </div>
    </Provider>
  );
}

export default App;
