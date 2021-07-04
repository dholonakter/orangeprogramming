import React from 'react'
import { Container } from '../../utils/container'
import { HeaderText } from '../../utils/text'
import { StartUpLabelBody } from './StartUpLabelDesign.style'


export default function StartUpLabel() {
    return (
        <div>
            <Container>
                <StartUpLabelBody>
                    <div className="flexContainer">
                        <div className="flexItem">
                            <HeaderText className="header">
                            Interested In Startup Consulting Services?
                            </HeaderText>
                           
                        </div>
                        <div className="flexItem">
                            <span>REQUEST A FREE CONSULTATION</span>
                        </div>
                    </div>
                </StartUpLabelBody>
            </Container>
        </div>
    )
}
