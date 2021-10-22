import React from "react";
import styled from "styled-components";

const CustomInput = () => {
  return (
    <InputDiv>
      <Label>asdf</Label>
      <Input type="text" />
    </InputDiv>
  );
};

export default CustomInput;

const InputDiv = styled.div`
  border: 1px solid yellow;
  border-radius: 5px;
  padding: 5px;
`;

const Label = styled.div`
  font-size: 10px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  outline: none;
  color: white;
`;
