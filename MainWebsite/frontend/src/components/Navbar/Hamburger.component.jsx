import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav.component";

const StyledHamburger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#F0671F")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Hamburger = ({ navBar, noBg }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      <RightNav navBarState={[open, setOpen]} noBg={noBg} />
    </>
  );
};

export default Hamburger;