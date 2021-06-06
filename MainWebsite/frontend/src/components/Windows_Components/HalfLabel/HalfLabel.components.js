import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { HalfLabelBody } from './HalfLableDesign.style'

export default function HalfLabel() {
    return (
        <div>


            <Grid container>
                <Grid item sm = {5}></Grid>
                <Grid item sm = {7}></Grid>
            </Grid>



            {/* <Container>
                <HalfLabelBody>
                    <Grid container>
                        <Grid item sm = {5}></Grid>
                        <Grid item sm = {7}>
                            <div className='body'>
                                <p>We build solutions that caters to a range of industry</p>
                            </div>
                        </Grid>
                    </Grid>
                </HalfLabelBody>
            </Container> */}
        </div>
    )
}
