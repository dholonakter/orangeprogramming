import React from "react";
import { BannerContainer } from "./Banner.style";
import img from "../../assets/images/banner-imgs/banner-img-1.jpg";

const Banner = () => {


  return (
    <>
      <BannerContainer>
        <h1>
          YOU SHARE YOU <span> IDEA.</span>WE GET IT <span>DONE.</span>{" "}
        </h1>
      </BannerContainer>
        <hr/> 
    </>
  );
};

export default Banner;
