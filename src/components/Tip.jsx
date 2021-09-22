import { useState } from "react";
import styled from "@emotion/styled";
import InputElement from "./fields/Input";

const TipElement = styled.section`
  padding: 8px 8px 8px 8px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.darkNeutralColor};
  border-radius: 4px;
  text-align: center;
  max-width: 100px;
  width: 30%;
  height: 40px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.darkNeutralColor : theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.darkNeutralColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightNeutralColor};
    color: ${({ theme }) => theme.colors.darkNeutralColor};
  }
`;

const ButtonElement = styled.button`
  padding: 8px 8px 8px 8px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.lightNeutralColor};
  border-radius: 4px;
  text-align: center;
  max-width: 100px;
  width: 30%;
  height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkNeutralColor};
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colors.lightNeutralColor};
`;

const Tip = (props) => {
  const [showInput, setShowInput] = useState(false);
  const { value, isSelected, onHandleClick, isCustom } = props;

  return (
    <>
      {!isCustom && (
        <TipElement
          isSelected={isSelected}
          onClick={(e) => onHandleClick(value)}
        >
          {value}%
        </TipElement>
      )}
      {isCustom && !showInput && (
        <ButtonElement onClick={(e) => setShowInput(true)}>
          Custom
        </ButtonElement>
      )}
      {isCustom && showInput && (
        <InputElement
          inputMode="numeric"
          maxw={"calc(33% - 10px)"}
          value={value}
          onHandleChange={(value) => {
            const newValue = value.replace(/[^0-9.]/g, "");
            onHandleClick(parseInt(newValue, 10));
          }}
        />
      )}
    </>
  );
};

export default Tip;
