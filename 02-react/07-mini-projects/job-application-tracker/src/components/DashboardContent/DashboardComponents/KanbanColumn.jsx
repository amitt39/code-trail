import JobCard from "./JobCard";
import KanbanColumnHeader from "./KanbanColumnHeader";

function KanbanColumn({ columnJobs, column }) {
  return (
    <>
      <div className="flex flex-col h-full , min-w-[280px] gap-2">
        <KanbanColumnHeader columnJobs={columnJobs} column={column} />
        <div
          key={column}
          className="flex flex-col gap-3  border  border-muted h-full rounded-lg p-2 min-w-[260px]"
        >
          {columnJobs.length === 0 ? (
            <span className="bg-card border border-dotted rounded-md p-3 shadow-sm  text-xs h-15 text-center text-muted-foreground place-content-center bg-neutral-950">
              No Application Found
            </span>
          ) : (
            columnJobs.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default KanbanColumn;
