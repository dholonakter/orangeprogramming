import React from "react";
import { SmallBorderBottom } from "../../utils/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import reactIcon from "../../assets/images/icons/react.png";
import nodeIcon from "../../assets/images/icons/node-js.png";
import laravelIcon from "../../assets/images/icons/laravel.png";
import javaIcon from "../../assets/images/icons/Java-Logo.png";
import djangoIcon from "../../assets/images/icons/django.png";
import aspIcon from "../../assets/images/icons/asp.net-logo.png";
import { TechnologiesContainer, TechnologyWrap } from "./Technologies.styled";
import Slider from "react-slick";

const Technologies = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <TechnologiesContainer>
        <Container>
          <HeaderText>Technologies</HeaderText>
          <SmallBorderBottom />
          <Slider {...settings}>
            <TechnologyWrap>
              <img src={reactIcon} alt="" />
            </TechnologyWrap>
            <TechnologyWrap>
              <img src={nodeIcon} alt="" />
            </TechnologyWrap>
            <TechnologyWrap>
              <img src={aspIcon} alt="" />
            </TechnologyWrap>
            <TechnologyWrap>
              <img src={laravelIcon} alt="" />
            </TechnologyWrap>
            <TechnologyWrap>
              <img src={javaIcon} alt="" />
            </TechnologyWrap>
            <TechnologyWrap>
              <img src={djangoIcon} alt="" />
            </TechnologyWrap>
          </Slider>
        </Container>
      </TechnologiesContainer>
    </>
  );
};

export default Technologies;
