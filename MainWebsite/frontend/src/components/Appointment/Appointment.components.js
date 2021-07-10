import React from 'react'
import Calender from '../Calendar/Calender.components'
import { Container } from '../../utils/container'
import { AppointmentBody, ExitBtn, PopUpBody, Header, ConForm } from './AppoinmentDesign.style'
import { Grid } from '@material-ui/core'
import { HeaderText } from '../../utils/text'
// import { ContactForm } from '../ContactusBanner/ContactusBanner.component'
import Modal from '@material-ui/core/Modal';
import { PrimaryButton } from "../../utils/buttons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () =>{
    return(
        <div>
            <ConForm>
            <form >
                <input placeholder="Name *" type="text" name="name" required />
               
                <input
                  placeholder="Company *"
                  type="text"
                  name="company"
                  required
                />
                
                <input
                  placeholder="Email *"
                  type="email"
                  name="email"
                  required
                />
          

                <input
                  placeholder="Subject *"
                  type="text"
                  name="subject"
                  required
                />
              

                <textarea
                  placeholder="Description *"
                  rows="4"
                  name="message"
                  required
                />
               

                <PrimaryButton type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} /> SEND
                </PrimaryButton>
              </form>{" "}

            </ConForm>
        </div>
    )
}


export default function Appointment(props) {
    return (props.trigger)?(
        <div>
            <PopUpBody>
                <AppointmentBody>
                    
                  
                        <Header>
                            <div className="left">
                            <HeaderText className="header">
                                Get An Appointment 
                                <ExitBtn>
                                    <button onClick = {()=>props.setTrigger(false)}>X</button>
                                </ExitBtn>
                            </HeaderText>

                            </div>
                            {/* <div className="right">
                                
                            </div> */}
                        </Header>


                            <Grid className="container" container>
                                <Grid className="item" xs={12} item sm={6}> 
                                    <Calender /> 
                                </Grid>
                                <Grid className="item" item xs={12} sm={6}>
                                
                                    <ContactForm/>
                                    
                                </Grid>
                            </Grid>

                                    
                  
                </AppointmentBody>
            </PopUpBody>
            
        </div>
    ):"";
}
