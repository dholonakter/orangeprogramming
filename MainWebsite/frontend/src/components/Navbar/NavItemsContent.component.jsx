import {
  faAngleDown,
  faAngleUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { PrimaryButton } from "../../utils/buttons";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import DropDown from "./DropDown.component";
import { NavItems, NavItemsContainer, NavItemsWrap } from "./Navbar.style";

const NavItemsContent = ({ navItemsState }) => {
  const history = useHistory();
  const [open, setOpen] = navItemsState;
  const [openDropDown, setOpenDropDown] = useState(false);

  let serviceRef = useClickOutside(() => {
    setOpenDropDown(false);
  });

  return (
    <>
      <NavItemsContainer open={open}>
        <span className="cross__icon" onClick={() => setOpen(false)}>
          ✕
        </span>

        <NavItems
          exact
          to="/"
          onClick={() => {
            setOpen(false);
          }}
          onMouseOver={() => setOpenDropDown(false)}
        >
          <p>HOME</p>
        </NavItems>

        <NavItemsWrap
          onClick={() => setOpenDropDown(!openDropDown)}
          ref={serviceRef}
        >
          <NavItems to="/web-development" className="disabled__link">
            <p onMouseOver={() => setOpenDropDown(true)}>
              SERVICES &nbsp; &nbsp;
              {openDropDown ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </p>

            <DropDown dropDownState={[openDropDown, setOpenDropDown]} />
          </NavItems>
        </NavItemsWrap>

        <NavItems
          to="/projects"
          onClick={() => {
            setOpen(false);
          }}
          onMouseOver={() => setOpenDropDown(false)}
        >
          <p>PROJECTS</p>
        </NavItems>

        <NavItems
          to="/about-us"
          onClick={() => {
            setOpen(false);
          }}
          onMouseOver={() => setOpenDropDown(false)}
        >
          <p>ABOUT US</p>
        </NavItems>

        <NavItems
          to="/blog"
          onClick={() => {
            setOpen(false);
          }}
          onMouseOver={() => setOpenDropDown(false)}
        >
          <p>BLOG</p>
        </NavItems>

        <PrimaryButton
          onClick={() => {
            setOpen(false);
            history.push(`/contact-us`);
          }}
          onMouseOver={() => setOpenDropDown(false)}
        >
          CONTACT US &nbsp; <FontAwesomeIcon icon={faArrowRight} />
        </PrimaryButton>
      </NavItemsContainer>
    </>
  );
};

export default NavItemsContent;
