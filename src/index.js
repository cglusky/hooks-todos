import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { TodosStateContext, TodosDispatchContext } from "./context";
import todosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  // Read default context for initial state
  const initialState = useContext(TodosStateContext);
  // Pass initial state to reducer for first render
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    // Wrap all components that need to subscribe to todos context
    // All subscribers/consumers will read current context on render
    // All subscribers/consumers will rerender on value change

    <TodosStateContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        <TodoForm />
        <TodoList />
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>

    //
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
