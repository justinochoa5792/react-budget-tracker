import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context.js/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ul key={expense.id} className="list-group">
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          </ul>
        );
      })}
    </div>
  );
};

export default ExpenseList;
