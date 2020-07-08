import { v4 as uuidv4 } from "uuid";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // No action on empty field
      if (!action.payload) {
        return state;
      }
      // No action on repeat todo
      if (state.todos.findIndex((t) => t.text === action.payload) !== -1) {
        return state;
      }
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false,
      };
      const addedTodo = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodo,
      };
    case "UPDATE_TODO":
      // No action on empty field
      if (!action.payload) {
        return state;
      }
      // No action on repeat todo
      if (state.todos.findIndex((t) => t.text === action.payload) !== -1) {
        return state;
      }
      // Load todo for edit into current todo state
      const updatedTodo = {
        ...state.currentTodo,
        text: action.payload,
      };

      const updatedTodoIndex = state.todos.findIndex(
        (t) => t.id === state.currentTodo.id
      );
      // Insert todo back into original slot in list.
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1),
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos,
      };

    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return {
        ...state,
        todos: toggledTodos,
      };

    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload,
      };

    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(
        (t) => t.id !== action.payload.id
      );
      // handles a todo being deleted from input field while in edit
      const isDeletedTodo =
        state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
      return {
        ...state,
        currentTodo: isDeletedTodo,
        todos: filteredTodos,
      };

    default:
      return state;
  }
}
