import React from 'react'
import { Card1, Card2, Card3 } from './ProjectsCardDesign.stle'
import Pro from '../../assets/images/projects-img/project.png'
// import Pro from '../../assets'
import { Container } from '../../utils/container'
import { useHistory } from 'react-router-dom'




export function ProjectCard1(props) {
    const history = useHistory();

    const goTo =() =>{
        history.push("/doctor?id="+props.id);
    }
    return (
        <div>
            <Card1 onClick={goTo}>
                {/* <Container> */}
                    <div className="card">
                        <div className="image">
                            <img src={props.image} alt="this is iamg"/>
                        </div>
                        <div className="details">
                            <div className="center">
                                <h1>{props.name} <br/> </h1>
                                <p>{props.shorDescription}</p>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Container> */}
                
            </Card1>
        </div>
    )
}


