import TaskCard from "./TaskCard/TaskCard";

export default function TaskList({ tasks, onDelete, onCheckmark }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onCheckmark={onCheckmark}
          />
        );
      })}
    </>
  );
}
