const statusColors = {
  applied: "blue-400",
  interviewing: "yellow-400",
  offered: "green-400",
  rejected: "red-400",
};

function KanbanColumnHeader({ column, columnJobs }) {
  return (
    <>
      <div className="flex items-center justify-between mb-1 px-1">
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full bg-${statusColors[column]}`}
          ></div>
          <span
            className={`text-xs font-medium capitalize text-${statusColors[column]}`}
          >
            {column.toUpperCase()}
          </span>
        </div>
        <span className="text-xs rounded-full bg-muted h-4 w-4 flex justify-center items-center text-muted-foreground">
          {columnJobs.length}
        </span>
      </div>
    </>
  );
}

export default KanbanColumnHeader;
