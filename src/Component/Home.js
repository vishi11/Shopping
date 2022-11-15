import React from "react";
import Products from "./Products";

const Home = ({ cart, setCart }) => {
  return (
    <div>
      Home
      <Products cart={cart} setCart={setCart} />
    </div>
  );
};

export default Home;
