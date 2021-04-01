import React from "react";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard, ProjectContainer } from "./Projects.style";
import img1 from "../../assets/images/projects-img/Project-1.jpg";
import img2 from "../../assets/images/projects-img/Project-2.jpg";
import img3 from "../../assets/images/projects-img/Project-3.jpg";
import { PrimaryButton } from "../../utils/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  const settings = {
    focusOnSelect: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <br />
        <br />
        <HeaderText>Our projects</HeaderText>
        <SmallBorderBottom />
        <ProjectContainer>
          <ProjectCard>
            <img src={img1} alt="" />
            <div className="img__title">
              <h2>Doctors Portal</h2>
              <small>Appointment Management</small>
            </div>

            <div className="img__overlay">
              <hr />
              <p>Doctor appointment management web application.</p>
              <PrimaryButton
                onClick={() => window.open("https://doctors-portall.web.app/")}
              >
                View &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </PrimaryButton>
            </div>
          </ProjectCard>

          <ProjectCard>
            <img src={img2} alt="" />
            <div className="img__title">
              <h2>Red Onion</h2>
              <small>Restaurent Site</small>
            </div>

            <div className="img__overlay">
              <hr />
              <p>A single page restaurent web applictaion.</p>
              <PrimaryButton
                onClick={() => window.open("https://red-onion-bd.web.app/")}
              >
                View &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </PrimaryButton>
            </div>
          </ProjectCard>

          <ProjectCard>
            <img src={img3} alt="" />
            <div className="img__title">
              <h2>Volunteer Network</h2>
              <small>Social Work Site</small>
            </div>

            <div className="img__overlay">
              <hr />
              <p>Social work management web application.</p>
              <PrimaryButton
                onClick={() =>
                  window.open("https://volunteer-network-bd.web.app/")
                }
              >
                View &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </PrimaryButton>
            </div>
          </ProjectCard>
        </ProjectContainer>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default Projects;
