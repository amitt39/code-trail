import { useMemo } from "react";
import { useSelector } from "react-redux";


function useFilters(searchQuery, selectedStatus) {

  const jobs = useSelector((state) => state.jobs.jobs);

  const filteredJobs = useMemo(() => {

    return jobs.filter(job => job.company.toLowerCase().includes(searchQuery.toLowerCase()) || job.role.toLowerCase().includes(searchQuery.toLowerCase())).filter((job) => selectedStatus ? job.status === selectedStatus : true)
  }, [searchQuery, selectedStatus, jobs])

  return filteredJobs

}
export default useFilters
