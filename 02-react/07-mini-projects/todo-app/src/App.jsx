// main, holds useReducer

import { useReducer, useState } from "react";
import "./App.css";
import FilterBar from "./FilterBar";
import "./index.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function reducer(state, action) {
  if (action.type === "add-todo") {
    return [...state, { id: Date.now(), text: action.text, completed: false }];
  }

  if (action.type === "delete-todo") {
    return state.filter((todo) => todo.id !== action.id);
  }

  if (action.type === "complete-todo") {
    return state.map((todo) =>
      todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
    );
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [filter, setFilter] = useState("All");
  let filteredTodo = state;
  if (filter === "All") {
    filteredTodo = state.map((todo) => todo);
  } else if (filter === "Active") {
    filteredTodo = state.filter((todo) => !todo.completed);
  } else if (filter === "Completed") {
    filteredTodo = state.filter((todo) => todo.completed);
  }
  return (
    <>
      <FilterBar setFilter={setFilter} />
      <TodoList todos={filteredTodo} dispatch={dispatch} />
      <TodoInput dispatch={dispatch} />
    </>
  );
}

export default App;
