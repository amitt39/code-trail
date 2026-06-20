import { useDashboardContext } from "@/contexts/DashboardContext";
import useFilters from "@/hooks/useFilters";
import KanbanColumn from "./KanbanColumn";

const columns = ["applied", "interviewing", "offered", "rejected"];

function DashboardColumns() {
  const { searchQuery, selectedStatus } = useDashboardContext();
  const filteredJobs = useFilters(searchQuery, selectedStatus);
  return (
    <>
      {columns.map((column) => {
        const columnJobs = filteredJobs.filter((job) => job.status === column);

        return (
          <KanbanColumn key={column} columnJobs={columnJobs} column={column} />
        );
      })}
    </>
  );
}

export default DashboardColumns;
