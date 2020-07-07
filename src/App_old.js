import React, { useContext, useReducer } from "react";
import { UserContext } from "./index";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return initialState;
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const username = useContext(UserContext);

  return (
    //
    <div>
      <h4>Hello {username}</h4>
      <button
        className="border p-1 rounded"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="border p-1 rounded"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <button
        className="border p-1 rounded"
        onClick={() => dispatch({ type: "RESET" })}
      >
        RESET
      </button>
      <p>Count: {state.count}</p>
    </div>
  );
}
