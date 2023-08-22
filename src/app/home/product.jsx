import React from "react";
import DailyDeals from "../Product/DailyDeals";
import SectionContent from "../Product/SectionContent";

function Product(props) {
  return (
    <div className="container">
      <SectionContent />
      <DailyDeals />
    </div>
  );
}

export default Product;
  