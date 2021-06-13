import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { Section1Body } from './Section1Design.style'
import { Underline } from '../../../utils/GlobalComponentsStyle'



export default function Section1() {
    return (
        <div>
            <Container>
                <Section1Body>
                    <p className="title">Give Your Business a professional Edge with Windows Application</p>
                    <Underline width="40vw" margin="auto"/>
                    <p className="content">
                        We develop smart windows apps by eliminating obstacles that are faced by startups and enterprise worldwide. By using new - age functionalities we enable clients to save time and smart windows apps by eliminating obstacles that are faced by startups and enterprise worldwide. By using new - age functionalities we enable clients to const
                    </p>
                </Section1Body>
            </Container>
            
        </div>
    )
}
