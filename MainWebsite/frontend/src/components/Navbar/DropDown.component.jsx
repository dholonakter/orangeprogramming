import React from "react";
import { NavLink } from "react-router-dom";
import { DropDownContainer, NavItems } from "./Navbar.style";

const DropDown = ({ dropDownState }) => {
  const [openDropDown, setOpenDropDown] = dropDownState;
  return (
    <>
      <DropDownContainer
        openDropDown={openDropDown}
        onMouseLeave={() => setOpenDropDown(false)}
      >
        <NavItems to="/under-construction" className="dropdown__item">
          <p>Web Application</p>
        </NavItems>
        <NavItems to="/under-construction" className="dropdown__item">
          <p>Android / iOS</p>
        </NavItems>
        <NavItems to="/under-construction" className="dropdown__item">
          <p>Artificial Intelligence</p>
        </NavItems>
        <NavItems to="/under-construction" className="dropdown__item">
          <p>Blockchain</p>
        </NavItems>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
