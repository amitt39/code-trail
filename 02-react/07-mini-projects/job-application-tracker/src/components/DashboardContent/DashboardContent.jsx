import DashboardColumns from "./DashboardComponents/DashboardColumns";

function DashboardContent() {
  return (
    <>
      <div className="flex px-6 py-8 gap-4 overflow-x-auto h-[calc(100vh-105px)]">
        <DashboardColumns />
      </div>
    </>
  );
}

export default DashboardContent;
