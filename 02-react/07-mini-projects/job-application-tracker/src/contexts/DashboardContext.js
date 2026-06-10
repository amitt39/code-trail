import { createContext, useContext } from "react";

const DashboardContext = createContext()

export function useDashboardContext() {
  const context = useContext(DashboardContext)
  if (!context) throw new Error("useDashboardContext must be used inside DashboardProvider")
  return context
}

export default DashboardContext
