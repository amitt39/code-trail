// input + add button

import { useRef } from "react";

function TodoInput({ dispatch }) {
  const inputRef = useRef();
  console.log("dispatch" + dispatch);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name=""
        id=""
        placeholder="Enter Task"
      />
      <button
        onClick={() => {
          dispatch({ type: "add-todo", text: inputRef.current.value });
        }}
      >
        Add Task
      </button>
    </>
  );
}

export default TodoInput;
