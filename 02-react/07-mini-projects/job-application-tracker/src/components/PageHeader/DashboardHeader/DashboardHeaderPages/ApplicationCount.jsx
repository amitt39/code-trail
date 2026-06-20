import { useDashboardContext } from "@/contexts/DashboardContext";
import useFilters from "@/hooks/useFilters";

function ApplicationCount() {
  const { searchQuery, selectedStatus } = useDashboardContext();
  const filteredJob = useFilters(searchQuery, selectedStatus);

  return (
    <>
      <span className="text-muted-foreground text-xs">
        {filteredJob.length} Application
      </span>
    </>
  );
}

export default ApplicationCount;
