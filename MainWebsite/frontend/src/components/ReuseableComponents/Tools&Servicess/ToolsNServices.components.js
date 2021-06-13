import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { HeaderText } from '../../../utils/text'
import {SectionBody, ContentHolder} from "./ToolsNServicessDesign.style"
import {AIData} from '../../../assets/Data/MyData'
import { Underline } from '../../../utils/GlobalComponentsStyle'



export default function ToolsNServices(props) {
    return (
        <div>
            <SectionBody Padding={props.Padding?props.Padding:"50px"}>
                <Container>
                    <HeaderText> {props.title} </HeaderText>
                    <Underline width='50px' height='5px'/>
                    <Grid container className="container">

                        {
                            props.data.map(item=>(
                                <Grid className="item" item sm={props.item?props.item:6}>
                                    <ContentHolder contentPadding={props.contentPadding}>
                                        <div className='logo'>
                                            <img src={item.logo}/>
                                        </div>
                                        <p className='header'> {item.header} </p>
                                        <p className='content'>{item.text}</p>
                                    </ContentHolder>
                                </Grid>
                            ))
                        }

                    </Grid>
                </Container>
            </SectionBody>
        </div>
    )
}



// AIData[0].services   hints of using data