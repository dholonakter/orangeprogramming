import React from "react";
import { UnderConstructionContainer } from "./UnderConstruction.style";
import img from "../../assets/images/undr-construction.png";
import { PrimaryButton } from "../../utils/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
const UnderConstruction = () => {
  const history = useHistory();
  return (
    <>
      <UnderConstructionContainer>
        <img src={img} alt="" />
        <h1>PAGE UNDER CONSTRUCTION</h1>

        <PrimaryButton onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} /> &nbsp; GO BACK
        </PrimaryButton>
      </UnderConstructionContainer>
    </>
  );
};

export default UnderConstruction;
