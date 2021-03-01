import React from "react";
import { BrandWrapper } from "./../../styles/components/TopBrands";
import Apple from "./../../img/apple.jpg";
import Samsung from "./../../img/samsung1.jpg";
import Mi from "./../../img/mi.jpg";
import Oneplus from "./../../img/oneplus.webp";

const BrandData = [
  {
    id: 1,
    img: Samsung,
    name: "Samsung",
  },
  {
    id: 2,
    img: Mi,
    name: "Redmi",
  },
  {
    id: 3,
    img: Oneplus,
    name: "Oneplus",
  },
  {
    id: 4,
    img: Apple,
    name: "Apple",
  },
];

const TopBrand = () => {
  return (
    <BrandWrapper>
      <div className="header">Top Brands </div>
      <div className="brand">
        {BrandData &&
          BrandData.map((data) => {
            const { id, img, name } = data;
            return (
              <div key={id} className="brand-container">
                <img src={img} alt="" />
                <p>{name}</p>
              </div>
            );
          })}
      </div>
    </BrandWrapper>
  );
};

export default TopBrand;
