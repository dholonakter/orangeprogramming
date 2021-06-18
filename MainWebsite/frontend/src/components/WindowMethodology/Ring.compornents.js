import { Container } from '../../utils/container'
import React, { useState } from 'react'
import { OuterRing, RingBody, Box } from './RingStyle'
import ReactAnime from 'react-animejs'
// import Anime from 'react-anime'



export default function Ring() {

    


// var path = Anime.path('.path')

    return (
        <div>
            <RingBody>
                <Container>

                    



                <div className="typing-container">
                  <span id="sentence" className="sentence">this </span>
                  <span className="input-cursor">header</span>
                </div>






                </Container>
            </RingBody>
        </div>
    )
}
