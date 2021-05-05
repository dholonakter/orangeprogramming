import React from "react";
import { NavItems, NavSubMenusContainer } from "./Navbar.style";

function NavSubMenus({ subMenu, setNavbarOpen }) {
  return (
    <>
      <NavSubMenusContainer>
        <NavItems
          to={subMenu.path}
          onClick={() => {
            setNavbarOpen(false);
          }}
          exact
        >
          {subMenu.title}
        </NavItems>
      </NavSubMenusContainer>
    </>
  );
}

export default NavSubMenus;
