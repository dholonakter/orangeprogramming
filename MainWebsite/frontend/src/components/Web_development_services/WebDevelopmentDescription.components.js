import { Grid,  CardHeader, Button, ThemeProvider, makeStyles, Box, Typography, CardMedia } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {Container} from '../../utils/container';
import { Img, Body } from "./Style/WebDevelopmentDescription.style";
import Description from './Images/description.jpg'

const WebDevelopmentDescription = () => {
    return (
        <Body>
            <Container maxWidth='lg'>
                <Grid container spacing={3} >
                    <Grid   item md={7}>
                        <Typography align="justify" variant="body2"  >
                        First impressions are everything – and a strategic, well-designed website is the best way to ensure your business puts its best foot forward. A business website plays a major role in depicting your intentions and goals. Just a company profile is worthless and so we help you build an informative and impressive website to draw the attention of your valuable customers.  
<br/><br/>
At Orange Programming, we design and deliver websites that work hard to put you in the best possible light. Get a visually stunning website that offers the ultimate user experience. Our web designers and developers produce interfaces that are as beautiful as they are functional. 
<br/><br/>
As a leading web development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating business websites according to the demands. We offer custom website development services including WordPress Development, e-Commerce Website Development, Magento Development, Custom Web App Development, Joomla Development, Content Management System, Mobile App Development, Mobile Responsive Website, Internet Marketing & Digital Marketing. Our web specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead. 
                         </Typography>
                    </Grid>
                    <Grid className="imageGrid"  item md={5} >
                        <Img  src={Description}></Img>         
                    </Grid>
                </Grid>
            </Container>
        </Body>
    );
};

export default WebDevelopmentDescription;