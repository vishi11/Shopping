import React, { useContext, useState } from "react";
import classes from "./Header.module.css";
import Modal from "./Modal";
import { Cart } from "./context/CartContext";

const Header = () => {
  const { cart, setCart } = useContext(Cart);

  const [state, setState] = useState(false);
  return (
    <>
      <header className={classes.nav_header}>Shopping Cart</header>
      <div className={classes.imgbutton}>
        <button onClick={() => setState(!state)}>
          <img
            src={
              "https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png"
            }
          />
          <span className={classes.count}>{cart.length}</span>
        </button>
      </div>

      {state ? <Modal cart={cart} setCart={setCart} /> : ""}
    </>
  );
};

export default Header;
