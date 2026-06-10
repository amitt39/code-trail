import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddJob from "./pages/AddJob";
import Dashboard from "./pages/Dashboard";
import JobDetail from "./pages/JobDetail";
import Stats from "./pages/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddJob />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
}

export default App;
