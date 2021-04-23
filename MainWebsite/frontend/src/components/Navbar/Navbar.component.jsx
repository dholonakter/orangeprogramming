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
import {  SonData} from "../Dependancy/Dependancies";

const Navbar = (props,{ noBg }) => {
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

  var pathList = ['/ai', '/ios', '/blockchain', '/android', '/iOS', '/cloud', '/blog', '/mobile-developments', '/windows-application', '/windows']




  const background = () => {
    var check = pathList.includes(pathname);
    if(check){
      return "rgb(23, 56, 87)";
    }else{
        return "";
    }
  }
 








  const a = [];
  a.push(document.getElementById('tarek'))




 const gf = () => {
   if(pathname == '/home/'){
     console.log('matched')
     var element = props.name;
    // abs.scrollIntoView();
    // window.scrollTo(0, 1500);
    // abs.scrollTo(0, 400)
    // alert(abs)



//     var xPosition = 0;
//     var yPosition = 0;


//     while(element) {
//       xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//       yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//       element = element.offsetParent;
//   }

// console.log(xPosition)

    // console.log(abs)
    //  console.log(abs.getBoundingClientRect().top)
  
   }else{
     console.log('not matched')
   }
 }



















  return(
    <div onLoad={gf()}>
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

    </div>
  );
};

export default Navbar;
