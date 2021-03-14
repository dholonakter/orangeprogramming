import React from "react";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard, ProjectContainer } from "./Projects.style";
import img1 from "../../assets/images/projects-img/project-1.jpg";
import img2 from "../../assets/images/projects-img/project-2.jpg";
import img3 from "../../assets/images/projects-img/project-3.jpg";
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
              <h2>Social Blogs</h2>
              <small>Blog Site</small>
            </div>

            <div className="img__overlay">
              <hr />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                architecto quod in consequuntur.
              </p>
              <br />
              <PrimaryButton>
                View &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </PrimaryButton>
            </div>
          </ProjectCard>

          <ProjectCard>
            <img src={img2} alt="" />
            <div className="img__title">
              {" "}
              <h2>OP Shopping</h2>
              <small>Ecomerce Site</small>
            </div>

            <div className="img__overlay">
              <hr />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                architecto quod in consequuntur.
              </p>
              <br />
              <PrimaryButton>
                View &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </PrimaryButton>
            </div>
          </ProjectCard>

          <ProjectCard>
            <img src={img3} alt="" />
            <div className="img__title">
              {" "}
              <h2>Dutch Restaurent </h2>
              <small>Restaurent Site</small>
            </div>

            <div className="img__overlay">
              <hr />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                architecto quod in consequuntur.
              </p>
              <br />
              <PrimaryButton>
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
