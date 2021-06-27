import React from 'react'
import {Main, ProjectImg, Details} from './ProjectDetailsDesign'
import { Container } from '../../utils/container'
import { HeaderText } from '../../utils/text';
import { Underline } from '../../utils/GlobalComponentsStyle';
import ProDemo from '../../assets/images/projects-img/project.png'
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {Projects} from '../../assets/Data/MyData'



 function About(props) {
    return (
        <div>
            <div className="aboutProject">
                                    <HeaderText>{props.header}</HeaderText>
                                    <Underline width="50px" height="5px"/>
                                    <br/>
                                    {props.data.map(item=>(
                                        <p>
                                            <FontAwesomeIcon icon={props.icon}/>{item}
                                        </p>
                                    ))}
                                    
                                </div>
        </div>
    )
}


export default function ProjectDetailsComponents() {
    const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get("id");
        
let data = Projects[0].doneProjects[id-1];
    return (
        <div >
            <Main>
                <br/><br/><br/><br/><br/>
                <Container>
                    <ProjectImg>
                        <HeaderText>{data.title}</HeaderText>
                        <Underline width="50px" height="5px"/>
                        <br/>
                        <div className="imgContainer">
                            <img src={data.img}/>
                        </div>


                    </ProjectImg>
        <br/><br/><br/>
                    <Details>
                        <Grid container>
                            <Grid item sm={6}>
                                <div>
                                    <About header="About Project" data={data.details}/>
                                </div>
                                <br/>
                                <br/>

                                <div>
                                    <About header="Project Specificatoins" data={data.specification} icon={faCheckSquare} />
                                </div>


                                
                            </Grid>

                            <Grid item sm={6}>
                                <div className="info">
                                    <HeaderText>Info</HeaderText>
                                    <Underline width="50px" height="5px"/>
                                    <br/>
                                    <Grid container>
                                        <Grid item sm={6}>
                                            <div className="infoContent">
                                                <p>Type</p>
                                                <p>{data.info.type}</p>
                                            </div>
                                        </Grid>

                                        <Grid item sm={6}>
                                            <div className="infoContent">
                                                <p>Duration</p>
                                                <p>{data.info.duration}</p>
                                            </div>
                                        </Grid>

                                        <Grid item sm={6}>
                                            <div className="infoContent">
                                                <p>Technologies</p>
                                                <p>{data.info.technologies}</p>
                                            </div>
                                        </Grid>

                                        <Grid item sm={6}>
                                            <div className="infoContent">
                                                <p>Platforms</p>
                                                <p>{data.info.platforms}</p>
                                            </div>
                                        </Grid>

                                        <Grid item sm={6}>
                                            <div className="infoContent">
                                                <p>Team</p>
                                                <p>{data.info.team}</p>
                                            </div>
                                        </Grid>

                                       
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Details>
                    <br/><br/>

                    <span className="outter">
                        <button>Visit</button>
                    </span>

                </Container>
            </Main>
            <br/><br/>
        </div>
    )
}
