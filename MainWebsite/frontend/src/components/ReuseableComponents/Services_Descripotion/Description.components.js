import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { Container } from '../../../utils/container'
import { Underline } from '../../../utils/GlobalComponentsStyle';
import { HeaderText } from '../../../utils/text';
import {Body, Img} from './DescriptionDesign.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import ReactDom from 'react-dom';

{/* <FontAwesomeIcon icon={faCheckSquare}/> */}
export default function Description(props) {
    let index = 0;

    const settings = {
        dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      };



  
    

    return (
        <div>
                <Body Weight={props.weight}>
                    <Container>
                        <HeaderText> {props.title} </HeaderText>
                        <Underline display={props.title?"block":"none"} width="50px" height="5px"/>
                    
                            
                            <Grid style={{flexDirection: props.direction}} className='flexbox' container spacing={3}>
                                <Grid   item md={7}>
                                    <Slider style={{display: props.slidShow?'none':'block'}} disabled {...settings}>
                                        {props.data.map(item=>(

                                            <div>
                                                <Typography id='myTag' align="justify" variant="body2">
                                                     <FontAwesomeIcon icon={props.icons} size="x"/>  {item}        
                                                </Typography>
                                            </div>
                                                
                                          
                                                
                                        
                                         ))} 

                                    </Slider>

                                            {/* this area is for disabled slidshow */}

                                            <Typography style={{display: props.description?"block":"none"}} align="justify" variant="body2">{props.description}</Typography>

                                    {props.data.map(item=>(

                                        <div style={{display: props.slidShow?'block':'none'}} >
                                            <Typography align="justify" variant="body2">
                                                <FontAwesomeIcon icon={props.icons} size="x"/>  {item}        
                                            </Typography>
                                        </div>
                                            
                                        // 
                                            

                                    ))}

                                </Grid>

                                <Grid className="imageGrid"  item md={5} >
                                    <Img  src={props.photo}></Img>         
                                </Grid>
                                <div style={{display: 'none'}}>{index++}</div>
                               
                            </Grid>
                        
                
                        
                    </Container>
                </Body> 
        </div>
    )
}