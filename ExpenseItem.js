import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem=(props)=> {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.item}</h2>
        <ExpenseAmount price={props.price} />
      </div>
    </div>
  );
}
export default ExpenseItem;
