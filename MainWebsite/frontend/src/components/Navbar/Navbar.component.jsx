import React, { useEffect, useState } from "react";
import TopContactBar from "../TopContactBar/TopContactBar.component";
import { useHistory, useLocation } from "react-router";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import {
  NavbarContainer,
  NavbarWrap,
  NavLogo,
  NavMenusWrap,
} from "./Navbar.style";
import logo from "../../assets/images/logo.png";
import { navItemsData } from "./navItemsData";
import NavMenus from "./NavMenus.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../utils/container";

const Navbar = (props, { noBg }) => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [navHeightBg, setNavHeightBg] = useState(false);
  const [NavbarOpen, setNavbarOpen] = useState(false);

  const history = useHistory();

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const { pathname } = useLocation();

  useEffect(() => {
    let pathList = [
      "/home",
      "/about-us",
      "/contact-us",
      "/",
      "/web-development",
    ];
    let checkPath = pathList.includes(pathname);
    if (!checkPath) {
      setNavHeightBg(true);
    } else {
      setNavHeightBg(false);
    }
  }, [pathname]);

  let navbarRef = useClickOutside(() => {
    setNavbarOpen(false);
  });

  return (
    <div>
      <TopContactBar />
      <NavbarWrap navbarBackground={navbarBackground} navHeightBg={navHeightBg}>
        <Container>
          <NavbarContainer navbarBackground={navbarBackground}>
            <NavLogo
              src={logo}
              alt="Orange Programming"
              navbarBackground={navbarBackground}
              navHeightBg={navHeightBg}
              onClick={() => history.push("/")}
            />

            <NavMenusWrap NavbarOpen={NavbarOpen} ref={navbarRef}>
              <span
                className="cross__icon"
                onClick={() => setNavbarOpen(false)}
              >
                ✕
              </span>
              {navItemsData.map((item, idx) => (
                <NavMenus key={idx} menu={item} setNavbarOpen={setNavbarOpen} />
              ))}
            </NavMenusWrap>

            <span className="hamburger__icon">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setNavbarOpen(true)}
              />
            </span>
          </NavbarContainer>
        </Container>
      </NavbarWrap>
    </div>
  );
};

export default Navbar;
