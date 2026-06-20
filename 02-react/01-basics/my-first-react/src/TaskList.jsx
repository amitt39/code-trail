import { useState } from "react";

function TaskList() {
  const [tasks, setTask] = useState([
    { id: 1, name: "Buy groceries" },
    { id: 2, name: "Do laundry" },
    { id: 3, name: "Study React" },
  ]);
  return (
    <>
      {tasks.map((task) => {
        return (
          <p key={task.id}>
            {task.name}
            <button
              onClick={() => {
                setTask((prev) =>
                  prev.filter((prevTask) => task.id !== prevTask.id),
                );
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </>
  );
}

export default TaskList;
