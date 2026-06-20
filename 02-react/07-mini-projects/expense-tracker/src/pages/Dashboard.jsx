import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddExpenseModal from "../components/dashboard/AddExpenses/AddExpenseModal";
import ChartPanel from "../components/dashboard/charts/ChartPanel";
import ExpensesPanel from "../components/dashboard/expenses/ExpensesPanel";
import StatsPanel from "../components/dashboard/statsPanel/StatsPanel";
import useStore from "../store/useAuthStore";
import useExpanseStore from "../store/useExpenseStore";
import "./dashboard.css";

function Dashboard() {
  const { addExpense } = useExpanseStore();
  const { logout } = useStore();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openForm = () => {
    setIsModalOpen(true);
  };

  const onAdd = (id, title, category, amount) => {
    addExpense(id, title, amount, category);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <AddExpenseModal onClose={onClose} onAdd={onAdd} />}
      <div>
        {/* ---Topbar--- */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Dashboard</h1>
          <button
            onClick={() => {
              (logout(), navigate("/login"));
            }}
          >
            Logout
          </button>
        </div>
        <div className="dashboardContainer">
          <div className="topSection">
            <StatsPanel />
            <ChartPanel />
          </div>
          <div className="bottomSection">
            <ExpensesPanel openForm={openForm} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
