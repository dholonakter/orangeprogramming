import React from "react";
import { SmallBorderBottom } from "../../utils/constant";
import { Container } from "../../utils/container";
import { HeaderText } from "../../utils/text";
import { ProjectCard, ProjectContainer } from "./Projects.style";
import img1 from "../../assets/images/projects-img/project-1.jpg"
import img2 from "../../assets/images/projects-img/project-2.jpg"
import img3 from "../../assets/images/projects-img/project-3.jpg"
import { PrimaryButton } from "../../utils/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
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
            <div className="img__title">     <h2>Social Blogs</h2>
            <small>Blog Site</small>
            </div>
         
            <div className="img__overlay">
              <hr/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum architecto quod in consequuntur.</p>
              <br />
              <PrimaryButton>View &nbsp;  <FontAwesomeIcon icon={faArrowRight} /></PrimaryButton>
            </div>
          </ProjectCard>

          <ProjectCard>
            <img src={img2} alt="" />
            <div className="img__title">     <h2>OP Shopping</h2>
            <small>Ecomerce Site</small>
            </div>
         
            <div className="img__overlay">
              <hr/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum architecto quod in consequuntur.</p>
              <br />
              <PrimaryButton>View &nbsp;  <FontAwesomeIcon icon={faArrowRight} /></PrimaryButton>
            </div>
          </ProjectCard>

          <ProjectCard>
            <img src={img3} alt="" />
            <div className="img__title">     <h2>Dutch Restaurent </h2>
            <small>Restaurent Site</small>
            </div>
         
            <div className="img__overlay">
              <hr/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum architecto quod in consequuntur.</p>
              <br />
              <PrimaryButton>View &nbsp;  <FontAwesomeIcon icon={faArrowRight} /></PrimaryButton>
            </div>
          </ProjectCard>
        </ProjectContainer>
        <br />
        <br />
      </Container>
    </>
  );
};

export default Projects;
