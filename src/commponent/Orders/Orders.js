import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItems key={product.id} product={product}></ReviewItems>
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
