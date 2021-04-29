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
import pythonIcon from "../../assets/images/icons/python.png";
import aspIcon from "../../assets/images/icons/asp.net-logo.png";
import {
  TechnologiesContainer,
  TechnologiesWrap,
  TechnologyWrap,
} from "./Technologies.styled";
import Slider from "react-slick";

const Technologies = () => {
  var settings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
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
  const clickHandle = (target) => {
    window.open(target);
  };
  return (
    <>
      <TechnologiesContainer>
        <Container>
          <HeaderText>Technologies</HeaderText>
          <SmallBorderBottom />
          <TechnologiesWrap>
            <Slider {...settings}>
              <TechnologyWrap>
                <img
                  onClick={() => clickHandle("https://reactjs.org")}
                  src={reactIcon}
                  alt=""
                  className="react__icon"
                />
              </TechnologyWrap>
              <TechnologyWrap>
                <img
                  onClick={() => clickHandle("https://nodejs.org")}
                  src={nodeIcon}
                  alt=""
                  className="node__icon"
                />
              </TechnologyWrap>
              <TechnologyWrap>
                <img
                  onClick={() =>
                    clickHandle("https://dotnet.microsoft.com/apps/aspnet")
                  }
                  src={aspIcon}
                  alt="dotnet__icon"
                  className="dotnet__icon"
                />
              </TechnologyWrap>
              <TechnologyWrap>
                <img
                  onClick={() => clickHandle("https://laravel.com")}
                  src={laravelIcon}
                  alt=""
                  className="laravel__icon"
                />
              </TechnologyWrap>
              <TechnologyWrap>
                <img
                  onClick={() => clickHandle("https://www.oracle.com/java/")}
                  src={javaIcon}
                  alt=""
                  className="java__icon"
                />
              </TechnologyWrap>

              <TechnologyWrap>
                <img
                  onClick={() => clickHandle("https://www.oracle.com/java/")}
                  src={pythonIcon}
                  alt=""
                  className="python__icon"
                />
              </TechnologyWrap>
            </Slider>
          </TechnologiesWrap>
        </Container>
      </TechnologiesContainer>
    </>
  );
};

export default Technologies;
