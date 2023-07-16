import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={new Date()}
            title={expense.title}
            amount={expense.price}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
