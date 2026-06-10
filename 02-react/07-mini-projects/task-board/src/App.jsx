import { useEffect, useState } from "react";
import AddTaskModal from "./Components/AddTaskModal/AddTaskModal";
import FilterDropdown from "./Components/FilterDropdown/FilterDropdown";
import TaskList from "./Components/TaskList/TaskList";

const CATEGORIES = ["work", "personal", "shopping"];
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  }

  function handleDeleteTask(id) {
    const afterDelete = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDelete);
  }

  function handleCheckbox(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      }),
    );
  }

  function handleFilter(category) {
    setSelectedCategory(category);
  }

  const filteredTask =
    selectedCategory === "all"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("loaded from localStorage:", saved);
    setTasks(saved);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <>
      <h1>Task Board</h1>

      <FilterDropdown categories={CATEGORIES} onFilter={handleFilter} />

      {tasks.length === 0 ? (
        "No Tasks Added Yet!"
      ) : filteredTask.length === 0 ? (
        `No task found for catgory ${selectedCategory}`
      ) : (
        <TaskList
          tasks={filteredTask}
          onDelete={handleDeleteTask}
          onCheckmark={handleCheckbox}
        />
      )}

      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Add Task
      </button>
      {isModalOpen ? (
        <AddTaskModal onAdd={handleAddTask} categories={CATEGORIES} />
      ) : null}
    </>
  );
};

export default App;
