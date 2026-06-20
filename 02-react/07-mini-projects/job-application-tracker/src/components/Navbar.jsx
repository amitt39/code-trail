import {
  BarChart2,
  Briefcase,
  LayoutDashboard,
  PlusCircle,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const links = [
  { to: "/", label: "Board", icon: LayoutDashboard },
  { to: "/stats", label: "Stats", icon: BarChart2 },
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="border-b px-6 py-3 flex items-center justify-between gap-6">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2 mr-4">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold text-base text-foreground">
              JobTracker
            </span>
          </div>
          <div className="flex gap-1">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-foreground text-foreground bg-muted px-3 py-1.5 rounded-md"
                    : "text-sm font-normal text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-1.5 rounded-md transition-colors"
                }
              >
                <div className="flex items-center gap-1">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="ml-auto">
          <Button
            size="lg"
            onClick={() => {
              navigate("/add");
            }}
            className="gap-1.5 cursor-pointer"
          >
            <PlusCircle className="h-3.5 w-3.5" />{" "}
            <span className="text-sm">Add Application</span>
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
