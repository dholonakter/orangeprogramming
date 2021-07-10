import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { Section1Body } from './Section1Design.style'
import { Underline } from '../../../utils/GlobalComponentsStyle'



export default function Section1(props) {
    return (
        <div>
            <Container>
                <Section1Body>
                    <p className="title">{props.header}</p>
                    <Underline width="40vw" margin="auto"/>
                    <p className="content">
                        {props.content}
                    </p>
                </Section1Body>
            </Container>
            
        </div>
    )
}
