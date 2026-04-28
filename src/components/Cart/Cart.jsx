import React from "react";
import "./Cart.css"
import { Link } from "react-router";
const Cart = (props) => {
  const cart = props.cart;
  // console.log(cart);
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  //Another way to obtain products price,
  //let total = 0
  //for (let i =0, i< cart.length; i++){
  // const product = cart[i]
  // total = total+ product.price}

  let ShippingCost = 0;
  if (total > 35) {
    ShippingCost = 0;
  } else if (total > 15) {
    ShippingCost = 4.99;
  } else if (total > 0) {
    ShippingCost = 12.99;
  }
  const tax = (total / 10).toFixed(2);
  const totalPrice = (total + ShippingCost + Number(tax)).toFixed(2);
  const FormatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order Summery</h4>
      <h5>Items Ordered: {cart.length}</h5>
      <p>
        <small>Product Price: ${FormatNumber(total)}</small>
      </p>
      <p>
        <small>Shipping Cost: ${ShippingCost}</small>
      </p>
      <p>
        <small>Tax + VAT: ${tax}</small>
      </p>
      <p>Total Price: ${totalPrice}</p>
      <Link to="/review">
        <button className="orderBtn">Order Review</button>
      </Link>
    </div>
  );
};

export default Cart;
