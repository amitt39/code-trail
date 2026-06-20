import DashboardContent from "@/components/DashboardContent/DashboardContent";
import DashboardHeader from "@/components/PageHeader/DashboardHeader/DashboardHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import DashboardHeaderContext from "@/contexts/DashboardContext";
import { useState } from "react";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(null);

  return (
    <>
      <DashboardHeaderContext.Provider
        value={{
          setSearchQuery,
          searchQuery,
          selectedStatus,
          setSelectedStatus,
        }}
      >
        <PageHeader>
          <DashboardHeader />
        </PageHeader>
        <DashboardContent />
      </DashboardHeaderContext.Provider>
    </>
  );
}

export default Dashboard;
