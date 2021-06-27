import React from 'react'
import { OurProjectBody } from './OurProjectsDesign.style'
import { Container } from '../../utils/container'
import { HeaderText } from '../../utils/text';
import { Underline } from '../../utils/GlobalComponentsStyle';
import Tag from '../Tag/Tag.compponents';
import { ProjectCard1 } from '../ProjectsCard/ProjectCard.components';
import { Grid } from '@material-ui/core';







export default function OurProjects(props) {
    return (
        <div>
            <OurProjectBody>
                
                <Container>
                    <HeaderText>What We Have Done</HeaderText>
                    <Underline width="50px" height="5px"/>
                    <br/>
                    {/* <Tag></Tag> */}
                    <br/>

                    <div className="gridDisplay">

                        {props.data.map(item=>(
                            <div className="gridItem">
                                <ProjectCard1 id={item.id} image={item.img} name={item.title} shorDescription={item.shortDescription}/>
                            </div>
                        ))}

                    </div>

                       

                    
                </Container>
            </OurProjectBody>
        </div>
    )
}
