import React from "react";
import { ErrorContainer } from "./Error.style";
import { PrimaryButton } from "../../utils/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";



const Error = () => {
  const history = useHistory();
  return (
    <>
      <ErrorContainer>
 
        <h1>PAGE NOT FOUND, PLEASE GO BACK TO CONTINUE</h1>

        <PrimaryButton onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} /> &nbsp; GO BACK
        </PrimaryButton>
      </ErrorContainer>
    </>
  );
};

export default Error;
