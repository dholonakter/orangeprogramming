
import React, { Component } from 'react';  // importing react component to inherit our header class
import styles from "./css/Header.module.css";  //importing css module 
import {Link, NavLink } from 'react-router-dom';   //importing react router to use navlink in navigation area
import facebook from './Icons/facebook.png';
import linkedIn from './Icons/linkedin.png';
import instagram from './Icons/instagram.png';
import twitter from './Icons/twitter.png';
import logo from './Icons/logo.png';


//this function is responsible for contact us area of top section//
function Contact() {
    return(
        <div className={styles.contactBodyMain}>
            <div className={styles.contactBody}>
                <div className={styles.contactItem1}>
                    
                    <div className={styles.emailLogo}></div>
                    <div className={styles.contactText}> info@orange-programming.com</div>
                </div>
                <div className={styles.contactItem2}>
                    <div className={styles.phoneLogo}></div>
                    <div className={styles.contactText}> +31 xxxxxxxxx</div>
                </div>
                <div className={styles.contactItem3}>
                    <div className={styles.socialLogo}>
                        <Link to="www.facebook.com"> <img src={facebook} className={styles.image}></img> </Link>  
                        <Link to="www.facebook.com"> <img src={linkedIn} className={styles.image}></img> </Link>
                        <Link to="www.facebook.com"> <img src={instagram} className={styles.image}></img> </Link>
                        <Link to="www.facebook.com"> <img src={twitter} className={styles.image}></img> </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    );
    
}


// navigation area for header section made with fucntional component //
function Navigation() {
    return(
        <div>
            <nav>
                
                <ul className={styles.navBar}>
                    <li className={styles.navItem}>
                        <NavLink  to="/"  href="#">Home</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/Services"  href="#">Services</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/Projects" href="#">Projects</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/AboutUs" href="#">About Us</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/Gallery"  href="#">Gallery</NavLink>
                    </li>
                    <li className={styles.navButton}>
                        <NavLink to="/ContactUs" href="#"><button className={styles.contact}>Contact Us</button></NavLink>
                    </li>   
                </ul>
                
                </nav>
        </div>
    );
}




function wid() {
    var b = window.width;
    alert("dkf");
}




// working with main header class //

class Header extends Component {

// this arrow function is responsible for changing the header backgronud with scrolling
     changingBackground = () => {
    
        var a =  window.scrollY;
        if(a <= 100){
             this.setState({scrolled:styles.main})
            
        }
        else{
            this.setState({scrolled:styles.main_scrolled})
            
        }
    }

//this function is responsible for 
  
tabletDisplay = () => {
    var width = window.width
}

    
    constructor(){

        super()
        this.state={
            scrolled: styles.main,
            name: 5
          
        }

      

    }
    



    render() {

    document.addEventListener("scroll", this.changingBackground)
        return (
            <div  className={ this.state.scrolled}>
               <Contact></Contact>
                <div className={styles.container}>    
                    <div className={styles.row}>
                        <div className={styles.logo}> 
                          <Link to="/"> <img src={logo}></img></Link>  
                        </div>
                        <div className={styles.nav}> {Navigation()}</div>
                       
                    </div>
                    
                </div>    
            </div>
        );
    }
}

export default Header;