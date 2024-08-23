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
        <div className="choice">
          {item?.choice === true ? "Conscious choice" : ""}
        </div>
        <img src={item?.img} alt={item?.title} width={300} />
      </div>

      <div className="title-wrap">
        <div>{item?.title}</div>
        <div>{item?.new === true ? "New" : ""}</div>
      </div>
      <div>${item?.price}</div>
    </div>
  );
};

export default ProductCard;
