import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addJob } from "@/store/jobsSlice";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  company: "",
  role: "",
  salary: "",
  status: "applied",
  notes: "",
  url: "",
  errors: {
    company: "",
    role: "",
    salary: "",
    url: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        errors: { ...state.errors, [action.payload.field]: "" },
      };

    case "RESET_FORM":
      return initialState;
    case "VALIDATE":
      return {
        ...state,
        errors: {
          ...state.errors,
          company: state.company === "" ? "Company is required" : "",
          role: state.role === "" ? "Role is required" : "",
          salary: state.salary === "" ? "Salary is required" : "",
          url: state.url === "" ? "URL is required" : "",
        },
      };
    default:
      return state;
  }
}

function AddJob() {
  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = (fieldName) => {
    return (e) => {
      dispatch({
        type: "UPDATE_FIELD",
        payload: { field: fieldName, value: e.target.value },
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE" });
    const hasErrors =
      !state.company || !state.role || !state.salary || !state.url;
    if (hasErrors) return;
    reduxDispatch(
      addJob({
        ...state,
        id: crypto.randomUUID(),
        appliedAt: new Date().toISOString(),
      }),
    );
    dispatch({ type: "RESET_FORM" });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Add Job Application</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Input
                onChange={handleChange("company")}
                value={state.company}
                type="text"
                placeholder="Company"
                className={state.errors.company ? "border-red-500" : ""}
              />
              {state.errors.company && (
                <p className="text-red-400 text-xs mt-1">
                  Company name is required.
                </p>
              )}
            </div>
            <div>
              <Input
                onChange={handleChange("role")}
                value={state.role}
                type="text"
                placeholder="Role"
                className={state.errors.role ? "border-red-500" : ""}
              />
              {state.errors.role && (
                <p className="text-red-400 text-xs mt-1">Role is required.</p>
              )}
            </div>
            <div>
              <Input
                onChange={handleChange("salary")}
                value={state.salary}
                type="text"
                placeholder="Salary"
                className={state.errors.salary ? "border-red-500" : ""}
              />
              {state.errors.salary && (
                <p className="text-red-400 text-xs mt-1">Salary is required.</p>
              )}
            </div>
            <Select
              value={state.status}
              onValueChange={(value) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: { field: "status", value },
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="interviewing">Interviewing</SelectItem>
                <SelectItem value="offered">Offered</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              onChange={handleChange("notes")}
              value={state.notes}
              placeholder="Notes"
            />
            <div>
              <Input
                onChange={handleChange("url")}
                value={state.url}
                type="url"
                placeholder="Job URL"
                className={state.errors.url ? "border-red-500" : ""}
              />
              {state.errors.url && (
                <p className="text-red-400 text-xs mt-1">URL is required.</p>
              )}
            </div>
            <Button type="submit">Add Application</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddJob;
