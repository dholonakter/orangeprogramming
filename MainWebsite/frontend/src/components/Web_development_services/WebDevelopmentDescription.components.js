import { Grid,  CardHeader, Button, ThemeProvider, makeStyles, Box, Typography, CardMedia } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {Container} from '../../utils/container';
import { Img, Body } from "./Style/WebDevelopmentDescription.style";
import Description from './Images/description.jpg'

import {Data} from '../../assets/Data/MyData'


const WebDevelopmentDescription = (props) => {
    return (
        <Body>
            <Container maxWidth='lg'>
                <Grid container spacing={3} >
                    <Grid   item md={7}>
                        {Data[props.index][0].content.map(item=>(

                          
                                <Typography align="justify" variant="body2">
                                        {item}
                                        
                                </Typography>
                           
                         ))}
                       
                    </Grid>
                    <Grid className="imageGrid"  item md={5} >
                        <Img  src={props.img}></Img>         
                    </Grid>
                </Grid>
            </Container>
        </Body>
    );
};

export default WebDevelopmentDescription;