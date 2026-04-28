import React from "react";

const ReviewItems = (props) => {
  console.log(props);
  const { img, name, quantity, price, seller } = props.products;
  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid lightgray",
        }}>
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <h4>
          Seller: <small>{seller}</small>
        </h4>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
       
              <button style={{
              padding:10, width:200, border:"1px solid lightgray",cursor:"pointer", background:"gold"
          }}>Remove</button>
       
      </div>
    </>
  );
};

export default ReviewItems;
