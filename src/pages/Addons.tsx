import styled, { css } from "styled-components";
import addonsList from "../data/addonsList.json";
import useButtonStore from "../stores/useButtonStore";
import { useCheckboxStore } from "../stores/useCheckboxStore";
import { Link, useNavigate } from "react-router-dom";
import { useFormStore } from "../stores/useFormStore";
import { FieldErrors } from "react-hook-form";
import { FormTypes } from "../types";

interface AddonsProps {
  isChecked: boolean;
  errors: FieldErrors<FormTypes>;
}

function Addons(props: AddonsProps) {
  const { isChecked, errors } = props;
  
  const { checkboxes, toggleCheckbox, addToBase } = useCheckboxStore();
  const planButton = useButtonStore((state) => state.selectedButton);
  const user = useFormStore((state) => state.user);
  
  const navigate = useNavigate();
  
  const addonOnChange: (
    index: number,
    name: string,
    monthlyPrice: number,
    yearlyPrice: number
  ) => void = (
    index: number,
    name: string,
    monthlyPrice: number,
    yearlyPrice: number
  ) => {
    toggleCheckbox(index);
    addToBase(index, name, monthlyPrice, yearlyPrice);
  };

  const goToFinishPage = () => {
    if (
      (errors.name && errors.email && errors.number) ||
      (user.name.length <= 0 &&
        user.email.length <= 0 &&
        user.number.length <= 0)
    ) {
      alert("Please fill personal information");
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
      <Content>
        <Title>Pick add-ons</Title>
        <Text>Add-ons help enhance your gaming experience.</Text>
        <AddonsContainer>
          {addonsList.map((item, index) => {
            return (
              <Addon checkboxClicked={checkboxes[index]} key={index}>
                <AddonInfo>
                  <ChooseAddon
                    checked={checkboxes[index]}
                    type="checkbox"
                    id={`track-checkbox-${index}`}
                    onChange={() =>
                      addonOnChange(
                        index,
                        item.name,
                        item.price.month,
                        item.price.year
                      )
                    }
                  />
                  <AddonService>
                    <ServiceName>{item.name}</ServiceName>
                    <ServiceDescription>{item.description}</ServiceDescription>
                  </AddonService>
                </AddonInfo>
                <ServicePrice>
                  +${isChecked ? item.price.year : item.price.month}/
                  {isChecked ? "yr" : "mo"}
                </ServicePrice>
              </Addon>
            );
          })}
        </AddonsContainer>
      </Content>
      <NextStepContainer>
        <BackLink to="/plan">Go Back</BackLink>
        <NextButton onClick={goToFinishPage}>Next Step</NextButton>
      </NextStepContainer>
    </Container>
  );
}

export default Addons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 450px;
  }
`;

const Content = styled.div`
  min-width: 343px;
  width: 100%;
  height: 383px;
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding: 32px 24px;

  @media screen and (min-width: 1024px) {
    padding: 56px 0 0 0;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 9px;
  color: #022959;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
    margin-bottom: 11px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #9699aa;
`;

const AddonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 22px;

  @media screen and (min-width: 1024px) {
    row-gap: 16px;
    margin-top: 35px;
  }
`;

interface AddonProps {
  checkboxClicked: boolean;
}

const Addon = styled.label(
  (props: AddonProps) => css`
    min-width: 295px;
    width: 100%;
    height: 62px;
    padding: 21px 16px;
    border-radius: 8px;
    border: ${props.checkboxClicked
      ? "1px solid #483EFF"
      : "1px solid #d6d9e6"};
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media screen and (min-width: 1024px) {
      height: 81px;
    }
  `
);
const AddonInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const ChooseAddon = styled.input`
  width: 20px;
  height: 20px;
  background: #483eff;
  cursor: pointer;
`;

const AddonService = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const ServiceName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #022959;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #9699aa;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const ServicePrice = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #483eff;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const NextStepContainer = styled.div`
  min-width: 375px;
  width: 100%;
  height: 72px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;

  @media screen and (min-width: 1024px) {
    position: relative;
    padding: 16px 0;
    left: 16px;
    margin-top: 121px;
  }
`;

const BackLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #9699aa;
  text-decoration: none;
  transition: all ease 0.3s;

  @media screen and (min-width: 1024px) {
    margin: -16px;
    font-size: 16px;
  }

  &:hover {
    color: #022959;
  }
`;

const NextButton = styled.button`
  width: 97px;
  height: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: #022959;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  position: absolute;
  top: 16px;
  right: 16px;
  transition: all ease 0.3s;

  @media screen and (min-width: 1024px) {
    width: 123px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
  }

  &:hover {
    background: #164a8a;
  }
`;
