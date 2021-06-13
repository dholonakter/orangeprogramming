import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { CardBody } from './WindowsCardDesign.style'
import Demo from '../../../assets/images/ai/icons/brain01.png'

export default function WindowsCard(props) {
    return (
        <div>
            <CardBody>
                <Container>
                    <Grid container>
                    {
                        props.data.map(item=>(
                            <Grid className="itm" item sm={3}>
                                <div className='body'>
                                    <div>
                                        <img src={item.logo}/>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            </Grid>
                        ))
                    }
                        

                    </Grid>
                </Container>
            </CardBody>
        </div>
    )
}
