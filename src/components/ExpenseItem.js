import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>Food</h2>
          <div className="expense-item__price">$ 10</div>
        </div>
      </div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>Petrol</h2>
          <div className="expense-item__price">$ 100</div>
        </div>
      </div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>Movies</h2>
          <div className="expense-item__price">$ 200</div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
