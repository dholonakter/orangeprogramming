import React, { Component } from 'react';
import footerStyles from "./css/footer.module.css";
// import FooterList from "./FooterList";




function Logo() {
    return(
        <div>
            <img src="/logo192.png"></img>
        </div>
    );
}



function FooterList(props) {
    return(
        <div>
            <div className={footerStyles.listBody}>
                <ul>
                    
                    <li className={footerStyles.listItem}><h3>{props.header}</h3></li>
                   
                    
        
                    <li className={footerStyles.listItem}>Web design</li>
                    <li className={footerStyles.listItem}>Web Development</li>
                    <li className={footerStyles.listItem}>Android Development</li>
                    <li className={footerStyles.listItem}>ISO Development</li>
                    <li className={footerStyles.listItem}>Responsive design</li>
                    

                </ul>
            </div>
        </div>
    );
}













class Footer extends Component {

    constructor(){
        super()

        this.state = {
            
        }
    }


    render() {
        return (
            <div className={footerStyles.main}>
                <div className={footerStyles.container}>
                    <div className={footerStyles.row}>

                        <div className={footerStyles.logo}>
                        <Logo></Logo>    
                        </div> 
                        <div className={footerStyles.list}>
                                <FooterList header="Services"></FooterList>
                                <FooterList header="Technology"></FooterList>
                                <FooterList header="Platforms"></FooterList>
                                <FooterList header="Contact"></FooterList>    
                        </div>
                        
                        
                        
                    </div>
                
                </div>


                
            </div>
        );
    }
}

export default Footer;