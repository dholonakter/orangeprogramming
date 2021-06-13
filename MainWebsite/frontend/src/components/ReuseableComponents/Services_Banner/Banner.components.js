import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { Underline } from '../../../utils/GlobalComponentsStyle'
import { BannerBody, GridSystem, Overlay, Title } from './BannerDesign.style'
import {AIData} from '../../../assets/Data/MyData'




export default function Banner(props) {
    return (
        <div>
            <BannerBody>
                <Overlay>
                <Container>
                    
                    <Title> <span>{props.header}</span></Title>
                    <Underline width="40vw" margin='auto'/>
                    <GridSystem>
                        <Grid className='con' container>
                            <Grid item sm = {6} className="left">
                                <p>{props.text}</p>
                            </Grid>
                            <Grid item sm = {6} className="right">
                                <img className='image' src={props.image}/>
                            </Grid>
                        </Grid>
                    </GridSystem>

                </Container>
                </Overlay>
                
            </BannerBody>
        </div>
    )
}
