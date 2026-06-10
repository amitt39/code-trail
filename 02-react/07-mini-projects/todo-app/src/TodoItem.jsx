// single todo, complete + delete

function TodoItem({ todo, dispatch }) {
  return (
    <p>
      <input
        type="checkbox"
        onChange={() => {
          dispatch({ type: "complete-todo", id: todo.id });
        }}
        checked={todo.completed}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}{" "}
      </span>
      <button onClick={() => dispatch({ type: "delete-todo", id: todo.id })}>
        del
      </button>
    </p>
  );
}

export default TodoItem;
