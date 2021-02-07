import React, { Component } from 'react';  //importing react component to inherit our aboutus class
import aboutusStyles from "./css/aboutus.module.css";  // imporitn css file as aboutusStyles




// this function is responsible for banner area //

function Banner() {
    return(
        <div className={aboutusStyles.bannerBody} >
                <h1 className={aboutusStyles.bannerAlerm}>this area is under development</h1>
                <img src="#"></img>
        </div>
    );
}





// this function is for our story section
function OurStory(){
    return(
        <div>
             <div className={aboutusStyles.stroyContainer}>
                <div className={aboutusStyles.storyRow}>
                    <div className={aboutusStyles.storyPara}>
                        <p>
                            <h3>Our Story</h3>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or-less normal distribution  of letters, as opposed to It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution  of letters, as opposed to It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using  Lorem Ipsum is that it has a more-or-less normal distribution  of letters, as opposed to It is a long established fact that a reader will be distracted by the readable content of a page when  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
                        </p>
                    </div>
                    <div className={aboutusStyles.storyLogo}>
                        <div className={aboutusStyles.img}>
                            <img src="/logo192.png" alt="logo"></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
       
    );
}

//this function is for car section

function Specialist(){
    return(
        <div className={aboutusStyles.TeamBody}>
            <div >
                <div>
                    <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/11/palm-trees-lean-los-angeles-daniel-schludi-t6JpiIWLLp8-unsplash-1068x712.jpg" className={aboutusStyles.TeamImage}></img>
                </div>
            </div>

            <div className={aboutusStyles.TeamText}>
                <p>
                    some thing about this personsome thing about this personsome thing about this personsome thing about this person
                </p>
            </div>
        </div>
    );
}









class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className={aboutusStyles.aboutUs_body}>
                    <div>{Banner()}</div>
                    <div className={aboutusStyles.section}>{OurStory()}</div>
                    <div className={aboutusStyles.section}>
                        <img className={aboutusStyles.groupPhoto} src="https://greatpeopleinside.com/wp-content/uploads/2019/11/team-building.jpg" alt="our team"></img>
                    </div>
                    <div className={aboutusStyles.section}>{Specialist()}</div>
                </div>
            </div>
        );
    }
}

export default AboutUs;