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
import webIcon from "../../assets/images/services-icons/web-dev.png";
import mobAppIcon from "../../assets/images/services-icons/mobile-dev.png";
import blockchainIcon from "../../assets/images/services-icons/blockchain.png";
import aiIcon from "../../assets/images/services-icons/ai.png";
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
            // ref={ref}
            // animate={controls}
            // initial="hidden"
            // transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            // variants={{
            //   visible: { opacity: 1, scale: 1 },
            //   hidden: { opacity: 0, scale: 0 },
            // }}
            >
              <img src={webIcon} alt="" className="wev__dev" />
              <h5>Web Application</h5>
              <small>
                We create custom web systems with awesome frontend experience
                and reliable, scalable backend architecture.
              </small>
            </ServiceCard>

            <ServiceCard
            // ref={ref}
            // animate={controls}
            // initial="hidden"
            // transition={{ duration: 0.7 }}
            // variants={{
            //   visible: { opacity: 1, scale: 1 },
            //   hidden: { opacity: 0, scale: 0 },
            // }}
            >
              <img src={mobAppIcon} alt="" />
              <h5>Android/IOS Application</h5>
              <small>
                We bring to life, high performance Mobile Apps which are
                functionally excellent and carry immersive user experience.
              </small>
            </ServiceCard>

            <ServiceCard
            // ref={ref}
            // animate={controls}
            // initial="hidden"
            // transition={{ duration: 0.9 }}
            // variants={{
            //   visible: { opacity: 1, scale: 1 },
            //   hidden: { opacity: 0, scale: 0 },
            // }}
            >
              <img src={aiIcon} alt="" />
              <h5>Artificial Intelligence</h5>
              <small>
                Answer your business challenges and enhance your digital
                products with our Artificial Intelligence solutions. Automate
                your processes and get data-driven business insights.
              </small>
            </ServiceCard>

            <ServiceCard
            // ref={ref}
            // animate={controls}
            // initial="hidden"
            // transition={{ duration: 1 }}
            // variants={{
            //   visible: { opacity: 1, scale: 1 },
            //   hidden: { opacity: 0, scale: 0 },
            // }}
            >
              <img src={blockchainIcon} alt="" />
              <h5>Blockchain</h5>
              <small>
                If you’re looking for someone to help you launch your DApp,
                Exchange or Wallet or to provide Smart Contract development, R&D
                or consultancy - look no further. This is our domain.
              </small>
            </ServiceCard>
          </ServicesCardConatiner>
        </Container>
      </ServicesContainerWrap>
    </>
  );
};

export default Services;
