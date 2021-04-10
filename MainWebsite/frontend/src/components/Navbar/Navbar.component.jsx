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

const Navbar = ({ noBg }) => {
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
  console.log(noBg);
  const { pathname } = useLocation();

  var pathList = ['/ai', '/ios', '/blockchain', '/android', '/iOS', '/cloud', '/blog']



  const background = () => {
    var check = pathList.includes(pathname);
    if(check){
      return "rgb(23, 56, 87)";
    }else{
      return "";
    }
  }




  return(
    <>
      <TopContactBar />
      <NavWrap style={{background:background()}} navBar={navBar}>
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
    </>
  );
};

export default Navbar;
