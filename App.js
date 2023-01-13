import ExpenseItem from "./components/Expenses/ExpenseItem";
const App=()=> {
  const expenseDetails = [
    {
      date: new Date(2022, 11, 24),
      item: "Food",
      price: "$ 50",
    },
    {
      date: new Date(2022, 11, 25),
      item: "Petrol",
      price: "$ 100",
    },
    {
      date: new Date(2022, 11, 27),
      item: "Movie",
      price: "$ 200",
    },
    {
      date: new Date(2022, 11, 28),
      item: "Shopping",
      price: "$ 300",
    },
  ];
  return (
    <div>
      <h2>ExpenseItems</h2>
      {expenseDetails.map((expense) => (
        <ExpenseItem
          date={expense.date}
          item={expense.item}
          price={expense.price}
        />
      ))}
    </div>
  );
}
export default App;
