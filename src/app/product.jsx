import React from "react";
import RecommendedProduct from "./Product/RecommendedProduct";
import DailyDeals from "./Product/DailyDeals";

function Product(props) {
  return (
    <div className="container">
      <RecommendedProduct />
      <DailyDeals />
    </div>
  );
}

export default Product;
