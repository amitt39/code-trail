import { useMemo } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import useExpanseStore from "../../../store/useExpenseStore";

const categories = ["Food", "Travel", "Entertainment", "Health", "Shopping"];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];

function ChartPanel() {
  const { expenses } = useExpanseStore();

  const categoryTotal = useMemo(() => {
    return categories.map((category) => ({
      name: category,
      value: expenses
        .filter((e) => {
          return e.category === category;
        })
        .reduce((total, e) => total + e.amount, 0),
    }));
  }, [expenses]);

  return (
    <div className="chartPanel">
      <ResponsiveContainer width="100%" height="350">
        <PieChart>
          <Pie data={categoryTotal} dataKey="value" nameKey="name">
            {categoryTotal.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: "16px" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPanel;
