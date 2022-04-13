import classes from "./Mealitemform.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountIsVelid, setAmountIsVelid] = useState(true);
  const amountinputRef = useRef();
  const submitHandeler = (event) => {
    event.preventDefault();
    const enteredAmount = amountinputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsVelid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    console.log(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandeler}>
      <Input
        ref={amountinputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsVelid && <p>Please entere a valid Amount (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
