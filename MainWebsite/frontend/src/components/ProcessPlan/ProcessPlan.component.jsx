import React, { useEffect, useRef } from "react";
import {
  ProcessPlanContainerWrap,
  ProcessPlanContent,
  ProcessPlanDetails,
} from "./ProcessPlan.style";
import img from "../../assets/images/process-plan-img.png";
import maintenceImg from "../../assets/images/maintence-img.png";
import testingImg from "../../assets/images/testing-img.png";
import developementImg from "../../assets/images/developent-img.png";
import designImg from "../../assets/images/design-img.png";
import planningImg from "../../assets/images/planning-img.png";
import { PrimaryButton } from "../../utils/buttons";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faLaptopCode,
  faLightbulb,
  faSwatchbook,
  faTasks,
  faVials,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";

const ProcessPlan = () => {
  const sliderRef = useRef();

  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    autoPlaySpeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {console.log(dots)} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <br />
      <br />

      <Container>
        <HeaderText>Our Process Plan</HeaderText>
        <SmallBorderBottom />
      </Container>
      <ProcessPlanContainerWrap>
        <motion.div
          className="left"
          // ref={ref}
          // animate={controls}
          // initial="hidden"
          // transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          // variants={{
          //   visible: { x: 0 },
          //   hidden: { x: -100 },
          // }}
        >
          <div>
            <p onClick={() => handleOnClick(0)}>
              &nbsp;
              <FontAwesomeIcon icon={faLightbulb} />
              &nbsp;&nbsp;&nbsp;Discovery Workshop
            </p>
            <p onClick={() => handleOnClick(1)}>
              <FontAwesomeIcon icon={faTasks} />
              &nbsp;&nbsp; Planning
            </p>
            <p onClick={() => handleOnClick(2)}>
              <FontAwesomeIcon icon={faSwatchbook} />
              &nbsp;&nbsp; Design
            </p>
            <p onClick={() => handleOnClick(3)}>
              <FontAwesomeIcon icon={faLaptopCode} />
              &nbsp; Developement
            </p>
            <p onClick={() => handleOnClick(4)}>
              <FontAwesomeIcon icon={faVials} />
              &nbsp; Testing
            </p>
            <p onClick={() => handleOnClick(5)}>
              <FontAwesomeIcon icon={faCogs} />
              &nbsp; Maintence
            </p>
          </div>
        </motion.div>
        <motion.div
          className="right"
          // ref={ref}
          // animate={controls}
          // initial="hidden"
          // transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          // variants={{
          //   visible: { y: 0 },
          //   hidden: { y: -100 },
          // }}
        >
          <Slider {...settings} ref={sliderRef}>
            <ProcessPlanDetails>
              <ProcessPlanContent>
                <img src={img} alt="" />

                <div>
                  <h2>Discover Workshop</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis fuga saepe quia architecto quas officiis quidem
                    magnam quae quam culpa, numquam porro quo ipsam. Adipisci
                    assumenda laudantium, fugit ipsum, beatae doloribus harum
                    quis nisi praesentium non iusto corrupti libero asperiores
                    maiores illum sapiente ex veniam quam quae accusantium
                    commodi. Assumenda?
                  </p>
                  <br />
                  <PrimaryButton>Learn More...</PrimaryButton>
                </div>
              </ProcessPlanContent>
            </ProcessPlanDetails>
            <ProcessPlanDetails>
              <ProcessPlanContent>
                <img src={planningImg} alt="" />

                <div>
                  <h2>Planning</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis fuga saepe quia architecto quas officiis quidem
                    magnam quae quam culpa, numquam porro quo ipsam. Adipisci
                    assumenda laudantium, fugit ipsum, beatae doloribus harum
                    quis nisi praesentium non iusto corrupti libero asperiores
                    maiores illum sapiente ex veniam quam quae accusantium
                    commodi. Assumenda?
                  </p>
                  <br />
                  <PrimaryButton>Learn More...</PrimaryButton>
                </div>
              </ProcessPlanContent>
            </ProcessPlanDetails>
            <ProcessPlanDetails>
              <ProcessPlanContent>
                <img src={designImg} alt="" />

                <div>
                  <h2>Design</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis fuga saepe quia architecto quas officiis quidem
                    magnam quae quam culpa, numquam porro quo ipsam. Adipisci
                    assumenda laudantium, fugit ipsum, beatae doloribus harum
                    quis nisi praesentium non iusto corrupti libero asperiores
                    maiores illum sapiente ex veniam quam quae accusantium
                    commodi. Assumenda?
                  </p>
                  <br />
                  <PrimaryButton>Learn More...</PrimaryButton>
                </div>
              </ProcessPlanContent>
            </ProcessPlanDetails>
            <ProcessPlanDetails>
              <ProcessPlanContent>
                <img src={developementImg} alt="" />

                <div>
                  <h2>Developement</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis fuga saepe quia architecto quas officiis quidem
                    magnam quae quam culpa, numquam porro quo ipsam. Adipisci
                    assumenda laudantium, fugit ipsum, beatae doloribus harum
                    quis nisi praesentium non iusto corrupti libero asperiores
                    maiores illum sapiente ex veniam quam quae accusantium
                    commodi. Assumenda?
                  </p>
                  <br />
                  <PrimaryButton>Learn More...</PrimaryButton>
                </div>
              </ProcessPlanContent>
            </ProcessPlanDetails>
            <ProcessPlanDetails>
              <ProcessPlanContent>
                <img src={testingImg} alt="" />

                <div>
                  <h2>Testing</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis fuga saepe quia architecto quas officiis quidem
                    magnam quae quam culpa, numquam porro quo ipsam. Adipisci
                    assumenda laudantium, fugit ipsum, beatae doloribus harum
                    quis nisi praesentium non iusto corrupti libero asperiores
                    maiores illum sapiente ex veniam quam quae accusantium
                    commodi. Assumenda?
                  </p>
                  <br />
                  <PrimaryButton>Learn More...</PrimaryButton>
                </div>
              </ProcessPlanContent>
            </ProcessPlanDetails>
            <ProcessPlanDetails>
              <ProcessPlanContent>
                <img src={maintenceImg} alt="" />

                <div>
                  <h2>Maintence</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis fuga saepe quia architecto quas officiis quidem
                    magnam quae quam culpa, numquam porro quo ipsam. Adipisci
                    assumenda laudantium, fugit ipsum, beatae doloribus harum
                    quis nisi praesentium non iusto corrupti libero asperiores
                    maiores illum sapiente ex veniam quam quae accusantium
                    commodi. Assumenda?
                  </p>
                  <br />
                  <PrimaryButton>Learn More...</PrimaryButton>
                </div>
              </ProcessPlanContent>
            </ProcessPlanDetails>
          </Slider>
        </motion.div>
      </ProcessPlanContainerWrap>
      <br />
      <br />
    </>
  );
};

export default ProcessPlan;
