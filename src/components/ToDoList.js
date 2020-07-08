import React, { useContext } from "react";
import ToDosContext from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(ToDosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do!";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="font-bold text-lg mt-10 bg-blue-300 rounded p-2">
        {title}
      </h1>
      <ul className="">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center cursor-pointer border shadow-sm rounded p-1 m-1 bg-orange-300"
            onDoubleClick={() =>
              dispatch({ type: "TOGGLE_TODO", payload: todo })
            }
          >
            <span
              className={`flex-1 ml-12 ${
                todo.complete && "line-through text-gray-600"
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "SET_CURRENT_TODO", payload: todo })
              }
              className="border rounded p-2 m-1"
            >
              <img src="https://icon.now.sh/edit/" alt="edit" />
            </button>
            <button
              className="border rounded p-2 m-1"
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo })}
            >
              <img src="https://icon.now.sh/delete/" alt="delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
