import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Container } from "../../../utils/container";
import { LabelBody } from "./LabelDesign.style";
import Demo from "./debug.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Appointment from "../../Appointment/Appointment.components";

export default function Label({ serviceName }) {
  const [popUpValue, setPopUpValue] = useState(false);

  return (
    <div>
      <LabelBody>
        <Container>
          <Grid container>
            <Grid item sm={7}>
              <div className="flexItem">
                <p>
                  Interested In {serviceName ? serviceName : ""} Consulting
                  Services?{" "}
                </p>
              </div>
            </Grid>
            <Grid item sm={5}>
              <div className="flexItem">
                <button onClick={() => setPopUpValue(true)}>
                  REQUEST A FREE CONSULTATION{" "}
                  <FontAwesomeIcon icon={faArrowRight} />{" "}
                </button>
              </div>
            </Grid>
          </Grid>

          <Appointment trigger={popUpValue} setTrigger={setPopUpValue} />
        </Container>
      </LabelBody>
    </div>
  );
}
