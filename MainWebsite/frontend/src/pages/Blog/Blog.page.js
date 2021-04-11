import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';
import { Container } from "../../utils/container";



export default function Blog() {
    var link = "https://daily-tareque.blogspot.com/";
    var style = {
        width: ' 100%',
        height: window.innerHeight,
        // paddingTop: '50px'
    }
    return (
        <div>
            <Container style={style}>
                
            </Container>
            
        </div>
    )
}
