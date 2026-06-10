import { useMemo } from "react";
import useExpanseStore from "../../../../store/useExpenseStore";
import CategoryCard from "./CategoryCard";

const categories = ["Food", "Travel", "Entertainment", "Health", "Shopping"];

function BreakdownByCategory() {
  const { expenses } = useExpanseStore();

  const categoryTotal = useMemo(() => {
    return categories.map((category) => ({
      category,
      total: expenses
        .filter((e) => {
          return e.category === category;
        })
        .reduce((total, e) => total + e.amount, 0),
    }));
  }, [expenses]);

  return (
    <div className="categoryTotalCard">
      {categoryTotal.map((c) => (
        <CategoryCard key={c.category} categoryTotal={c} />
      ))}
    </div>
  );
}

export default BreakdownByCategory;
