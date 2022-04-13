import classes from "./cartt.module.css";
import Modal from "../UI/Modal.js";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem.js";

const Cartt = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  console.log(totalAmount);

  const hasItems = cartCtx.items.length > 0;

  const addCartItemsHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartCtx.addItem(cartItem);
  };

  const removeCartItemsHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemsHandler.bind(null, item.id)}
          onAdd={addCartItemsHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onclose={props.onclose}>
      {cartItems}
      <div>
        <span className={classes.total}>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onclose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}> Order</button>}
      </div>
    </Modal>
  );
};
export default Cartt;
