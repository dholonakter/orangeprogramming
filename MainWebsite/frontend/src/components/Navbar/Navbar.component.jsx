import React, { useState } from "react";
import Hamburger from "./Hamburger.component";
import logo from "../../assets/images/logo.png";
import { Nav, NavLogo, NavWrap } from "./Navbar.style";
import TopContactBar from "../TopContactBar/TopContactBar.component";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <TopContactBar />
      <NavWrap navBar={navBar}>
        <Nav className="active" navBar={navBar}>
          <NavLogo src={logo} alt="orange-programming" navBar={navBar} />
          <Hamburger navBar={navBar} />
        </Nav>
      </NavWrap>
    </>
  );
};

export default Navbar;
