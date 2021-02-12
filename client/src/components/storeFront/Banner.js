import React from "react";
import { BannerWrapper } from "./../../styles/components/BannerWrapper";

const banner1 = require("../../img/banner1.jpg");

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={banner1.default}></img>
    </BannerWrapper>
  );
};

export default Banner;
