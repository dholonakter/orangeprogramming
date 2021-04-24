import React from "react";
import { BannerContainer, BannerImg, BannerOverlay } from "./Banner.style";
import Container from "@material-ui/core/Container";
import img1 from "../../assets/images/banner-imgs/banner-img-1.jpg";
import img2 from "../../assets/images/banner-imgs/banner-img-2.jpg";
import img3 from "../../assets/images/banner-imgs/banner-img-3.jpg";
import Slider from "react-slick";
import { PrimaryButton } from "../../utils/buttons";
import { motion } from "framer-motion";

const Banner = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoPlaySpeed: 3500,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        <BannerContainer>
          <BannerImg src={img1} alt="" />
          <BannerOverlay>
            <div>
              <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                YOU SHARE YOUR <span> IDEA.</span>WE GET IT <span>DONE.</span>{" "}
              </motion.h1>
              <div className="hr" />
            </div>
          </BannerOverlay>
        </BannerContainer>
        <BannerContainer>
          <BannerImg src={img2} alt="" />
          <BannerOverlay>
            <div>
              <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }}>
                GET YOUR <span>BUSINESS</span> <span>ONLINE.</span>{" "}
              </motion.h1>
              <div className="hr" />
            </div>
          </BannerOverlay>
        </BannerContainer>
        <BannerContainer>
          <BannerImg src={img3} alt="" />
          <BannerOverlay>
            <div>
              <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }}>
                WEB <span> SOLUTION</span> FOR YOUR <span>BUSINESS.</span>
              </motion.h1>
              <div className="hr" />
            </div>
          </BannerOverlay>
        </BannerContainer>
        {/* <BannerContainer>
          <h1>
            YOU SHARE YOU <span> IDEA.</span>WE GET IT <span>DONE.</span>{" "}
          </h1>
        </BannerContainer> */}
      </Slider>
    </>
  );
};

export default Banner;
