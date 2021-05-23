import React, { useEffect, useState } from 'react';
import { Background } from './BannerDesign.style'
import {Container} from '../../utils/container';
import { Grid } from '@material-ui/core';




export default function Banner(props) {
    return (
        <div>
            <Background>
                <Container>
                    <Grid className="con" container>
                        <Grid className='left' item sm={7}>
                            <p>{props.dbName[0].header}</p>
                        </Grid>
                        <Grid className='right' item sm={5}>
                        
                            <img className='image' src={props.dbName[0].bannerImg}></img>
                        </Grid>
                    </Grid>
                    
                </Container>
            </Background>
        </div>
    )
}
