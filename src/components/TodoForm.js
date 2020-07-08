import React, { useState, useContext, useEffect } from "react";
//import TodosContext from "../context";
import { TodosStateContext, TodosDispatchContext } from "../context";

export default function TodoForm() {
  // This form uses same input field for add and edit
  // State is tracked closely to determine action based on add/update
  const [todo, setTodo] = useState("");
  const state = useContext(TodosStateContext);
  const dispatch = useContext(TodosDispatchContext);

  useEffect(() => {
    console.log(state.currentTodo.text);
    if (state.currentTodo.text) {
      setTodo(state.currentTodo.text);
    } else {
      setTodo("");
    }
  }, [state.currentTodo.text]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        className="border-black border-solid border-2 rounded p-1"
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
        placeholder="Enter new todo..."
      />
    </form>
  );
}
