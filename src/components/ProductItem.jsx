import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import s from "./ProductItem.module.scss";
const ProductItem = ({ data }) => {
  return (
    <div className={s.productItem}>
      <Link to={`/product-detail/${data.id}`}>
        <img src={data.thumbnail} width="300" height="300" />
      </Link>
      <div className={s.content}>
        <Link to={`/product-detail/${data.id}`}>
          <h2>{data.title}</h2>
        </Link>
        <p>${data.price}</p>
        <p>{data.description}</p>
        <Button className="btn btn-danger" width="100%">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
