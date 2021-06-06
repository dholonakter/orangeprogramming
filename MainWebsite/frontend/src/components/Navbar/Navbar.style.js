import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrap = styled.div`
  background: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "#173857" : ""};
  box-shadow: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "0 1px 6px 0 rgb(32 33 36 / 28%)" : ""};
  margin: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "0 auto" : "40px auto"};
  padding: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "5px 0" : "3px 0"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  transition: all 0.3s;
`;

export const NavbarContainer = styled.div`
  /* padding: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "5px 0" : "0px 0"}; */
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  .hamburger__icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      font-size: 28px;
      transition: all 0.3s;
      color: #f0671f;
    }
  }

  @media (min-width: 2200px) {
    padding: ${({ navbarBackground, navHeightBg }) =>
      navbarBackground || navHeightBg ? "10px 0" : "25px 0"};
  }
`;

export const NavLogo = styled.img`
  width: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "140px" : "160px"};
  height: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "60px" : "70px"};
  padding: ${({ navbarBackground, navHeightBg }) =>
    navbarBackground || navHeightBg ? "4px" : "0px"};

  transition: all 0.5s;
  cursor: pointer;

  @media (min-width: 2200px) {
    width: ${({ navbarBackground, navHeightBg }) =>
      navbarBackground || navHeightBg ? "175px" : "205px"};
    height: ${({ navbarBackground, navHeightBg }) =>
      navbarBackground || navHeightBg ? "80px" : "95px"};
  }

  @media (max-width: 1200px) {
    width: 140px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
  }
`;

export const NavMenusWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  @media (max-width: 1030px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    transform: ${({ NavbarOpen }) =>
      NavbarOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    padding: 30px;
    width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    height: 100vh;
    background-color: #173857;
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
`;

export const NavMenusContainer = styled.div`
  @media (min-width: 769px) {
    height: ${({ navbarBackground, navHeightBg }) =>
      navbarBackground || navHeightBg ? "55px" : "70px"};
    display: felx;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: block;
    padding-bottom: 25px;
  }

  .nav__sub__menus_wrap {
    display: none;
  }

  &:hover > .nav__sub__menus_wrap {
    display: block;
  }
  button {
    text-transform: uppercase;
    background-color: #f0671f;
    color: #ffff;
    cursor: pointer;
    &:hover {
      background: transparent;
      border: 2px solid #f0671f;
      color: #f0671f;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const activeClassName = "nav-item-active";

export const NavItems = styled(NavLink).attrs({ activeClassName })`
  text-decoration: inherit;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 13px;
  transition: all 0.5s;

  @media (min-width: 2200px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
  }

  &::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 0;
    height: 2px;
    background: #f0671f;
    transition: width 0.3s;

    @media (max-width: 768px) {
      height: 1px;
      background-color: rgba(255, 255, 255, 0.25);
      width: 100%;
    }
  }
  &:hover::after {
    width: 100%;
  }
  &.${activeClassName} {
    &::after {
      width: 100%;
      @media (max-width: 768px) {
        background-color: #f0671f;
      }
    }
  }
`;

export const NavSubMenusWrap = styled.div`
  position: absolute;
  background-color: #173857;
  margin-top: 12px;
  width: 170px;
  font-size: 12px;

  @media (min-width: 1700px) {
    width: 10vw;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    margin-left: 0px;
    margin-top: 0px;
  }
`;

export const NavSubMenusContainer = styled.div`
  /* padding: 5px 10px; */
  margin: 10px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.5s;

  .nav__sub__menu {
    /* background-color: red; */
    padding-bottom: 5px;

    &::after {
      @media (max-width: 768px) {
        margin-top: 5px;
      }
    }
  }

  a {
    /* padding-bottom: 18px; */
  }

  @media (max-width: 768px) {
    border-bottom: 0;
    margin: 10px 0 0 10px;
  }
`;
