import { Container } from '../../utils/container'
import React, { useState } from 'react'
import { OuterRing, RingBody, Box } from './RingStyle'
import ReactAnime from 'react-animejs'
// import Anime from 'react-anime'



export default function Ring() {

    
    const btn = () =>{
        const myButton = document.querySelector(".button");
        Anime({
            target: myButton,
            width: '100%',
            scale: {
                delay: 800,
                value: 1.5
            },
            duration: 1500
        })
    }
// myButton.addEventListener('mouseover', btn)
const {Anime, stagger} = ReactAnime
const[list, setList] = useState(['iPhone', 'Google', 'Xbox'])

let animeProps = {
    opacity: [0,1],
    translateY: [-64, 0],
    delay: (el, i) => i * 200
};
// var path = Anime.path('.path')

    return (
        <div>
            <RingBody>
                <Container>

                    {/* <OuterRing> */}
                         {/* Loading... */}
                         <span></span>
                         {/* <Box/> */}
                         {/* <Box/> */}
                         {/* <Box/> */}
                         <Box id='Box'/>
                    {/* </OuterRing> */}
                    {/* <Box/> */}
                    <Anime
                    initial={
                      [
                      //  path =  anime.path('.path'),
                      {
                        
                        target: "#Box",
                        // translateX: path('x'),
                        // translateY: path('y'),
                        // rotate: path('0deg'),
                        easing: 'linear',
                        duration: 2000,
                        loop: true
                      }
                    ]}
                    >

                    </Anime>
                    <svg className='path'>
                        <path stroke="red" fill="none" d="M 50 450 A 50 50 0 1 1 750 450 Z"/>
                    </svg>
{/* <Anime
  initial={[
    {
      targets: "#Box",
     
      easing:'linear',
      translateX: 250,
      duration: 3500,
      direction: 'alternate',
      loop: true
    }
  ]}
>
  <Box  id='Box'/>
</Anime> */}










                </Container>
            </RingBody>
        </div>
    )
}
