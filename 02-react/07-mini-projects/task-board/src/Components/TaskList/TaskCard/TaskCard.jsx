export default function TaskCard({ task, onDelete, onCheckmark }) {
  return (
    <>
      <input
        onChange={() => {
          onCheckmark(task.id);
        }}
        type="checkbox"
        name="checkbox"
        id=""
      />
      <h1 style={{ textDecoration: task.isComplete ? "line-through" : "none" }}>
        {task.title}
      </h1>
      <h2>{task.category}</h2>
      <button
        onClick={() => {
          onDelete(task.id);
        }}
      >
        Del
      </button>
    </>
  );
}
