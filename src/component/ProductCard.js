import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={showDetail}>
      <div className="item-area">
        <img src={item?.img} alt={item?.title} width={300} />
      </div>
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;
