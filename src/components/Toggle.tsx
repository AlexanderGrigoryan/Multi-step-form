import React from "react";
import styled, { css } from "styled-components";

interface ToggleProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  chosenPlan: string;
}

function Toggle(props: ToggleProps) {
  const { checked, setChecked, chosenPlan } = props;

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <Container>
      <Monthly checked={checked}>Monthly</Monthly>
      <ToggleContainer>
        <ToggleInput
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <Slider>
          <Knob checked={checked} />
        </Slider>
      </ToggleContainer>
      <Yearly checked={checked}>Yearly</Yearly>
    </Container>
  );
}

export default Toggle;

const Container = styled.div`
  width: 295px;
  height: 48px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
`;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #022959;
  transition: background-color 0.4s;
  border-radius: 14px;
  cursor: pointer;
`;
interface KnobProps {
  checked: boolean;
}

const Knob = styled.span(
  (props: KnobProps) => css`
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.4s;
    transform: ${props.checked ? "translateX(20px)" : "translateX(0)"};
  `
);

interface MonthlyProps {
  checked: boolean;
}

const Monthly = styled.p(
  (props: MonthlyProps) => css`
    font-size: 14px;
    font-weight: 500;
    color: ${!props.checked ? "#022959" : "#9699AA"};
  `
);

interface YearlyProps {
  checked: boolean;
}

const Yearly = styled.p(
  (props: YearlyProps) => css`
    font-size: 14px;
    font-weight: 500;
    color: ${props.checked ? "#022959" : "#9699AA"};
  `
);
