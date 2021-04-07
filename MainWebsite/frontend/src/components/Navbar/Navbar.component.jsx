import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import logoClr from "../../assets/images/logo-color.png";
import { Nav, NavLogo, NavWrap } from "./Navbar.style";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import TopContactBar from "../TopContactBar/TopContactBar.component";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavItemsContent from "./NavItemsContent.component";

const Navbar = ({ noBg }) => {
  const [navBar, setNavBar] = useState(false);
  const [open, setOpen] = useState(false);

  // let sidebarRef = useClickOutside(() => {
  //   setOpen(false);
  // });

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
          <span className="hamburger__icon">
            <FontAwesomeIcon icon={faBars} onClick={() => setOpen(true)} />
          </span>

          {/* ------------------Nav Items Here------------------ */}

          <NavItemsContent navItemsState={[open, setOpen]} />
        </Nav>
      </NavWrap>
    </>
  );
};

export default Navbar;
