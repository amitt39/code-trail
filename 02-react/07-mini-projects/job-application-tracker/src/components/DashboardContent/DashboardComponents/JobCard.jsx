import { CalendarDaysIcon, DollarSign, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const statusStyles = {
  applied: "text-blue-400 border-blue-400 bg-blue-950",
  interviewing: "text-yellow-400 border-yellow-400 bg-yellow-950",
  offered: "text-green-400 border-green-400 bg-green-950",
  rejected: "text-red-400 border-red-400 bg-red-950",
};

function JobCard({ job }) {
  const appliedDate = new Date(job.appliedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <>
      <div className=" border border-muted rounded-md p-2">
        <Link to={`/job/${job.id}`}>
          <div className=" cursor-grab flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-8 w-8"
                  src={`https://www.google.com/s2/favicons?domain=${new URL(job.url).hostname}&sz=64`}
                  alt="Company Logo"
                />
                <div className="flex flex-col">
                  <span>{job.company}</span>
                  <span className="text-xs text-muted-foreground">
                    {job.role}
                  </span>
                </div>
              </div>
              <ExternalLink className=" cursor-pointer h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-1">
                  <span
                    className={`text-xs px-3 py-1 ${statusStyles[job.status]} border rounded-full ${statusStyles[job.status]} capitalize`}
                  >
                    {job.status}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="text-muted-foreground h-3 w-3" />
                  <span className="text-xs font-normal text-muted-foreground ">
                    {job.salary / 1000}k
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDaysIcon className="text-muted-foreground h-3 w-3" />
                <span className="text-xs font-normal text-muted-foreground ">
                  {appliedDate}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default JobCard;
