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

function NavMenus({ menu, setNavbarOpen }) {
  const [openNavSubMenu, setOpenSubMenu] = useState(false);
  const history = useHistory();

  let navbarRef = useClickOutside(() => {
    setOpenSubMenu(false);
  });

  const handleClick = (e) => {
    if (menu.pathDisable) {
      setOpenSubMenu(!openNavSubMenu);
      e.preventDefault();
    } else {
      setNavbarOpen(false);
    }
  };

  return (
    <>
      <NavMenusContainer>
        {menu.button ? (
          <PrimaryButton onClick={() => history.push(menu.path)}>
            {menu.title} &nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </PrimaryButton>
        ) : (
          <NavItems
            to={menu.path}
            exact
            onClick={handleClick}
            onMouseOver={() => setOpenSubMenu(true)}
          >
            {menu.title}
            {menu.subMenu && openNavSubMenu ? (
              <>
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faAngleUp} />
              </>
            ) : (
              menu.subMenu && (
                <>
                  &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faAngleDown} />
                </>
              )
            )}
          </NavItems>
        )}
        <NavSubMenusWrap onMouseLeave={() => setOpenSubMenu(false)}>
          {menu.subMenu && openNavSubMenu
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
