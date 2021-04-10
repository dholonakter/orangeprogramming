import React from 'react';
import Iframe from 'react-iframe';
import { Container } from "../../utils/container";



export default function Blog() {
    var style = {
        width: ' 100%',
        height: '500px'
    }
    return (
        <div>
            <Container>
                <Iframe  
                    url="https://daily-tareque.blogspot.com/"
                    width="100%"
                    height="1000px"
                    display="initial"
                />
            </Container>
            
        </div>
    )
}
