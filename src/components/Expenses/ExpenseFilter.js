import React from "react";
import "./ExpenseFilter.css";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const YearSelectedHandler = (event) => {
    const selectedYear = event.target.value;
    props.onSelectedYear(selectedYear);
  };
  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By:</label>
        <select value={props.selected} onChange={YearSelectedHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </Card>
  );
};
export default ExpenseFilter;
