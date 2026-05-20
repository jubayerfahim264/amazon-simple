/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import {
  removeFromDb,
  getStoredCart,
  clearTheCart,
} from "../../utilities/fakedb";
import { FakeData } from "../../fakeData/products/FakeData";
import ReviewItems from "../ReviewItems/ReviewItems";
import Cart from "../Cart/Cart";
import thank from "../../images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    setOrderPlaced(true);
    removeFromDb(productKey);
  };

  const handlePlacedOrder = () => {
    setCart([]);
    clearTheCart();
  };

  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map((key) => {
      const product = FakeData.find((fData) => fData.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={thank} alt="" />;
  }

  return (
    <>
      <div className="Reviewcontainer">
        <div className="Products">
          {cart.map((pd) => (
            <ReviewItems
              products={pd}
              key={pd.key}
              removeProduct={removeProduct}
            />
          ))}
          {thankYou}
        </div>
        <div className="CartContainer">
          <Cart cart={cart}>
            <button
              style={{
                padding: 10,
                width: 200,
                border: "none",
                cursor: "pointer",
                background: "gold",
              }}
              onClick={handlePlacedOrder}>
              Placed Order
            </button>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Review;
