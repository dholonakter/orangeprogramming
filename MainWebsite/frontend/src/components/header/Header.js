
import React, { Component } from 'react';  // importing react component to inherit our header class
import styles from "./css/Header.module.css";  //importing css module 
import {NavLink } from 'react-router-dom';   //importing react router to use navlink in navigation area



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
                        <NavLink to="/Services" class="" href="#">Services</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/Projects" class="" href="#">Projects</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/AboutUs" class="" href="#">About Us</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/Gallery" class="" href="#">Gallery</NavLink>
                    </li>
                    <li className={styles.navButton}>
                        <NavLink to="/ContactUs" href="#"><button className={styles.contact}>Contact Us</button></NavLink>
                    </li>   
                </ul>
                
                </nav>
        </div>
    );
}

// navigation area is finished//





// working with main header class //

class Header extends Component {

   
    constructor(){

        super()
        this.state={
            scrolled: styles.main
        }

      

    }
    


    render() {
        return (
            <div  className={ this.state.scrolled}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.logo}> 
                            <img src="https://placehold.it/400x20undefined1"></img>
                        </div>
                        <div className={styles.nav}> {Navigation()}</div>
                       
                    </div>
                </div>    
            </div>
        );
    }
}

export default Header;