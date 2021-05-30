import { faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { HeaderText } from '../../../utils/text'
import { ContentHolderSection1 } from '../Section1/Section1Design.style'
import { ContentHolderSection2, Section2Body } from './Section2Design.style'


//importing icons
import Web from './icons/global.png'
import Mobile from './icons/mobile.png'
import Enterprise from './icons/enterprise.png'

export default function Section2() {
    return (
        <div>
            <Section2Body>
                <Container>
                    <HeaderText>AI Platforms</HeaderText>
                    <Grid container>
                        <Grid item sm={4}>
                            <ContentHolderSection2>
                                <div className='icons'>
                                    <img src={Web}/>
                                </div>
                                <p className='header'> Web </p>
                                <p className='content'>
                                    Scalable SaaS applications, e-commerce B2C platforms and web portals build with state of the art technology.
                                </p>
                            </ContentHolderSection2>
                        </Grid>

                        <Grid item sm={4}>
                            <ContentHolderSection2>
                                <div className='icons'>
                                    <img src={Web}/>
                                </div>
                                <p className='header'> Mobile </p>
                                <p className='content'>
                                    Smartphone and tablet cross-platform applications, native iOS and Android apps that react your customers and engage your associates anywhere and everywhere they go.
                                </p>
                            </ContentHolderSection2>
                        </Grid>

                        <Grid item sm={4}>
                            <ContentHolderSection2>
                                <div className='icons'>
                                    <img src={Enterprise}/>
                                </div>
                                <p className='header'> Enterprise </p>
                                <p className='content'>
                                    Sophisticated enterprise environments comprised of a complex mix of applications, APIs, databases and legacy systems made simple.
                                </p>
                            </ContentHolderSection2>
                        </Grid>
                    </Grid>

     

                </Container>
            </Section2Body>
        </div>
    )
}
