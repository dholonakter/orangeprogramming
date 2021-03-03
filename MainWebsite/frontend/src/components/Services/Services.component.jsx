import React, { useEffect } from "react";
import { Container } from "../../utils/container";
import { HeaderText, small, h5 } from "../../utils/text";
import {
  ServiceCard,
  ServicesCardConatiner,
  ServicesContainerWrap,
} from "./Services.style";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import webIcon from "../../assets/images/icons/web-app-icon.png";
import mobAppIcon from "../../assets/images/icons/android-ios-icon.png";
import cloudStoreIcon from "../../assets/images/icons/cloud-storage-icon.png";
import aiIcon from "../../assets/images/icons/ai-icon.png";
import { SmallBorderBottom } from "../../utils/constant";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <ServicesContainerWrap>
        <Container>
          <HeaderText>Services that we provide</HeaderText>
          <SmallBorderBottom />
          <br />
          <ServicesCardConatiner>
            <ServiceCard
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <img src={webIcon} alt="" />
              <h5>Web Application</h5>
              <small>
                Stay ahead of the game with tailor-made mobile and web apps
              </small>
            </ServiceCard>

            <ServiceCard
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.7 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <img src={mobAppIcon} alt="" />
              <h5>Android/IOS Application</h5>
              <small>
                Stay ahead of the game with tailor-made mobile and web apps
              </small>
            </ServiceCard>

            <ServiceCard
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.9 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <img src={aiIcon} alt="" />
              <h5>Artificial Intelligence</h5>
              <small>
                Stay ahead of the game with tailor-made mobile and web apps
              </small>
            </ServiceCard>

            <ServiceCard
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <img src={cloudStoreIcon} alt="" />
              <h5>Cloud Service</h5>
              <small>
                Stay ahead of the game with tailor-made mobile and web apps
              </small>
            </ServiceCard>
          </ServicesCardConatiner>
        </Container>
      </ServicesContainerWrap>
    </>
  );
};

export default Services;
