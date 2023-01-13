import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenseDetails = [
    { item: "Food", location: "Tirupati", price: "$ 50" },
    { item: "Petrol", location: "Tirupati", price: "$ 100" },
    { item: "Movie", location: "Chennai", price: "$ 200" },
    { item: "Shopping", location: "Chennai", price: "$ 300" },
  ];
  return (
    <div>
      <h2>ExpenseItems</h2>
      {expenseDetails.map((expense) => (
        <ExpenseItem
          item={expense.item}
          location={expense.location}
          price={expense.price}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
