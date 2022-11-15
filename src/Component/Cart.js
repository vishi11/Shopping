import React, { useEffect, useState } from "react";
import styles from "./Crat.module.css";
import SingleProduct from "./SingleProduct";
const Cart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mainBody}>
          {cart.map((prods) => (
            <SingleProduct
              items={prods}
              key={prods.id}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
};

export default Cart;
