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
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../../utils/buttons";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 65%;

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 1030px) {
    width: 75%;
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
  }
`;

const activeClassName = "nav-item-active";

const NavItems = styled(NavLink).attrs({ activeClassName })`
  color: #fff;
  text-decoration: inherit;

  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  &::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 0;
    height: 2px;
    background: #f0671f;
    transition: width 0.3s;
  }
  &.${activeClassName} {
    color: #f0671f;
    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 0;
      height: 2px;
      background: #f0671f;
      transition: width 0.3s;
    }
    &::after {
      width: 100%;
    }
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

  @media (max-width: 768px) {
    padding: 8% 0;
  }
`;

const RightNav = ({ navBarState, noBg }) => {
  const [open, setOpen] = navBarState;
  const history = useHistory();
  return (
    <Navigation open={open} noBg={noBg}>
      <NavItems
        exact
        to="/"
        onClick={() => {
          setOpen(false);
        }}
      >
        <FontAwesomeIcon icon={faHome} className="d-none" /> &nbsp;HOME
      </NavItems>

      <NavItems to="/under-construction">
        <FontAwesomeIcon icon={faBriefcase} className="d-none" /> &nbsp;SERVICES
      </NavItems>
      <NavItems
        to="/under-construction"
        onClick={() => {
          setOpen(false);
        }}
      >
        <FontAwesomeIcon icon={faLaptopCode} className="d-none" />{" "}
        &nbsp;PROJECTS
      </NavItems>

      <NavItems
        to="/about-us"
        onClick={() => {
          setOpen(false);
        }}
      >
        <FontAwesomeIcon icon={faInfoCircle} className="d-none" /> &nbsp; ABOUT
        US
      </NavItems>

      <NavItems
        to="/under-construction"
        onClick={() => {
          setOpen(false);
        }}
      >
        <FontAwesomeIcon icon={faImages} className="d-none" /> &nbsp;BLOG
      </NavItems>

      <PrimaryButton
        onClick={() => {
          setOpen(false);
          history.push(`/contact-us`);
        }}
      >
        CONTACT US &nbsp; <FontAwesomeIcon icon={faArrowRight} />
      </PrimaryButton>
    </Navigation>
  );
};

export default RightNav;
