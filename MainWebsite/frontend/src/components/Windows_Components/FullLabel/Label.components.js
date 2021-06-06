import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { LabelBody } from './LabelDesign.style'
import Demo from './debug.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


export default function Label() {
    return (
        <div>
            <LabelBody>
                
                <Container>
                    <Grid container>
                        <Grid className="flexBody" item sm = {7}>
                            <div className='flexItem'>
                                <img src={Demo}/>
                            </div>
                            <div className='flexItem'>
                                <p>
                                    Let's start design an amazing Windows app, design with us
                                </p>
                            </div>
                        </Grid>
                        <Grid className="flexBody" item sm = {5}>
                        <div className='flexItem'>
                                <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x"/>
                            </div>
                            <div className='flexItem'>
                                <button>Talk Our Expert Now</button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </LabelBody>
        </div>
    )
}
