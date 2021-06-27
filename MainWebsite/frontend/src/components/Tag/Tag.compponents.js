import React from 'react'
import { TagBody, TagBox } from './TagDesign.style'
import { Container } from '../../utils/container'
import { Grid } from '@material-ui/core'



export default function Tag() {
    return (
        <div>
            <TagBody>
                <Container>
                    <div className="flexBox">


                            <TagBox>Demo</TagBox>
                            <TagBox>Demo</TagBox>
                            <TagBox>Demo</TagBox>
                       
                    </div>
                    
                            
                </Container>
            </TagBody>
        </div>
    )
}
