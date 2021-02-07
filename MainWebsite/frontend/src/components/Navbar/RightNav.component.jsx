import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../utils/buttons";

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width:60%;

@media (max-width:1200px){
  width:70%;
}
@media (max-width:1030px){
  width:75%;
}

  li {
      color: #fff;
    }
  @media (max-width: 768px) {
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #173857;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    padding: 10%;
    width: 300px;
    transition: transform 0.3s ease-in-out;
   
    li {
   padding: 8% 0;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <NavItems open={open}>
      <li>Home</li>
      <li>Services</li>
      <li>Projects</li>
      <li>About us</li>
      <li>Gallery</li>
      <PrimaryButton>Contact us</PrimaryButton>
    </NavItems>
  );
};

export default RightNav;
