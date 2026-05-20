import React from "react";

const ReviewItems = (props) => {
  const { img, name, quantity, price, seller, key } = props.products;
  return (
    <>
      <div className="ProductsContainer">
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <h4>
          Seller: <small>{seller}</small>
        </h4>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>

        <button
          style={{
            padding: 10,
            width: 200,
            border: "none",
            cursor: "pointer",
            background: "gold",
          }}
          onClick={() => props.removeProduct(key)}>
          Remove
        </button>
      </div>
    </>
  );
};

export default ReviewItems;
