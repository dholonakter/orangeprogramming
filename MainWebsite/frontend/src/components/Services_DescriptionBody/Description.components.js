import React from 'react'
import {Body, Img} from './DescriptionDesign.style'
import {Container} from '../../utils/container';
import { Grid, Typography } from '@material-ui/core';




export default function Description(props) {
    let index = 0;
    return (
        <div>
            <Body>
                <Container>
                    {
                        
                        props.dbName.map(item=>(
                            
                            <Grid style={{flexDirection: props.direction}} className='flexbox' container spacing={3}>
                                <Grid   item md={7}>
                                        {props.dbName[index].content.map(item=>(

                                        
                                                <Typography align="justify" variant="body2">
                                                        {item}        
                                                </Typography>
                                        
                                        ))}
                                    
                                </Grid>

                                <Grid className="imageGrid"  item md={5} >
                                    <Img  src={props.dbName[0].photo}></Img>         
                                </Grid>
                                <div style={{display: 'none'}}>{index++}</div>
                               
                            </Grid>
                        ))
                        
                    }
                    
                </Container>
            </Body>
        </div>
    )
}
