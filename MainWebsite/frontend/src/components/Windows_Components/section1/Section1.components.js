import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { GridSystem, Section1Body } from './Section1Design.style'
import Demo from './debug.png'



export default function Section1() {
    return (
        <div>
            <Container>
                <Section1Body>
                    <p className="title">Give Your Business a professional Edge with Windows Application</p>
                    <p className="content">
                        We develop smart windows apps by eliminating obstacles that are faced by startups and enterprise worldwide. By using new - age functionalities we enable clients to save time and smart windows apps by eliminating obstacles that are faced by startups and enterprise worldwide. By using new - age functionalities we enable clients to const
                    </p>
                    <GridSystem>
                        <Grid container>
                            <Grid item sm = {3}>
                                <div className='body'>
                                    <div>
                                        <img src={Demo}/>
                                    </div>
                                    <p>Window App Features</p>
                                </div>
                            </Grid>
                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Window App Dev</p>
                            </div>
                            </Grid>
                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Window Apps</p>
                                </div>
                            </Grid>
                            <Grid item sm = {3}>
                            <div className='body'>
                            <div>
                            <img src={Demo}/>
                                    </div>
                                    <p>Window Portals</p>
                            </div>
                            </Grid>
                        </Grid>
                    </GridSystem>
                </Section1Body>
            </Container>
            
        </div>
    )
}
