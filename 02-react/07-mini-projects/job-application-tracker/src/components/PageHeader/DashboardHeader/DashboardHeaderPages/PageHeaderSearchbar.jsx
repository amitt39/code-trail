import { Input } from "@/components/ui/input";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { Search } from "lucide-react";

function PageHeaderSearchbar() {
  const { searchQuery, setSearchQuery } = useDashboardContext();
  return (
    <>
      <div className="relative">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
          className="pl-7"
          placeholder="Search company or role..."
        />
      </div>
    </>
  );
}

export default PageHeaderSearchbar;
