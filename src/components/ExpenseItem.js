import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__price">
        <ExpenseAmount price={props.price} />
      </div>
    </div>
  );
}
export default ExpenseItem;
