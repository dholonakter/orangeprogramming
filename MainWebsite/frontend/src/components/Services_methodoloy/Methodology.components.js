import Slider from "react-slick";
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState, Component } from 'react';
import {Container} from '../../utils/container';
import { Root, RootO, IconBox, MainComputer, Monitor, Keyboard, Player } from "./Methodology.style";

import {Data} from '../../assets/Data/MyData'



class Methodology extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {

        
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }
    render() {
        var settings ={
    
            
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    
                  }
                },
                {
                  breakpoint: 300,
                  settings: {
                    slidesToShow: 2,
                   
                  }
                }
              ]
        };
        

        return (
            <div >
                <Root>
                    <Container maxWidth='lg'>
                        <Typography align="center" display="block" variant="h3"> {this.props.dbName[0].header} methodology </Typography>
                        
                            <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={6}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            autoplay={true}
                            
                            {...settings}
                        
                            >

                              {this.props.dbName[0].methodology.map(item=>(
                                <div key={item.id}>
                                       
                                  <IconBox   style={{background:'#fff'}} > 
                                      <div className='logoHolder'>
                                          {item.logo}                   
                                      </div>
                                  </IconBox>
                                  <Typography  align="center" color="textSecondary" variant="body2" style={{padding: '7px 0 0 0'}}> {item.header} </Typography>
                         
                                </div>
                              ))}
                              
                               
                            </Slider>
                      
                    </Container>
                </Root>
                 <RootO>
                     <Container> 

        <Slider
          asNavFor={this.state.nav2}
          fade={true}
          ref={slider => (this.slider1 = slider)}
        >
            {this.props.dbName[0].methodology.map(item=>(
                <div key={item.id}>
                    <Grid  container>
                         <Grid item md={6}>
                            <Typography   align="left" variant="h4"> {item.header} </Typography>
                             <Typography  align="justify" variant="body2">  {item.content}  </Typography>
                         </Grid>
                        <Grid className='right' item md={6}>
                          <MainComputer>
                            <Monitor>
                              <Player>
                              <img className='computerPlayerContent' src={item.img}></img>            
                              </Player>
                            </Monitor>
                            <Keyboard/>
                          </MainComputer>
                         </Grid>

                    </Grid>
          </div>
            ))}
          
          
        </Slider>


        </Container>
                 </RootO>
        
            </div>
        );
    }
}

export default Methodology;