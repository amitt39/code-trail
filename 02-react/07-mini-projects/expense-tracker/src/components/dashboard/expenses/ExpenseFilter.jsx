import "./expenseList.css";

function ExpenseFilter({ setValue }) {
  return (
    <>
      <div>
        <select
          onChange={(e) => {
            setValue(e.target.value);
          }}
          name="filter"
          id=""
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
        </select>
      </div>
    </>
  );
}

export default ExpenseFilter;
