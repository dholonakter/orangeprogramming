import Slider from "react-slick";
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState, Component } from 'react';
import {Container} from '../../utils/container';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import BuildIcon from '@material-ui/icons/Build';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import CodeIcon from '@material-ui/icons/Code';
import LockIcon from '@material-ui/icons/Lock';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import { Root, RootO, IconBox, MainComputer, Monitor, Keyboard, Player } from "./Style/WebDevelopmentMethodology.style";
import img1 from './Images/Method_Image/img1.jpeg';
import img2 from './Images/Method_Image/img2.jpeg';
import img3 from './Images/Method_Image/img3.jpeg';
import img4 from './Images/Method_Image/img4.jpeg';
import img5 from './Images/Method_Image/img5.jpeg';
import img6 from './Images/Method_Image/img6.jpeg';



class WebDevelopmentMethodology extends Component {

    constructor(props) {
        super(props);
        this.methodData = [
            {
                            name: 'Goals',
                            logo: <BorderAllIcon/>,
                            text: "Goals is wroking properly Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
                            photo: img1,
                            id:'1',
                            isActive: true
                            
                
                        },
                        {
                            name: 'Strategy',
                            logo:  <BuildIcon/>,
                            text: " wow, i am working good,,,,Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
                            photo: img2,
                            id:'2',
                            isActive: false
                
                            
                        },
                        {
                            name: 'Design',
                            logo:  <CropOriginalIcon/>,
                            text: "Hi i am design, and i am good with this,   Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
                            photo: img3,
                            id:'3',
                            isActive: false
                        },
                        {
                            name: 'Development',
                            logo: <CodeIcon/>,
                            text: "it  is perfect time to do code....Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
                            photo: img4,
                            id:'4',
                            isActive: false
                        },
                        {
                            name: 'Quality',
                            logo: <LockIcon/>,
                            text: "we make sure u quality Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
                            photo: img5,
                            id:'5',
                            isActive: false
                            
                        },
                        {
                            name: 'Delivery',
                            logo: <MergeTypeIcon/>,
                            text: "tomorrowDefininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
                            photo: img6,
                            id:'6',
                            isActive: false
                            
                        },
        ]
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
                        <Typography align="center" display="block" variant="h3"> web development methodology </Typography>
                        
                            <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={6}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            autoplay={true}
                            
                            {...settings}
                        
                            >
                              
                                {this.methodData.map(item=>(
                                    <div>
                                        {/* <Grid key={item.id} className='gridItem' item sm={2}> */}
                                            <IconBox     style={{background:'#fff'}} > 
                                                <div className='logoHolder'>
                                                    {item.logo}                   
                                                </div>
                                            </IconBox>
                                            <Typography  align="center" color="textSecondary" variant="body2" style={{padding: '7px 0 0 0'}}> {item.name} </Typography>
                                     
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
            {this.methodData.map(item=>(
                <div>
                    <Grid  container>
                         <Grid item md='5'>
                            <Typography   align="left" variant="h4"> {item.name} </Typography>
                             <Typography  align="justify" variant="body2">  {item.text}  </Typography>
                         </Grid>
                        <Grid className='right' item md='7'>
                          <MainComputer>
                            <Monitor>
                              <Player>
                              <img className='computerPlayerContent' src={item.photo}></img>            
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

export default WebDevelopmentMethodology;