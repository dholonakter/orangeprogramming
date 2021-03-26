import React, { useState } from "react";
import Hamburger from "./Hamburger.component";
import logo from "../../assets/images/logo.png";
import logoClr from "../../assets/images/logo-color.png";
import { Nav, NavLogo, NavWrap } from "./Navbar.style";
import TopContactBar from "../TopContactBar/TopContactBar.component";

const Navbar = ({ noBg }) => {
  const [navBar, setNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  console.log(noBg);
  return (
    <>
      <TopContactBar />
      <NavWrap navBar={navBar}>
        <Nav className="active" navBar={navBar}>
          <NavLogo
            src={!navBar && noBg ? logoClr : logo}
            alt="orange-programming"
            navBar={navBar}
          />
          <Hamburger navBar={navBar} noBg={!navBar && noBg} />
        </Nav>
      </NavWrap>
    </>
  );
};

export default Navbar;
