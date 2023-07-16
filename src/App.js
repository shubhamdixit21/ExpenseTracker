import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

// let DUMMY_EXPENSE = [
//   {
//     id: "e1",
//     title: "school fees",
//     amount: 250,
//     date: new Date(2023, 5, 12),
//   },
//   {
//     id: "e2",
//     title: "Books",
//     amount: 230,
//     date: new Date(2023, 2, 12),
//   },
//   {
//     id: "e3",
//     title: "House rent",
//     amount: 700,
//     date: new Date(2023, 4, 2),
//   },
//   {
//     id: "e4",
//     title: "Food",
//     amount: 540,
//     date: new Date(2023, 5, 5),
//   },
// ];
let DUMMY_EXPENSE = [];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json()) //return promise
      .then((data) => setExpenses(data.products));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addExpenseHandler = (expense) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    }).then((res) => fetchData());
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
