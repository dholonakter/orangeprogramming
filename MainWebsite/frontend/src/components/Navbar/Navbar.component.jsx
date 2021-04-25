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
import { Link } from "react-router-dom";
import { SonData } from "../Dependancy/Dependancies";

const Navbar = (props, { noBg }) => {
  const [navBar, setNavBar] = useState(false);
  const [open, setOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const { pathname } = useLocation();

  var pathList = ["/home", "/about-us", "/contact-us", "/", "/web-development"];

  const background = () => {
    var check = pathList.includes(pathname);
    if (check) {
      return "";
    } else {
      return "rgb(23, 56, 87)";
    }
  };

  return (
    <div>
      <TopContactBar />
      <NavWrap style={{ background: background() }} navBar={navBar}>
        <Nav className="active" navBar={navBar}>
          <Link to="/">
            <NavLogo
              src={!navBar && noBg ? logoClr : logo}
              alt="orange-programming"
              navBar={navBar}
            />
          </Link>
          <span className="hamburger__icon">
            <FontAwesomeIcon icon={faBars} onClick={() => setOpen(true)} />
          </span>

          {/* ------------------Nav Items Here------------------ */}

          <NavItemsContent navItemsState={[open, setOpen]} />
        </Nav>
      </NavWrap>
    </div>
  );
};

export default Navbar;
