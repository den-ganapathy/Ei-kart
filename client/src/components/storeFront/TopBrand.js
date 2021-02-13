import React from "react";
import {
  BrandWrapper,
  BrandLists,
  BrandItem,
} from "./../../styles/components/TopBrands";
var Samsung = require("./../../img/samsung.png");

const TopBrand = () => {
  return (
    <BrandWrapper>
      <BrandLists>
        <BrandItem>
          <img src={Samsung.default} alt="" />
          <p>Samsung</p>
        </BrandItem>
      </BrandLists>
    </BrandWrapper>
  );
};

export default TopBrand;
