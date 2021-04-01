import React, { Component } from 'react';
import Banner from "../../components/Web_development_services/WebDevelopmentBanner.component";
import Description from "../../components/Web_development_services/WebDevelopmentDescription.components";
import Methodology from "../../components/Web_development_services/WebDevelopmentMethodology.components";
import Navbar from "../../components/Navbar/Navbar.component";

class WebDevelopment extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Description/>
                <Methodology/>
            </div>
        );
    }
}

export default WebDevelopment;