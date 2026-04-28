import React from "react";
import { useParams } from "react-router";
import { FakeData } from "./../../fakeData/products/FakeData";
import { Products } from "../Products/Products";

const ProductsDetails = () => {
  const params = useParams();
  const product = FakeData.find((pd) => pd.key === params.productKey);
  console.log(product);

  return (
    <>
      <h3>Your selected products details </h3>
      <div style={{ border: "1px solid lightgray", margin: 20, padding: 20 }}>
        <img src={product.img} alt="" />
        <h2>{product.name}</h2>
        <h4>Seller: { product.seller}</h4>
        <p>Genre: {product.category}</p>
        <p>Price: ${product.price}</p>
      </div>
    </>
  );
};

export default ProductsDetails;
