import { create } from "zustand";

const dummyExpenses = [
  { id: 1, title: "Groceries", amount: 1200, category: "Food" },
  { id: 2, title: "Uber", amount: 350, category: "Travel" },
  { id: 3, title: "Netflix", amount: 499, category: "Entertainment" },
  { id: 4, title: "Medicines", amount: 800, category: "Health" },
  { id: 5, title: "Shoes", amount: 2500, category: "Shopping" },
]

const useExpanseStore = create((set) => ({
  expenses: dummyExpenses,
  budget: 10000,
  addExpense:
    (expense) => set(
      (state) => (
        { expenses: [...state.expenses, expense] }
      )),
})
)
export default useExpanseStore;
