import React, { Component } from 'react';
import Banner from "../../components/Web_development_services/WebDevelopmentBanner.component";
import Description from "../../components/Web_development_services/WebDevelopmentDescription.components";
import Methodology from "../../components/Web_development_services/WebDevelopmentMethodology.components";


class WebDevelopment extends Component {
    render() {
        return (
            <div>
                
                <Banner/>
                <Description/>
                <Methodology/>
            </div>
        );
    }
}

export default WebDevelopment;