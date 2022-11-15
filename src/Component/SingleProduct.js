import React from "react";
import classes from "./SIngleProduct.module.css";
const SingleProduct = ({ items, cart, setCart }) => {
  const handleAddToCart = () => {
    setCart([...cart, items]);
  };

  const handleRemove = (id) => {
    setCart(cart.filter((ele) => ele.id !== id));
  };
  return (
    <div className={classes.container}>
      <div className={classes.prods}>
        <img src={items.image} alt={items.name} />

        <div>
          <span>{items.name}</span>
          <br></br>
          <span style={{ fontWeight: 400 }}>
            ₹ {items.price.substring(0, 3)}
          </span>
        </div>
        <div className={classes.addButton}>
          {cart.includes(items) ? (
            <button type="button" onClick={() => handleRemove(items.id)}>
              Remove Items
            </button>
          ) : (
            <button type="button" onClick={handleAddToCart}>
              Add TO Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
