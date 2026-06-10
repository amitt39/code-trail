import { useReducer } from "react";

function reducer(count, action) {
  if (action.type === "increment") {
    return count + 1;
  }
  if (action.type === "decrement") {
    return count - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
}

function CounterUseReduce() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </>
  );
}
export default CounterUseReduce;
