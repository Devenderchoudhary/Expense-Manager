import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-item__description">
        <h2>{props.expenseData.title}</h2>
        <h2 className="expense-item__price">${props.expenseData.amount}</h2>
      </div>
    </Card>
  );
};
export default ExpenseItem;
