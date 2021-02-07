import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  styles from "./css/navigation.module.css";

class Navigation extends Component {
    
    render() {
        
        return (
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
                        <NavLink to="/ContactUs" class="" href="#"><button className={styles.contact}>Contact Us</button></NavLink>
                    </li>
                    
                </ul>
                
                </nav>
            </div>
        );
    }
}

export default Navigation;