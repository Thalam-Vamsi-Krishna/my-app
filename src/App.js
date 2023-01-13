import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenseDetails = [
    {
      date: new Date(2022, 11, 24),
      price: "$ 50",
    },
    {
      date: new Date(2022, 11, 25),
      price: "$ 100",
    },
    {
      date: new Date(2022, 11, 27),
      price: "$ 200",
    },
    {
      date: new Date(2022, 11, 28),
      price: "$ 300",
    },
  ];
  return (
    <div>
      <h2>ExpenseItems</h2>
      {expenseDetails.map((expense) => (
        <ExpenseItem date={expense.date} price={expense.price} />
      ))}
    </div>
  );
}

export default App;
