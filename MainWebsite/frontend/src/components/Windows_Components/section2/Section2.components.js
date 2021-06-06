import React from 'react'
import { Container } from '../../../utils/container'
import { Section2Body } from './Section2Design.style'
import Demo from '../section1/debug.png'
import { Grid } from '@material-ui/core'

export default function Section2() {
    return (
        <div>
            
            <Container>
                <Section2Body>
                <Grid container>
                            <Grid item sm = {3}>
                                <div className='body'>
                                    <div>
                                        <img src={Demo}/>
                                    </div>
                                    <p>Healthcare</p>
                                </div>
                            </Grid>
                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Education</p>
                            </div>
                            </Grid>
                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Transportation</p>
                                </div>
                            </Grid>

                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Finance</p>
                            </div>
                            </Grid>

                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Retail</p>
                            </div>
                            </Grid>

                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Real State</p>
                            </div>
                            </Grid>

                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Travel</p>
                            </div>
                            </Grid>

                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Wellness & Fitness</p>
                            </div>
                            </Grid>

                        </Grid>
                </Section2Body>
            </Container>
        </div>
    )
}
