import { useState } from "react";
import useExpanseStore from "../../../store/useExpenseStore";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./expenseList.css";
import ExpenseSliderFilter from "./ExpenseSlider";

function ExpensesPanel({openForm}) {
  const { budget } = useExpanseStore();

  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(budget);

  const [selectedValue, setSelectedValue] = useState("All");

  return (
    <>
      <div className="expenseListPanel">
        <div className="expenseListHeader">
          <h4 className="expenseListTitle">Expenses</h4>
          <div className="expenseHeaderControls">
            <ExpenseSliderFilter
              setMaxAmount={setMaxAmount}
              setMinAmount={setMinAmount}
              minAmount={minAmount}
              maxAmount={maxAmount}
            />
            <ExpenseFilter setValue={setSelectedValue} />
          </div>
          <button onClick={openForm}>Add Expense</button>
        </div>

        <ExpenseList
          selectedValue={selectedValue}
          minAmount={minAmount}
          maxAmount={maxAmount}
        />
      </div>
    </>
  );
}

export default ExpensesPanel;
