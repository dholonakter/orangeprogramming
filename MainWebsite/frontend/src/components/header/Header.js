
import React, { Component } from 'react';  // importing react component to inherit our header class
import styles from "./css/Header.module.css";  //importing css module 
import {NavLink } from 'react-router-dom';   //importing react router to use navlink in navigation area
// import ReactDOM  from 'react-dom';


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
// var ck = 42;

// function dm() {
    
//     var a =  window.scrollY;
//     // document.getElementById("demo").innerHTML = a;
//     var x = document.getElementById("demo");
//     if(a <= 100){
//          document.getElementById("demo").innerHTML = "flase";
//         //  document.getElementById("demo").className
//          ck = "woking";
//     }
//     else{
//          document.getElementById("demo").innerHTML = "true";
//          ck= "not";
//     }
// }










// working with main header class //

class Header extends Component {

// this arrow function is responsible for changing the backgronud with scrolling
     changingBackground = () => {
    
        var a =  window.scrollY;
        if(a <= 100){
             this.setState({scrolled:styles.main})
            
        }
        else{
            this.setState({scrolled:styles.main_scrolled})
            
        }
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
            <div id="m "  className={ this.state.scrolled}>

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