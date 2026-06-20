// renders list of todos
import TodoItem from "./TodoItem";
function TodoList({ todos, dispatch }) {
  console.log(todos.text);

  return (
    <>
      {todos.map((todo) => {
        return <TodoItem key={todos.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default TodoList;
