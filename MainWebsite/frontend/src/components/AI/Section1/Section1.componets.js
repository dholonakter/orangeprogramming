import { faBrain, faCommentAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@material-ui/core'

import React from 'react'
import { Container } from '../../../utils/container'
import { HeaderText } from '../../../utils/text'
import {ContentHolderSection1, Section1Body} from './Section1Design.style'

//importing icons
import ML from './icons/brain.png'
import Chatbot from './icons/chatbot.png'
import BL from './icons/analysis.png'
import CV from './icons/eye.png'
import VA from './icons/microphone.png'
import NLP from './icons/message.png'


import '../../../assets/font/font/flaticon.css'

export default function Section1() {
    return (
        <div>
            <Section1Body>
                <Container>
                <HeaderText>Our AI Development Services</HeaderText>
                <Grid className="container" container >

                    <Grid className='item' item sm={6}> 
                        <ContentHolderSection1>
                            <div className='logo'>
                                <img src={ML}/>
                            </div>
                            <p className='header'>Machine Learning</p>
                            <p className='content'>
                                Our AI Developers use machine learning to build AI solutions that can gather unstructured data and convert it into actionable insights to drive business growth.
                            </p>
                        </ContentHolderSection1>
                    </Grid>

                    <Grid className='item' item sm={6}>
                    <ContentHolderSection1>
                            <div className='logo'>
                                <img src={BL}/>
                            </div>
                            <p className='header'>Business Intellignece</p>
                            <p className='content'>
                                Our AI engineers create and perform strategies to execute optimization, customer analysis, forecasting and perfomance analysis.
                            </p>
                        </ContentHolderSection1>
                    </Grid>

                    <Grid  className='item' item sm={6}>
                    <ContentHolderSection1>
                            <div className='logo'>
                            <img src={NLP}/>                            </div>
                            <p className='header'>Natural Language Processing</p>
                            <p className='content'>
                                With NLP() and NLU(), our AI developers can help organizations analyze customer feedback and sentiment to improve customer engagment and increase business revenue.
                            </p>
                        </ContentHolderSection1>
                    </Grid>

                    <Grid  className='item' item sm={6}>
                    <ContentHolderSection1>
                            <div className='logo'>
                            <img src={CV}/>                            </div>
                            <p className='header'>Computer Vision</p>
                            <p className='content'>
                                Our AI software development experts have experience in developing solutions for the recognition of objects and classification of images using OpenCV.
                            </p>
                        </ContentHolderSection1>
                    </Grid>

                    <Grid className='item' item sm={6}>
                    <ContentHolderSection1>
                            <div className='logo'>
                            <img src={VA}/>                            </div>
                            <p className='header'>Voice Assistant</p>
                            <p className='content'>
                                Our AI developers also build voice assistants using NLP and voice recongnition that enhance brand awareness and boost producitvity through voice search.
                            </p>
                        </ContentHolderSection1>
                    </Grid>

                    <Grid className='item' item sm={6}>
                    <ContentHolderSection1>
                            <div className='logo'>
                            <img src={Chatbot}/>                            </div>
                            <p className='header'>ChatBot Development</p>
                            <p className='content'>
                                We engineer Chatbot solutions that act like human. Our artificial Intellignece software development team develops chatbots that facilitate personalized interaction to increase loyality and customer retention.
                            </p>
                        </ContentHolderSection1>
                    </Grid>
                    
                </Grid>
                </Container>
                
            </Section1Body>
        </div>
    )
}
