import { useRef } from "react";

export default function AddTaskModal({ categories, onAdd }) {
  console.log(categories);
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name="title"
        id=""
        placeholder="Enter Title"
      />
      <select ref={selectRef} name="category" id="">
        <option disabled value="">
          --Choose Category--
        </option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          const title = inputRef.current.value;
          const category = selectRef.current.value;
          const id = Date.now();
          onAdd({ id, title, category, isComplete: false });
          inputRef.current.value = "";
          selectRef.current.value = "";
        }}
      >
        Add
      </button>
    </>
  );
}
