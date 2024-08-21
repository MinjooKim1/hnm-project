import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="item-area">
      <img src={item?.img} alt={item?.title} width={300} />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;
