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
        <NavItems to="/web-development" className="dropdown__item">
          <p>Web Application</p>
        </NavItems>
        <NavItems to="/mobile-developments" className="dropdown__item">
          <p>Mobile Developments</p>
        </NavItems>
        {/* <NavItems to="/android" className="dropdown__item">
          <p>Android</p>
        </NavItems> */}
        <NavItems to="/ai" className="dropdown__item">
          <p> Predictable Artificial Intelligence  </p>
        </NavItems>
        <NavItems to="/windows-application" className="dropdown__item">
          <p>Windows Application</p>
        </NavItems>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
