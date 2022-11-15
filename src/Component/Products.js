import React, { useContext, useState } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";
import { Cart } from "./context/CartContext";
faker.seed(50);
const Products = () => {
  const { cart, setCart } = useContext(Cart);
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.finance.amount(),
    image: faker.random.image(),
  }));
  //   console.log(productArray);
  const [products] = useState(productArray);
  // console.log(cart);
  return (
    <div style={{ padding: 10 }}>
      {products.map((prod) => (
        <span key={prod.id} style={{ magrin: 10 }}>
          <SingleProduct items={prod} cart={cart} setCart={setCart} />
        </span>
      ))}
    </div>
  );
};

export default Products;
