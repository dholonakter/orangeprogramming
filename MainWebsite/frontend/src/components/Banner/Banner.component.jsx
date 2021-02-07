import React from "react";
import { BannerContainer } from "./Banner.style";
import img from "../../assets/images/banner-imgs/banner-img-1.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <BannerContainer>
        <h1>
          YOU SHARE YOU <span> IDEA.</span>WE GET IT <span>DONE.</span>{" "}
        </h1>
      </BannerContainer>
    </>
  );
};

export default Banner;
