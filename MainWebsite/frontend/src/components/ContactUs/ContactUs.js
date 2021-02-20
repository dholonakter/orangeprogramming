import React, { Component } from 'react'; //importing react component to inherit ContactUs class
import contactStyles from './css/ContactUs.module.css'; //importing css file as contactStyles
import {Link } from 'react-router-dom';
import map from './map.jpeg'







// this function is responsible for banner part

function Banner() {
    return(
        <div className={contactStyles.bannerBody}>

            <div className={contactStyles.bannerParent}>
                        
                            <div className={contactStyles.bannerChild}>
                                <Email/>
                            </div>
             </div>
        </div>
    );
}



// this function is responsible for second section or contact info part

function ContactInfo() {
    return(
        <div className={contactStyles.contactInfoBody}>
            <div className={contactStyles.contactInfoItem1}>
                <div className={contactStyles.contactInfoMap}>

                    <img src={map}></img>

                </div>
            </div>
            <div className={contactStyles.contactInfoItem2}>
                <div className={contactStyles.contactInfoItem2Body}>
                    <h2>Contact Info</h2>
                    <p>
                        <b>Address:</b><br></br>
                        34 Street name, City Name here, United States <br></br>
                        You can visit us anytime between 9:00 - 17:00(GMT +1), 6 days in a week.<br></br><br></br>
                        <b>Phone</b><br></br>
                        +1234656789 <br></br>
                        You can call us 24 hours in a day and 7 days in a week. We are available to meet you. <br></br><br></br>
                        <b>Email:</b><br></br>
                        info@orangeprogramming.com
                    </p>
                </div>
                
            </div>
        </div>
    );
}


// this function is responsible for email form


function Email() {
    return(
        <div className={contactStyles.emailBody}>
            
            <form>
                <h2>Get in Touch</h2>
                <input className={contactStyles.input} placeholder="Name*"></input>
                <input className={contactStyles.input} placeholder="Your Mail Address*"></input>
                <input className={contactStyles.input} placeholder="Subject"></input>
                <textarea className={contactStyles.textarea} placeholder="Your Message..."></textarea>
                <div className={contactStyles.emailSubmit}>
                    <input className={contactStyles.submit} type="submit" value="Send"></input>
                </div>
                
            </form>

        </div>
    );
}


// this function is responsible for social media link
function SocialMedia() {
    return(
        <div>
                        <div className={contactStyles.socialLink}>
                            <h2>Find us In Social Media</h2>
                            <div className={contactStyles.socialLinkMain}>
                                <div className={contactStyles.socialLinkFlexbox}>
                                    <div className={contactStyles.socialLinkFlexItem} > <Link to="#"><img src="/AddedIcon/facebook.png"></img></Link>  </div> 
                                    <div className={contactStyles.socialLinkFlexItem} > <Link to="#"><img src="/AddedIcon/instagram.png"></img></Link>  </div>
                                    <div className={contactStyles.socialLinkFlexItem} > <Link to="#"><img src="/AddedIcon/linkedin.png"></img></Link>  </div>
                               
                                </div>
                                <div className={contactStyles.socialLinkFlexbox}>
                                    <div className={contactStyles.socialLinkFlexItem} > <Link to="#"><img src="/AddedIcon/pinterest.png"></img></Link>  </div>
                                    <div className={contactStyles.socialLinkFlexItem} > <Link to="#"><img src="/AddedIcon/telegram.png"></img></Link>  </div>
                                    <div className={contactStyles.socialLinkFlexItem} > <Link to="#"><img src="/AddedIcon/twitter(1).png"></img></Link>  </div>
                                
                                </div>
                                
                            </div>
                        </div>
        </div>
    );
}

class ContacUs extends Component {
    render() {
        return (
            <div>
                <div className={contactStyles.contacBody}>
                    <div>
                        <Banner/>
                        
                    </div>
                    <div className={contactStyles.section}>
                        <ContactInfo/>
                    </div>
                    <div className={contactStyles.section}>
                        
                        <SocialMedia/>
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}



export default ContacUs;




