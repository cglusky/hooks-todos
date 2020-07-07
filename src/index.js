import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ToDosContext from "./context";
import todosReducer from "./reducer";
import ToDoList from "./components/ToDoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const initialState = useContext(ToDosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <ToDoList />
    </ToDosContext.Provider>

    //
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
