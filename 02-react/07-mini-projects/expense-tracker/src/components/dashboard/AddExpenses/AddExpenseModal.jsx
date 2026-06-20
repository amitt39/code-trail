import { useRef, useState } from "react";
import "./AddExpense.css";

function AddExpenseModal({ onClose, onAdd }) {
  const expenseTitleRef = useRef();
  const expenseCategoryRef = useRef();
  const expenseAmountRef = useRef();

  const [errors, setErrors] = useState({});

  function validate(title, category, amount) {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Expense name is required";
    } else if (title.trim().length < 2) {
      newErrors.title = "Name must be at least 2 characters";
    }

    if (!amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Enter a valid amount greater than 0";
    } else if (Number(amount) > 100000) {
      newErrors.amount = "Amount seems too high";
    }

    return newErrors;
  }

  function handleSubmit() {
    const title = expenseTitleRef.current.value;
    const category = expenseCategoryRef.current.value;
    const amount = expenseAmountRef.current.value;

    const newErrors = validate(title, category, amount);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({
      id: Date.now(),
      title: title.trim(),
      category,
      amount: Number(amount),
    });

    expenseTitleRef.current.value = "";
    expenseCategoryRef.current.value = "Food";
    expenseAmountRef.current.value = "";
    setErrors({});
    onClose();
  }

  function clearError(field) {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <>
      <div className="modalOverlay" onClick={onClose} />

      <div className="modalPanel">
        <div className="modalHeader">
          <h3 className="modalTitle">Add New Expense</h3>
          <p className="modalSubtitle">Track where your money goes</p>
        </div>

        <div className="inputGroup">
          <input
            ref={expenseTitleRef}
            className={`modalInput ${errors.title ? "inputError" : ""}`}
            type="text"
            placeholder="Expense name"
            onChange={() => clearError("title")}
          />
          {errors.title && <p className="errorMsg">{errors.title}</p>}
        </div>

        <div className="inputGroup">
          <select
            ref={expenseCategoryRef}
            className={`modalSelect ${errors.category ? "inputError" : ""}`}
            onChange={() => clearError("category")}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
          </select>
          {errors.category && <p className="errorMsg">{errors.category}</p>}
        </div>

        <div className="inputGroup">
          <input
            ref={expenseAmountRef}
            className={`modalInput ${errors.amount ? "inputError" : ""}`}
            type="number"
            placeholder="Amount (₹)"
            onChange={() => clearError("amount")}
          />
          {errors.amount && <p className="errorMsg">{errors.amount}</p>}
        </div>

        <button className="modalBtnAdd" onClick={handleSubmit}>
          Add
        </button>
        <button className="modalBtnCancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default AddExpenseModal;
