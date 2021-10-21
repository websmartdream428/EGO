import React from "react";
import CustomInput from "../../customs/CustomInput";
import NormalButton from "../../customs/NormalButton";
import {
  CompetitionDiv,
  CompetitionSubDiv,
  CptEventDiv,
  CptTitle,
} from "./StyledHome";

const CompetitionEvent = () => {
  return (
    <CompetitionDiv>
      <CompetitionSubDiv>
        <CptTitle>Join in a competition</CptTitle>
        <CptEventDiv>
          <CustomInput />
          <NormalButton />
        </CptEventDiv>
      </CompetitionSubDiv>
      <CompetitionSubDiv>
        <CptTitle>Create a new competition</CptTitle>
        <CptEventDiv>Create a new competition</CptEventDiv>
      </CompetitionSubDiv>
    </CompetitionDiv>
  );
};

export default CompetitionEvent;
