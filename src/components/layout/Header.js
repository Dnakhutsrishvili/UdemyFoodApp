import image from "../../images/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Reactmeals</h1>
        <HeaderCartButton onclick={props.showCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="meal" />
      </div>
    </>
  );
};
export default Header;
