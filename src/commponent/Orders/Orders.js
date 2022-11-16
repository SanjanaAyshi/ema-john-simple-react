import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { getStoredCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  const handleProductRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItems
            key={product.id}
            product={product}
            handleProductRemove={handleProductRemove}
          ></ReviewItems>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
      {/* <h2>there are product= {products.length}</h2>
      <p>the cart has:{cart.length}</p> */}
    </div>
  );
};

export default Orders;
