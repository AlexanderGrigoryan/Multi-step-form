import styled, { css } from "styled-components";
import planCategories from "../data/planCategories.json";
import Toggle from "../components/Toggle";
import useButtonStore from "../stores/useButtonStore";
import { Link } from "react-router-dom";

interface PlanProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function Plan(props: PlanProps) {
  const { isChecked, setIsChecked } = props;

  const {
    selectedButton,
    setSelectedButton,
    setSelectedButtonMonthlyPrice,
    setSelectedButtonYearlyPrice,
  } = useButtonStore();

  const handleButtonClick = (
    button: string,
    monthlyPrice: number,
    yearlyPrice: number
  ) => {
    setSelectedButton(button);
    setSelectedButtonMonthlyPrice(monthlyPrice);
    setSelectedButtonYearlyPrice(yearlyPrice);
  };

  return (
    <Container>
      <Content isChecked={isChecked}>
        <Title>Select your plan</Title>
        <Text>You have the option of monthly or yearly billing.</Text>
        <ChoosePlan>
          <Buttons>
            {planCategories.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() =>
                    handleButtonClick(
                      item.categoryName,
                      item.price.month,
                      item.price.year
                    )
                  }
                  active={selectedButton === item.categoryName}
                  isChecked={isChecked}
                >
                  <CategoryImage src={item.image} />
                  <CategoryInfo>
                    <Category>{item.categoryName}</Category>
                    <CategoryPrice>
                      ${isChecked ? item.price.year : item.price.month}/
                      {isChecked ? "yr" : "mo"}
                    </CategoryPrice>
                    {isChecked ? <Discount>2 months free</Discount> : null}
                  </CategoryInfo>
                </Button>
              );
            })}
          </Buttons>
          <Toggle checked={isChecked} setChecked={setIsChecked} />
        </ChoosePlan>
      </Content>
      <NextStepContainer>
        <BackLink to="/">Go Back</BackLink>
        <NextLink to="/addons">
          <NextButton>Next Step</NextButton>
        </NextLink>
      </NextStepContainer>
    </Container>
  );
}

export default Plan;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    max-width: 450px;
  }
`;

interface ContentProps {
  isChecked: boolean;
}

const Content = styled.div(
  (props: ContentProps) => css`
    min-width: 343px;
    width: 100%;
    height: ${props.isChecked ? "566px" : "500px"};
    border-radius: 10px;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    padding: 32px 24px;

    @media screen and (min-width: 1024px) {
      padding: 56px 0 0 0;
    }
  `
);

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

const ChoosePlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media screen and (min-width: 1024px) {
    row-gap: 32px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 22px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    column-gap: 18px;
    margin-top: 35px;
  }
`;

interface ButtonProps {
  active: boolean;
  isChecked: boolean;
}

const Button = styled.button(
  (props: ButtonProps) => css`
    min-width: 295px;
    width: 100%;
    height: ${props.isChecked ? "99px" : "77px"};
    border-radius: 8px;
    cursor: pointer;
    padding: 0 16px;
    display: flex;
    align-items: center;
    column-gap: 14px;
    border: ${props.active ? "1px solid #483EFF" : "1px solid #d6d9e6"};
    background: #ffffff;

    @media screen and (min-width: 1024px) {
      min-width: 138px;
      max-width: 138px;
      height: 183px;
      flex-direction: column;
      row-gap: 39px;
      align-items: baseline;
      padding: 20px 16px;
    }
  `
);

const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
`;

const Category = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #022959;
`;

const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  align-items: baseline;
`;

const CategoryPrice = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #9699aa;
`;

const Discount = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #022959;
  margin-top: -4px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
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
  transition: all ease 0.3;

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
