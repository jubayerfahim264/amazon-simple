import React, { useState } from "react";
import fakeData from "../../fakeData/products";
import "./Shop.css";
import { Products } from "../Products/Products";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";

export const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const exits = cart.find((c) => c.key === cart.key);
    if (!exits) {
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.key, 1);
    }
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {product.map((product) => (
          <Products
            key={product.key}
            product={product}
            handleAddProduct={handleAddProduct}
            cart={cart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};
{
  /* <div className="products">
        {product.map((product) => (
          <div key={product.key} className="product">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Seller: {product.seller}</p>
            <p>Price: ${product.price}</p>
            <p>
              Rating: {product.star} stars ({product.starCount} reviews)
            </p>
            <p>Stock: {product.stock}</p>
            <button className="buyBtn">
              <a href="/order" className="">
                Buy now
              </a>
            </button>
          </div>
        ))}
      </div> */
}
