import React from "react";
import styled, { css } from "styled-components";
import MobileBackground from "../assets/bg-sidebar-mobile.svg";
import DesktopBackground from "../assets/bg-sidebar-desktop.svg";
import { useNavigate } from "react-router-dom";
import { FieldErrors } from "react-hook-form";
import { FormTypes } from "../types";
import useButtonStore from "../stores/useButtonStore";
import { useFormStore } from "../stores/useFormStore";

interface PaginationProps {
  activeButton: boolean;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  errors: FieldErrors<FormTypes>;
}

function Pagination(props: PaginationProps) {
  const { activeButton, setActiveButton, pathname, errors } = props;

  const navigate = useNavigate();

  const user = useFormStore((state) => state.user);
  const planButton = useButtonStore((state) => state.selectedButton);

  const goToFinishPage = () => {
    setActiveButton(true);
    if (
      (errors.name && errors.email && errors.number) ||
      (user.name.length <= 0 &&
        user.email.length <= 0 &&
        user.number.length <= 0)
    ) {
      alert("Please fill personal information to proceed");
    } else if (
      planButton === "Arcade" ||
      planButton === "Advanced" ||
      planButton === "Pro"
    ) {
      navigate("/finish");
    } else {
      alert("Please choose you plan to proceed");
    }
  };

  return (
    <Container>
      <Buttons>
        <ButtonContainer>
          <StyledButton
            activeButton={activeButton && pathname === "/"}
            pathname={pathname}
            onClick={() => {
              setActiveButton(true);
              navigate("/");
            }}
          >
            1
          </StyledButton>
          <ButtonInfo>
            <Step>Step 1</Step>
            <StepName>Your Info</StepName>
          </ButtonInfo>
        </ButtonContainer>
        <ButtonContainer>
          <StyledButton
            type="submit"
            activeButton={activeButton && pathname === "/plan"}
            pathname={pathname}
            onClick={() => {
              setActiveButton(true);
              navigate("/plan");
            }}
          >
            2
          </StyledButton>
          <ButtonInfo>
            <Step>Step 2</Step>
            <StepName>Select Plan</StepName>
          </ButtonInfo>
        </ButtonContainer>
        <ButtonContainer>
          <StyledButton
            activeButton={activeButton && pathname === "/addons"}
            pathname={pathname}
            onClick={() => {
              setActiveButton(true);
              navigate("/addons");
            }}
          >
            3
          </StyledButton>
          <ButtonInfo>
            <Step>Step 3</Step>
            <StepName>Add-ons</StepName>
          </ButtonInfo>
        </ButtonContainer>
        <ButtonContainer>
          <StyledButton
            activeButton={activeButton && pathname === "/finish"}
            pathname={pathname}
            onClick={goToFinishPage}
          >
            4
          </StyledButton>
          <ButtonInfo>
            <Step>Step 4</Step>
            <StepName>Summary</StepName>
          </ButtonInfo>
        </ButtonContainer>
      </Buttons>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 375px;
  width: 100%;
  height: 172px;
  display: flex;
  justify-content: center;
  padding-top: 32px;

  @media screen and (min-width: 1024px) {
    background-image: url(${DesktopBackground});
    height: 100%;
    min-width: 274px;
    max-width: 274px;
  }
`;

const Buttons = styled.div`
  width: 180px;
  height: 33px;
  display: flex;
  column-gap: 16px;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    row-gap: 32px;
    width: 153px;
    height: 228px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

interface StyledButtonProps {
  activeButton: boolean;
  pathname: string;
}

const StyledButton = styled.button(
  (props: StyledButtonProps) => css`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: ${props.activeButton ? "1px solid #BEE2FD" : "1px solid #ffffff"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props.activeButton ? "#022959" : "#FFFFFF"};
    background: ${props.activeButton ? "#BEE2FD" : "inherit"};
  `
);

const ButtonInfo = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
`;

const Step = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  color: #abbcff;
`;

const StepName = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;
