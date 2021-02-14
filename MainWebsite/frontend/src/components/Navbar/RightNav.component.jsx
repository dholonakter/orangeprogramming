import {
  faBriefcase,
  faHome,
  faImage,
  faImages,
  faInfoCircle,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../utils/buttons";
import { NavIconWrap } from "./Navbar.style";

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 1030px) {
    width: 75%;
  }

  li {
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 0;
      height: 2.1px;
      background: #f0671f;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 70%;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #173857;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 10%;
    width: 300px;

    li {
      padding: 8% 0;
      &:hover {
        transition: 0.3s;
        padding-left: 2.5vh;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <NavItems open={open}>
      <li>
        <NavIconWrap>
          <FontAwesomeIcon icon={faHome} />{" "}
        </NavIconWrap>
        HOME
      </li>
      <li>
        <NavIconWrap>
          <FontAwesomeIcon icon={faBriefcase} />{" "}
        </NavIconWrap>{" "}
        SERVICES
      </li>
      <li>
        <NavIconWrap>
          <FontAwesomeIcon icon={faLaptopCode} />{" "}
        </NavIconWrap>{" "}
        PROJECTS
      </li>
      <li>
        <NavIconWrap>
          <FontAwesomeIcon icon={faInfoCircle} />{" "}
        </NavIconWrap>{" "}
        ABOUT US
      </li>
      <li>
        <NavIconWrap>
          <FontAwesomeIcon icon={faImages} />{" "}
        </NavIconWrap>{" "}
        GALLERY
      </li>
      <PrimaryButton>CONTACT US</PrimaryButton>
    </NavItems>
  );
};

export default RightNav;
