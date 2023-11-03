import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 15, category: "Utilities" },
    { id: 3, description: "ccc", amount: 20, category: "Utilities" },
    { id: 4, description: "ddd", amount: 5, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
    <div className="mb-5">
      <ExpenseForm></ExpenseForm>
    </div>
      <ExpenseFilter
        onselectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
      <div className="mb-3"></div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </>
  );
};

export default App;
