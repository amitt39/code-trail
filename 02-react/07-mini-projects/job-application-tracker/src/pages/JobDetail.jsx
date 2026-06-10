import PageHeader from "@/components/PageHeader/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { deleteJob, moveJob } from "@/store/jobsSlice";
import {
  ArrowLeft,
  CalendarDaysIcon,
  DollarSign,
  ExternalLink,
  StickyNote,
  Trash,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const statuses = ["applied", "interviewing", "offered", "rejected"];
const statusColors = {
  applied: "bg-blue-500/20 text-blue-400",
  interviewing: "bg-yellow-500/20 text-yellow-400",
  offered: "bg-green-500/20 text-green-400",
  rejected: "bg-red-500/20 text-red-400",
};

function JobDetail() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const params = useParams();
  const job = jobs.find((job) => job.id === params.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!job) {
    return <div>Job not found</div>;
  }

  const company = job.company.charAt(0).toUpperCase() + job.company.slice(1);
  const role = job.role.charAt(0).toUpperCase() + job.role.slice(1);
  const currentStatus = job.status;

  const otherStatuses = statuses.filter((status) => currentStatus !== status);

  const appliedDate = new Date(job.appliedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const firstLater = job.company.slice(0, 1).toUpperCase();
  let hostName = "";
  try {
    hostName = new URL(job.url).hostname;
  } catch (e) {
    void e;
  }

  return (
    <>
      <PageHeader>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex gap-2 items-center cursor-pointer "
        >
          <span>
            <ArrowLeft className="h-4 w-4 text-muted-foreground" />
          </span>
          <span className="font-thin text-sm text-foreground">
            Back to dashboard
          </span>
        </div>
      </PageHeader>

      <div className="flex flex-col gap-4 max-w-xl mx-auto mt-8 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {!hostName ? (
              <div className="h-10 w-10 rounded-full bg-muted flex justify-center items-center">
                <span className="text-2xl">{firstLater}</span>
              </div>
            ) : (
              <img
                src={`https://www.google.com/s2/favicons?domain=${hostName}&sz=64`}
                className="h-10 w-10 rounded-full"
              />
            )}

            <div className="flex flex-col">
              <span className="text-2xl font-medium">{company}</span>
              <span className="text-base text-muted-foreground">{role}</span>
            </div>
          </div>
          <div className="w-40">
            <Select
              onValueChange={(value) => {
                dispatch(moveJob({ id: job.id, status: value }));
              }}
            >
              <SelectTrigger className="w-40 py-4 ">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[currentStatus]}`}
                >
                  {currentStatus}
                </span>
              </SelectTrigger>
              <SelectContent position="popper" className="w-40 p-1.5">
                {otherStatuses.map((status) => (
                  <SelectItem
                    key={status}
                    value={status}
                    className="py-1.5 rounded-sm mb-0.5"
                  >
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[status]}`}
                    >
                      {status}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Date + Salary row */}
        <div className="flex gap-4">
          <div className="flex-1 border rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <CalendarDaysIcon className="text-muted-foreground h-3 w-3" />
              <span className="text-xs font-normal text-muted-foreground ">
                Applied
              </span>
            </div>
            <span className="text-sm font-normal">{appliedDate}</span>
          </div>
          <div className="flex-1 border rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <DollarSign className="text-muted-foreground h-3 w-3" />
              <span className="text-xs font-normal text-muted-foreground ">
                Salary
              </span>
            </div>
            <span className="text-sm font-normal">{job.salary}</span>
          </div>
        </div>

        {/* URL */}
        <div
          onClick={() => {
            window.open(job.url, "_blank");
          }}
          className="border border-blue-900 rounded-lg p-4 flex items-center gap-2 bg-blue-500/6 text-blue-400 hover:text-blue-300 cursor-pointer"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="text-sm font-normal">{job.url}</span>
        </div>

        {/* Notes */}
        <div className="border rounded-lg p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <StickyNote className="h-3 w-3" />
            <span className="text-xs font-normal text-muted-foreground ">
              Note
            </span>
          </div>
          <span className="text-sm font-normal">{job.notes}</span>
        </div>

        {/* Delete */}
        <div className="border-t pt-4 flex justify-end">
          {/* destructive Button with Trash2 icon + "Delete Application" */}
          <Button
            onClick={() => {
              dispatch(deleteJob(job.id));
              navigate("/");
            }}
            className="flex items-center justify-center bg-red-900 hover:text-red-100 text-white text-sm py-4 px-2 hover:bg-red-950"
          >
            <Trash />
            Delete Application
          </Button>
        </div>
      </div>
    </>
  );
}

export default JobDetail;
