import React from "react";

// Context does NOT need to be global
// We make todos available to all components that subscribe
// E.g. TodoForm and TodoList are wrapped in this context provider in index.js
export const TodosStateContext = React.createContext({
  todos: [
    { id: 1, text: "Eat breakfast", complete: false },
    { id: 2, text: "Do laundry", complete: false },
    { id: 3, text: "Write code", complete: true },
  ],
  currentTodo: {},
});

export const TodosDispatchContext = React.createContext();

export default TodosStateContext;
