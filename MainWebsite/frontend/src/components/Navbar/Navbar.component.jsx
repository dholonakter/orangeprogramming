import React from "react";
import { NavbarContainer, NavItemsContainer, NavLogo } from "./Navbar.style";
import logo from "../../assets/images/logo.png";
import { Container } from "../../utils/container";
import { PrimaryButton } from "../../utils/buttons";

const Navbar = () => {
  return (
    <>
      <Container>
        <NavbarContainer>
          <NavLogo src={logo} alt="" />

          <NavItemsContainer>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About us</li>
            <li>Gallery</li>
           <PrimaryButton>Contact us</PrimaryButton>
          </NavItemsContainer>
        </NavbarContainer>
      </Container>
    </>
  );
};

export default Navbar;
