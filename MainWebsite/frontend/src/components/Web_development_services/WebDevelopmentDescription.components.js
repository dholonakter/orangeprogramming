import { Grid,  CardHeader, Button, ThemeProvider, makeStyles, Box, Typography, CardMedia } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container'
import { Img, Body } from "./Style/WebDevelopmentDescription.style";
import Description from './Images/description.jpg'

const WebDevelopmentDescription = () => {
    return (
        <Body>
            <Container maxWidth='lg'>
                <Grid container spacing={3} >
                    <Grid   item md={7}>
                        <Typography align="justify" variant="body2"  >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
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