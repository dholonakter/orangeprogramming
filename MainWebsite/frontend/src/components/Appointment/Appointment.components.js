import React from 'react'
import Calender from '../Calendar/Calender.components'
import { Container } from '../../utils/container'
import { AppointmentBody, ExitBtn, PopUpBody } from './AppoinmentDesign.style'
import { Grid } from '@material-ui/core'
import { HeaderText } from '../../utils/text'
import { ContactForm } from '../ContactusBanner/ContactusBanner.component'

export default function Appointment(props) {
    return (props.trigger)?(
        <div>
            <PopUpBody>
                <AppointmentBody>
                    <ExitBtn>
                        <button onClick = {()=>props.setTrigger(false)}>X</button>
                    </ExitBtn>
                  
                        
                            <Grid container>
                                <Grid className="item" item sm={6}> 
                                    <Calender/> 
                                </Grid>
                                <Grid className="item" item sm={6}>
                                    <HeaderText className="header">Get An Appointment</HeaderText>
                                    <ContactForm/>
                                    
                                </Grid>
                            </Grid>
                    
                  
                </AppointmentBody>
            </PopUpBody>
            
        </div>
    ):"";
}
