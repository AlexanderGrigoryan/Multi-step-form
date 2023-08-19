import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useCheckboxStore } from "../stores/useCheckboxStore";

const addonsList = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: {
      month: "+$1/mo",
      year: "+$10/yr",
    },
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      month: "+$2/mo",
      year: "+$20/yr",
    },
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      month: "+$2/mo",
      year: "+$20/yr",
    },
  },
];

interface AddonsProps {
  isChecked: boolean;
 
}

function Addons(props: AddonsProps) {
  const { isChecked} = props;

  const { checkboxes, toggleCheckbox } = useCheckboxStore();

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
                    onChange={() => toggleCheckbox(index)}
                  />
                  <AddonService>
                    <ServiceName>{item.name}</ServiceName>
                    <ServiceDescription>{item.description}</ServiceDescription>
                  </AddonService>
                </AddonInfo>
                <ServicePrice>
                  {isChecked ? item.price.year : item.price.month}
                </ServicePrice>
              </Addon>
            );
          })}
        </AddonsContainer>
      </Content>
      <NextStepContainer>
        <BackLink to="/plan">Go Back</BackLink>
        <NextLink to="/finish">
          <NextButton>Next Step</NextButton>
        </NextLink>
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
`;

const Content = styled.div`
  width: 343px;
  height: 383px;
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding: 32px 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 9px;
  color: #022959;
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
`;

interface AddonProps {
  checkboxClicked: boolean;
}

const Addon = styled.div(
  (props: AddonProps) => css`
    width: 295px;
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
`;

const ServiceDescription = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #9699aa;
`;

const ServicePrice = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #483eff;
`;

const NextStepContainer = styled.div`
  width: 375px;
  height: 72px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: -16px;
`;

const BackLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #9699aa;
  text-decoration: none;
`;

const NextLink = styled(Link)`
  position: absolute;
  top: 16px;
  right: 16px;
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
`;
