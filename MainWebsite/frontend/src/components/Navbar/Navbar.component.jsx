import React, { useState } from "react";
import Hamburger from "./Hamburger.component";
import logo from "../../assets/images/logo.png";
import logoClr from "../../assets/images/logo-color.png";
import { Nav, NavLogo, NavWrap } from "./Navbar.style";
import TopContactBar from "../TopContactBar/TopContactBar.component";
import { useLocation } from "react-router";

const Navbar = ({ noBg }) => {
  const [navBar, setNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  console.log(noBg);
  const { pathname } = useLocation();
  return pathname === "/under-construction" ? null : (
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
