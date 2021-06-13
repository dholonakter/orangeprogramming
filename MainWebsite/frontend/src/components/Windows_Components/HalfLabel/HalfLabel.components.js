import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { Con, HalfLabelBody, MainBody } from './HalfLableDesign.style'

export default function HalfLabel() {
    return (
        <div>
            <MainBody>

            

            <Grid container>
                <Grid item sm = {4}></Grid>
                <Grid className="itm" item sm = {8}>
                    <HalfLabelBody>
                        <Con>
                            <p>
                            Universal Windows Platform apps are applications that can be used across all compatible Microsoft Windows devices, including personal computers, tablets, smartphones, Xbox One, Microsoft HoloLens, and Internet of Things. UWP software is primarily purchased and downloaded via the Microsoft Store
                            </p>
                        </Con>
                       
                       
                    </HalfLabelBody>
                </Grid>
            </Grid>


</MainBody>
        </div>
    )
}
