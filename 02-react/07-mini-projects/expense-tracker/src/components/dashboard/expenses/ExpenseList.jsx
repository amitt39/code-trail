import { useMemo, useState } from "react";
import useExpanseStore from "../../../store/useExpenseStore";
import "./expenseList.css";

function ExpenseList({ selectedValue, minAmount, maxAmount }) {
  const { expenses } = useExpanseStore();
  const [sortOrder, setSortOrder] = useState("Default");

  const filteredValues = useMemo(() => {
    const filtered = expenses
      .filter((e) => e.amount >= minAmount && e.amount <= maxAmount)
      .filter((e) => selectedValue === "All" || e.category === selectedValue);

    if (sortOrder === "Low to High") {
      return [...filtered].sort((a, b) => a.amount - b.amount);
    } else if (sortOrder === "High to Low") {
      return [...filtered].sort((a, b) => b.amount - a.amount);
    } else {
      return filtered;
    }
  }, [minAmount, maxAmount, selectedValue, expenses, sortOrder]);

  const filteredList = filteredValues.map((e) => (
    <div key={e.id} className="expenseItem">
      <div className="expenseItemDetails">
        <h3 className="expenseItemTitle">{e.title}</h3>
        <p className="expenseItemCategory">{e.category}</p>
      </div>
      <p className="expenseItemAmount">₹{e.amount}</p>
    </div>
  ));

  function sortList() {
    if (sortOrder === "Default") {
      setSortOrder("Low to High");
    } else if (sortOrder === "Low to High") {
      setSortOrder("High to Low");
    } else {
      setSortOrder("Default");
    }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h5>Title</h5>
        </div>
        <div>
          <h5
            onClick={() => {
              sortList();
            }}
            style={{ cursor: "pointer" }}
          >
            Amount <span>{sortOrder}</span>
          </h5>
        </div>
      </div>
      <div className="expenseListWrapper">
        {filteredList.length === 0
          ? "No expenses found in given range"
          : filteredList}
      </div>
    </>
  );
}

export default ExpenseList;
