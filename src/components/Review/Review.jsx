import React, { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";
import { FakeData } from "../../fakeData/products/FakeData";
import ReviewItems from "../ReviewItems/ReviewItems";

const Review = () => {
  const [cart, setCart] = useState([]);
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
  return (
    <>
      <div style={{ textAlign: "center", margin: 10 }}>
        Cart items {cart.length}
      </div>
      {cart.map((pd) => (
        <ReviewItems products={pd} key={pd.key} />
      ))}
    </>
  );
};

export default Review;
