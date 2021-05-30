import React from "react";
import img from "../../assets/images/services-banner-imgs/web-app-banner.png";
import { Container } from "../../utils/container";
import {
  ServiceBannerOverlay,
  ServiceBannerWrapper,
} from "./ServicesBanner.style";

function ServicesBanner() {
  return (
    <>
      <ServiceBannerWrapper>
        <img src={img} alt="" />
        <ServiceBannerOverlay>
          <Container className="service__banner">
            <h1>
              <strong>Web Applictaion</strong> Development
            </h1>
            <div className="hr" />
            <p>
              Expert FullStack Development Services that shield your enterprise
              from modern technical and business challenges.
            </p>
          </Container>
        </ServiceBannerOverlay>
      </ServiceBannerWrapper>
    </>
  );
}

export default ServicesBanner;
