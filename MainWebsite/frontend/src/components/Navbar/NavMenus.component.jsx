import React from "react";
import { useState } from "react";
import { NavItems, NavMenusContainer, NavSubMenusWrap } from "./Navbar.style";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import NavSubMenus from "./NavSubMenus.component";
import { PrimaryButton } from "../../utils/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

function NavMenus({ menu, setNavbarOpen, navbarBackground }) {
  const history = useHistory();

  const handleClick = (e) => {
    if (menu.pathDisable) {
      e.preventDefault();
    } else {
      setNavbarOpen(false);
    }
  };

  return (
    <>
      <NavMenusContainer navbarBackground={navbarBackground}>
        {menu.button ? (
          <PrimaryButton onClick={() => history.push(menu.path)}>
            {menu.title} &nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </PrimaryButton>
        ) : (
          <NavItems to={menu.path} exact onClick={handleClick}>
            <span>{menu.title}</span>
          </NavItems>
        )}
        <NavSubMenusWrap className="nav__sub__menus_wrap">
          {menu.subMenu
            ? menu.subMenu.map((subMenu, idx) => (
                <NavSubMenus
                  key={idx}
                  subMenu={subMenu}
                  setNavbarOpen={setNavbarOpen}
                />
              ))
            : null}
        </NavSubMenusWrap>
      </NavMenusContainer>
    </>
  );
}

export default NavMenus;
