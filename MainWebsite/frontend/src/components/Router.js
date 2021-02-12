import React, { Component } from 'react';
import { Route } from 'react-router';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Home from './Home/Home';


class Router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Services" component={Home}/>
                <Route exact path="/projects" component={Home}/>
                <Route exact path="/Aboutus" component={AboutUs}/>
                <Route exact path="/Gallery" component={Home}/>
                <Route exact path="/ContactUs" component={ContactUs}/>
            </div>
        );
    }
}

export default Router;