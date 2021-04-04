import React, { useEffect, useState } from 'react';
import { Background, Image, Title, ImageHolder } from "./Style/WebDevelopmentBanner.style";
import Banner from './Images/banner1.png';
import Banner600px from "./Images/banner600px.png";
import Banner768px from "./Images/banner768px.png";
import {Container} from '../../utils/container';
import { Grid } from '@material-ui/core';
import Table from './Images/table.png';






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
                <Container >
                 
                 <Grid className="con" container>
                    <Grid className='left' item sm='7'>
                        <p>web development</p>
                    </Grid>
                    <Grid className='right' item sm='5'>
                    
                        <img className='image' src={Table}></img>
                    </Grid>
                 </Grid>
                 </Container>
            </Background>    
        </div>
    )
}

















