import React from "react";
import { BannerWrapper } from "./../../styles/components/BannerWrapper";
import Slider from "react-slick";

const banner1 = require("../../img/banner1.jpg");

const Banner = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <BannerWrapper>
        <img src={banner1.default}></img>
      </BannerWrapper>
      <BannerWrapper>
        <img src={banner1.default}></img>
      </BannerWrapper>
    </Slider>
  );
};

export default Banner;
