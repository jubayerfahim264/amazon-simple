import React from "react";
import { ShoppingCart } from "lucide-react";
import "./Products.css";

export const Products = (props) => {
  const { name, img, key, price, seller, stock } = props.product;
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt={key} />
      </div>
      <div>
        <h4 className="productName">{name}</h4>
        <br />
        <p>by: {seller}</p>
        <br />
        <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button
          className="cartBtn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <ShoppingCart />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
