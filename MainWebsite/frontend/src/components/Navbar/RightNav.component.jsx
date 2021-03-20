import {
  faArrowRight,
  faBriefcase,
  faHome,
  faImages,
  faInfoCircle,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PrimaryButton } from "../../utils/buttons";

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 65%;

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 1030px) {
    width: 75%;
  }

  li {
    color: ${({ noBg, open }) => (open ? "#fff" : noBg ? "#173857" : "#fff")};
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
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
      width: 100%;
    }
    @media (max-width: 768px) {
      color: #fff;
    }
    .d-none {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }

  button {
    ${({ noBg }) =>
      noBg &&
      `background: #f0671f;
    color: #fff;
    &:hover {
      background: transparent;
      cursor: pointer;
      color: #f0671f;
      border: 2px solid #f0671f;
    }`}
    @media (max-width: 1450px) {
      font-size: 11px;
    }
    @media (max-width: 1180px) {
      font-size: 10px;
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
    width: 300px;

    li {
      padding: 8% 0;
    }
  }
`;

const RightNav = ({ open, noBg }) => {
  const history = useHistory();
  return (
    <NavItems open={open} noBg={noBg}>
      <motion.li
        whileHover={{
          color: "#f0671f",
        }}
        onClick={() => history.push(`/`)}
      >
        <FontAwesomeIcon icon={faHome} className="d-none" /> &nbsp;HOME
      </motion.li>
      <motion.li
        whileHover={{
          color: "#f0671f",
        }}
      >
        <FontAwesomeIcon icon={faBriefcase} className="d-none" /> &nbsp;SERVICES
      </motion.li>
      <motion.li
        whileHover={{
          color: "#f0671f",
        }}
      >
        <FontAwesomeIcon icon={faLaptopCode} className="d-none" />{" "}
        &nbsp;PROJECTS
      </motion.li>
      <motion.li
        whileHover={{
          color: "#f0671f",
        }}
        onClick={() => history.push(`/about-us`)}
      >
        <FontAwesomeIcon icon={faInfoCircle} className="d-none" /> &nbsp;ABOUT
        US
      </motion.li>
      <motion.li
        whileHover={{
          color: "#f0671f",
        }}
      >
        <FontAwesomeIcon icon={faImages} className="d-none" /> &nbsp;GALLERY
      </motion.li>
      <PrimaryButton onClick={() => history.push(`/contact-us`)}>
        CONTACT US &nbsp; <FontAwesomeIcon icon={faArrowRight} />
      </PrimaryButton>
    </NavItems>
  );
};

export default RightNav;
