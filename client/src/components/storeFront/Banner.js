import React from "react";
import { BannerWrapper } from "./../../styles/components/BannerWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "./../../img/banner4.jpg";

const banner1 = require("../../img/banner1.jpg");

var bannerData = [{ id: 1, img: banner }];

const Banner = () => {
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 5000,
  // };
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <BannerWrapper>
      {/* <Slider {...settings}> */}
      {bannerData &&
        bannerData.map((data) => {
          const { id, img } = data;
          return <img src={img}></img>;
        })}
      {/* </Slider> */}
    </BannerWrapper>
  );
};

export default Banner;
