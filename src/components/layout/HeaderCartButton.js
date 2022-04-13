import classes from "./HeaderCartButton.module.css";
import CartIcon from "./Carticon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [btnisHighlited, setbtnisHighlited] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnisHighlited ? classes.bump : ""}`;

  useEffect(() => {
    if (items.lenght === 0) {
      return;
    }
    setbtnisHighlited(true);

    setTimeout(() => {
      setbtnisHighlited(false);
    }, 300);
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
