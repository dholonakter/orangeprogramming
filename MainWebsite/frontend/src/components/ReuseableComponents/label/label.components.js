import { faArrowAltCircleRight, faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../../utils/container'
import { LabelBody } from './labelDesign.style'
import Brain from '../../../assets/images/ai/icons/brain01.png'
import { useHistory } from 'react-router'



export default function Label(props) {
    const history = useHistory();
    const goTo = () => {
        history.push("/contact-us")
    }
    return (
        <div>
            <LabelBody>
                <Container>
                    
                    <Grid container>
                        <Grid className="itm" item sm={6}>
                            <div className="item">
                                <img src={props.logo}/>
                            </div>
                            <div className=" item1">
                                <p>{props.label}</p>
                            </div>
                        </Grid>
                        <Grid className="itm" item sm={6}>
                            <div className="item">
                                <p>
                                    <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                                    
                                </p>
                                
                            </div>
                            <div className="item">
                                <p className="button">
                                    <button onClick={goTo}>Talk Our Expert Now</button>
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    
                </Container>
            </LabelBody>
            
        </div>
    )
}
