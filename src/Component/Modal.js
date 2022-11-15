import React from "react";
import Cart from "./Cart";
import classes from "./Modal.module.css";
const Modal = ({ cart, setCart }) => {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.model_header}>
          <h2>MY CART</h2>
        </div>
        <div className={classes.modalbody}>
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Modal;
