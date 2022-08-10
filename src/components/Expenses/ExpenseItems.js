import React from "react";

import Card from "../UI//Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // // const [amount, setAmount] = useState(props.amount);

  // function clickHandler() {
  //   setTitle("Updated");
  //   console.log(title);
  // }
  // // function clickNumberHandler() {
  // //   setAmount(100);
  // //   console.log(amount);
  // // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickNumberHandler}>Change Amount</button> */}
    </Card>
  );
}

export default ExpenseItem;
