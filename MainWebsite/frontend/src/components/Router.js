import React, { Component } from 'react';
import { Route } from 'react-router';
import AboutUs from './AboutUs/AboutUs';

class Router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        );
    }
}

export default Router;