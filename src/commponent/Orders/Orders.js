import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  return (
    <div>
      <h2>this is order= {products.length}</h2>
      <p>the cart has:{cart.length}</p>
    </div>
  );
};

export default Orders;
