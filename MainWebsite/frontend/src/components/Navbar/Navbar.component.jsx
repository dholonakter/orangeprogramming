import React from "react";
import Hamburger from "./Hamburger.component";
import logo from "../../assets/images/logo.png"
import {Nav, NavLogo} from "./Navbar.style"



const Navbar = () => {
  return (
    <Nav>
      <NavLogo src={logo} alt=""/>
      <Hamburger />
    </Nav>
  );
};

export default Navbar;
