/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/products";
import "./Shop.css";
import { Products } from "../Products/Products";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { FakeData } from "../../fakeData/products/FakeData";
import { Link } from "react-router";

export const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((pdKey) => {
      const product = FakeData.find((fdata) => fdata.key === pdKey);
      product.quantity = savedCart[pdKey];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const handleAddProduct = (product) => {
    const ToBeAddedKey = product.key;
    const sameproduct = cart.find((pd) => pd.key === ToBeAddedKey);
    let count = 1;
    let newCart;
    if (sameproduct) {
      count = sameproduct.quantity + 1;
      sameproduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== ToBeAddedKey);
      newCart = [...others, sameproduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key, 1);
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
        <Cart cart={cart}>
          <Link to="/review">
            <button className="orderBtn">Order Review</button>
          </Link>
        </Cart>
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
