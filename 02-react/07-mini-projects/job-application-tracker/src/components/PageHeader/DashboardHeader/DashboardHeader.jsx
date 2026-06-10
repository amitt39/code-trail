import ApplicationCount from "./DashboardHeaderPages/ApplicationCount";
import FilterByStatus from "./DashboardHeaderPages/FilterByStatus";
import PageHeaderSearchbar from "./DashboardHeaderPages/PageHeaderSearchbar";

function DashboardHeader() {
  return (
    <>
      <div className=" w-full flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <PageHeaderSearchbar />
          <FilterByStatus />
        </div>
        <ApplicationCount />
      </div>
    </>
  );
}

export default DashboardHeader;
