import { useMemo } from "react";
import useExpanseStore from "../../../store/useExpenseStore";
import BreakdownByCategory from "./breakdownByCategory/BreakdownByCategory";
import "./statsPanel.css";

function StatsPanel() {
  const { expenses, budget } = useExpanseStore();

  const totalSpend = useMemo(() => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }, [expenses]);

  const budgetLeft = useMemo(() => {
    return budget - totalSpend;
  }, [budget, totalSpend]);

  return (
    <>
      <div className="statsPanel">
        {/* --Top Stats Card-- */}
        <div className="topStatsCard">
          <div className="statCard">
            <h4>Total Spent</h4>
            <span>{totalSpend}</span>
          </div>

          <div className="statCard">
            <h4>Budget Left</h4>
            <span>{budgetLeft}</span>
          </div>
        </div>

        {/* --Bottom Stat Card-- */}
        <div className="breakDownCategory">
          <h3 className="breakdownTitle">Breakdown By Category</h3>
          <BreakdownByCategory />
        </div>
      </div>
    </>
  );
}

export default StatsPanel;
