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
              <FontAwesomeIcon icon={faLightbulb} /> &nbsp;Domain Understanding
            </p>
            <p onClick={() => handleOnClick(1)}>
              <FontAwesomeIcon icon={faTasks} /> Planning
            </p>
            <p onClick={() => handleOnClick(2)}>
              <FontAwesomeIcon icon={faSwatchbook} /> Design
            </p>
            <p onClick={() => handleOnClick(3)}>
              <FontAwesomeIcon icon={faLaptopCode} /> Development
            </p>
            <p onClick={() => handleOnClick(4)}>
              <FontAwesomeIcon icon={faVials} /> Testing
            </p>
            <p onClick={() => handleOnClick(5)}>
              <FontAwesomeIcon icon={faCogs} /> Maintenance
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
                  <h2>Domain Understanding</h2>
                  <br />
                  <p>
                  First aspect focuses on Domain Understanding, this is where the team will get to know the client, as well as dealing with what specifics the client is seeking. The team will make sure that whatever the client is asking can be formed into reality, as well as making sure the team understood the client’s aspects of the project and needs. In addition, we will guide you how to secure and maintain your domain.  
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
                  Within this phase the team will work closely with the client to form a bases of when certain aspects of the project should be completed. To ensure trust, the team will make sure all deadlines are met, and to make sure the client is up to date with how the project is going. Furthermore, the team will discuss with the client the most effective methodology, whether it is working with SCRUM or AGILE. 
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
                  The next crucial phase of the project is design, whereby UI (User Interface) and UX (User Experience) designers will collaborate closely with the client to ensure that what the client is asking for is able to get delivered as well as in some form and way the client sees their product, thereby limiting any work that must be redone.  
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
                  Within the development phase, the team will focus on the most reliable and effective ways of making sure that the front-end is able to communicate with the back-end. While back-end may not seem important for clients it is the brain house whereby the whole system is able to function. Thereby, the development stage will be done, but withheld from the client, but mainly discussed of certain functions and their attributes that will help with the client’s needs.  
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
                  Within the testing phase the team will split the work into two smaller phases, one focusing on code repair and code sturdiness while the other phase will focus on user testing.  

Within the coding phase the team will ensure to deliver the best quality possible, the team will go through with thorough testing, whereby each aspect of the project will be tested and made sure that it will work efficiently as well as clearing out the most common bugs and vulnerabilities.  

Within the user testing phase, the team will get into contact with the client and share the live experience and retrieve feedback wherever necessary, whereby the team is able to make changes so that the user experience can be up to expectations with what the client wants and feels comfortable with.  
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
                  <h2>Maintenance</h2>
                  <br />
                  <p>
                  In theory not every handed over project is complete at 100%, although it may seem so, but a client would at times suggest changes to be made, thereby, would ask for some maintenance. Other aspects include if there is a bug found somewhere in the system that must be corrected, the team will provide the best solution towards the client’s feedback and will.  
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
