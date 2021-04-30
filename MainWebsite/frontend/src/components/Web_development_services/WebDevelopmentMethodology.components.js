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
                            text: "Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.",
                            photo: img2,
                            id:'2',
                            isActive: false
                
                            
                        },
                        {
                            name: 'Visual Design',
                            logo:  <CropOriginalIcon/>,
                            text: "Design determines the visual aesthetic of a website and creates the first impression on people. Our adept web designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of web services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your website. Visual appeal + user-friendly design = the difference between an average, lackluster website and one that makes a memorable impression.  ",
                            photo: img3,
                            id:'3',
                            isActive: false
                        },
                        {
                            name: 'Development',
                            logo: <CodeIcon/>,
                            text: "The stage where a website is crafted with utmost essential and fine elements. We cater to strong web development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free page loading, as well as a user-friendly web structure. Whether you need just a revamping of your prevailing website or a full-scale flash application development, our passion is to make the best out of everything. ",
                            photo: img4,
                            id:'4',
                            isActive: false
                        },
                        {
                            name: 'Quality Testing',
                            logo: <LockIcon/>,
                            text: "The time to check and review the quality and credibility of the website. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your website is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ",
                            photo: img5,
                            id:'5',
                            isActive: false
                            
                        },
                        {
                            name: 'Service After Delivering',
                            logo: <MergeTypeIcon/>,
                            text: "Our service is not for one time, we will provide every types of technical support as long as your website will be active. With the updating of any security problem, we will update your website as well.",
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
                                    <div key={item.id}>
                                        {/* <Grid key={item.id} className='gridItem' item sm={2}> */}
                                            <IconBox   style={{background:'#fff'}} > 
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
                <div key={item.id}>
                    <Grid  container>
                         <Grid item md={6}>
                            <Typography   align="left" variant="h4"> {item.name} </Typography>
                             <Typography  align="justify" variant="body2">  {item.text}  </Typography>
                         </Grid>
                        <Grid className='right' item md={6}>
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