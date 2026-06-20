import { useDashboardContext } from "@/contexts/DashboardContext";
import { Funnel } from "lucide-react";

const columns = ["applied", "interviewing", "offered", "rejected"];

function FilterByStatus() {
  const { selectedStatus, setSelectedStatus } = useDashboardContext();
  return (
    <>
      <div className="flex items-center text-xs text-muted-foreground gap-6">
        <Funnel className="h-4 w-4" />
        <div className="flex gap-6">
          {columns.map((column) => (
            <span
              onClick={() => {
                setSelectedStatus((prev) => {
                  return prev === column ? null : column;
                });
              }}
              key={column}
              className={`cursor-pointer rounded-full py-1 px-2 ${selectedStatus === column ? "bg-muted" : "hover:bg-muted"} transition ease`}
            >
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </span>
          ))}
          {selectedStatus !== null && (
            <span
              onClick={() => {
                setSelectedStatus(null);
              }}
              className="cursor-pointer rounded-full py-1 px-2 bg-red-800/30 border border-red-600/50 text-white transition ease"
            >
              Clear
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default FilterByStatus;
