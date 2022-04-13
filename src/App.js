import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cartt from "./components/Cart/Cartt";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setcartShow] = useState(false);
  const showCartHendler = () => {
    setcartShow(true);
  };
  const closeCartHendler = () => {
    setcartShow(false);
  };
  return (
    <CartProvider>
      {cartShow && <Cartt onclose={closeCartHendler} />}
      <Header showCart={showCartHendler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
