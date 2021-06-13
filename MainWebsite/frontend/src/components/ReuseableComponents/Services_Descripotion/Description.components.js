import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { Container } from '../../../utils/container'
import { Underline } from '../../../utils/GlobalComponentsStyle';
import { HeaderText } from '../../../utils/text';
import {Body, Img} from './DescriptionDesign.style'

export default function Description(props) {
    let index = 0;
    return (
        <div>
                <Body>
                    <Container>
                        <HeaderText> {props.title} </HeaderText>
                        <Underline display={props.title?"block":"none"} width="50px" height="5px"/>
                    
                            
                            <Grid style={{flexDirection: props.direction}} className='flexbox' container spacing={3}>
                                <Grid   item md={7}>
                                        {props.data.map(item=>(

                                        
                                                <Typography align="justify" variant="body2">
                                                        {item}        
                                                </Typography>
                                        
                                         ))} 
                                    
                                </Grid>

                                <Grid className="imageGrid"  item md={5} >
                                    <Img  src={props.photo}></Img>         
                                </Grid>
                                <div style={{display: 'none'}}>{index++}</div>
                               
                            </Grid>
                        
                        
                
                    </Container>
                </Body> 
        </div>
    )
}
