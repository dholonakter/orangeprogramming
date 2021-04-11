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
import windowsIcon from "../../assets/images/icons/windows-app-icon.png";
import aiIcon from "../../assets/images/icons/ai-icon.png";
import { SmallBorderBottom } from "../../utils/constant";
import { Link } from "react-router-dom";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  var stl = {
    color: "black",
  };

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
              <Link style={stl} to="/web-development">
                <div>
                  <img src={webIcon} alt="" />
                  <h5>Web Application</h5>
                  <small>
                    We create custom web systems with awesome frontend
                    experience and reliable, scalable backend architecture.
                  </small>
                </div>
              </Link>
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
              <Link style={stl} to="/mobile-developments">
                <div>
                  <img src={mobAppIcon} alt="" />
                  <h5>Mobile Developments</h5>
                  <small>
                    We bring to life, high performance Mobile Apps which are
                    functionally excellent and carry immersive user experience.
                  </small>
                </div>
              </Link>
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
              <Link style={stl} to="/ai">
                <div>
                  <img src={aiIcon} alt="" />
                  <h5> Predictable Artificial Intelligence</h5>
                  <small>
                    Answer your business challenges and enhance your digital
                    products with our Artificial Intelligence solutions.
                    {/* Automate your processes and get data-driven business
                    insights. */}
                  </small>
                </div>
              </Link>
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
              <Link style={stl} to="/windows-application">
                <div>
                  <img src={windowsIcon} alt="" />
                  <h5>Windows Application</h5>
                  <small>
                    Stay ahead of the game with tailor-made Windows Application.
                  </small>
                </div>
              </Link>
            </ServiceCard>
          </ServicesCardConatiner>
        </Container>
      </ServicesContainerWrap>
    </>
  );
};

export default Services;
