import React, { useEffect, useState } from 'react';
import { Background, Image, Title, ImageHolder } from "./Style/WebDevelopmentBanner.style";
import Banner from './Images/banner.png';
import { Container } from '@material-ui/core';
import Banner600px from "./Images/banner600px.png";
import Banner768px from "./Images/banner768px.png";







export default function WebDevelopment (){
    const ControllingBanner =() =>{
       
        const [size, setSize] = useState([window.innerWidth]);
        useEffect(() => {
            const handleSize = () => {
                setSize([window.innerWidth]);
            };
            window.addEventListener('resize', handleSize);
        }, []);
        
        if(size<=600){
            
             return Banner600px;
        }
        else if(size<= 991 && size>600){
            return Banner768px;
        }
        else{
            return Banner;
        }
    }

    
    return(
        
        <div >
            <Background>
            <Container maxWidth='lg'>
                 <Title>
                     
                     <p>
                        Web Development
                    </p>
                    
                </Title>
                 </Container>
            
                <ImageHolder>
                    <Image  src={ControllingBanner()}></Image>          
                </ImageHolder>
            </Background>    
        </div>
    )
}

















