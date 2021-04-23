import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrap = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ navBar }) => (navBar ? "#173857" : "")};
  box-shadow: ${({ navBar }) =>
    navBar ? "0 1px 6px 0 rgb(32 33 36 / 28%)" : ""};
  transition: all 0.3s;

  margin: ${({ navBar }) => (navBar ? "0 auto" : "35px auto")};

  @media (max-width: 768px) {
    padding: 2px 0;
  }
`;

export const Nav = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 80vw;
  padding: ${({ navBar }) => (navBar ? "5px 0" : "15px 0")};
  /* background-color: red; */
  @media (max-width: 1000px) {
    width: 90vw;
  }

  .hamburger__icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      font-size: 28px;
      top: ${({ navBar }) => (navBar ? "2%" : "11%")};
      transition: all 0.3s;
      color: #f0671f;
    }
  }
`;

export const NavLogo = styled.img`
  width: ${({ navBar }) => (navBar ? "130px" : "160px")};
  height: ${({ navBar }) => (navBar ? "55px" : "70px")};
  transition: all 0.5s;

  @media (max-width: 1200px) {
    width: 140px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
  }
`;

/////////// Nav Items Styles //////////////

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 65%;

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 1030px) {
    width: 75%;
  }

  button {
    background-color: #f0671f;
    color: #ffff;
    cursor: pointer;

    &:hover {
      background: transparent;
      border: 2px solid #f0671f;
      color: #f0671f;
    }

    @media (max-width: 1450px) {
      font-size: 11px;
    }
    @media (max-width: 1180px) {
      font-size: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #173857;
    justify-content: flex-start;
    align-items: stretch;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 30px;
  }
  @media (max-width: 400px) {
    width: 80vw;
  }

  .cross__icon {
    display: none;
    @media (max-width: 768px) {
      width: fit-content;
      display: block;
      cursor: pointer;
      color: #fff;
      font-size: 25px;
      padding-bottom: 20px;
    }
  }

  .disabled__link {
    @media (max-width: 768px) {
      pointer-events: none;
      cursor: pointer !important;
    }
  }
`;

export const NavItemsWrap = styled.div`
  position: relative;
`;

const activeClassName = "nav-item-active";

export const NavItems = styled(NavLink).attrs({ activeClassName })`
  color: #fff;
  text-decoration: inherit;

  cursor: pointer;
  font-size: 14px;
  font-weight: 400;

  p {
    @media (max-width: 768px) {
      margin: 0 0 22px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      padding-bottom: 5px;
    }

    @media (min-width: 768px) {
      &::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 0;
        height: 2px;
        background: #f0671f;
        transition: width 0.3s;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  &.${activeClassName} {
    color: #f0671f;
    font-weight: bold;
    /* &::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 0;
      height: 1.5px;
      background: #f0671f;
      transition: width 0.3s;
    }
    &::after {
      width: 100%;
    } */
  }

  @media (max-width: 768px) {
    color: #fff;
  }

  .d-none {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

////////////Dropdown Styles////////////

export const DropDownContainer = styled.div`
  position: absolute;
  top: 190%;
  left: -10%;
  background-color: #173857;
  width: 180px;
  /* padding: 8px 15px 0 15px; */
  height: ${({ openDropDown }) => (openDropDown ? "auto" : 0)};
  overflow: hidden;
  transition: all 0.5s;
  @media (max-width: 768px) {
    position: static;
    transition: all 0.5s;
    width: 100%;
    padding: 0 0 0 15px;
  }

  p {
    pointer-events: auto;
    @media (min-width: 768px) {
      margin: 10px 15px 10px 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      padding: 0 0px 5px 0;

      /* &::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 0;
        height: 2px;
        background: #f0671f;
        transition: width 0.3s;
      } */
      &:hover::after {
        width: 0;
      }
    }
  }
`;
