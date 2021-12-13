import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");
  const SelectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const FilteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  let expensesContent = <p>No Expenses Found.</p>;

  if (FilteredExpenses.length > 0) {
    expensesContent = FilteredExpenses.map((expense, key) => {
      return <ExpenseItem expenseData={expense} key={expense.id} />;
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={FilteredYear}
        onSelectedYear={SelectedYearHandler}
      />
      <ExpensesChart expenses={FilteredExpenses} />
      {expensesContent}
    </Card>
  );
};
export default Expenses;
