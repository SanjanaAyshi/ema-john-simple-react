import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useProduct(); // from hooks useProduct
  const [cart, setCart] = useCart(products);

  const handelCartBtn = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json()) /// cuz ami hooks e eta likhe rakhsi
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelCartBtn={handelCartBtn}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
