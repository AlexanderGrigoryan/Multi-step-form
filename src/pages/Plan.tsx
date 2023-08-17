import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";
import Toggle from "../components/Toggle";
import { useEffect, useState } from "react";

function Plan() {
  const [isChecked, setIsChecked] = useState(false);
  const [chosenPlan, setChosenPlan] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log(chosenPlan);
  const planCategories = [
    {
      categoryName: "Arcade",
      price: {
        month: "$9/mo",
        year: "$90/yr",
      },
      image: ArcadeIcon,
    },
    {
      categoryName: "Advanced",
      price: {
        month: "$12/mo",
        year: "$120/yr",
      },
      image: AdvancedIcon,
    },
    {
      categoryName: "Pro",
      price: {
        month: "$15/mo",
        year: "$150/yr",
      },
      image: ProIcon,
    },
  ];

  const [activeStates, setActiveStates] = useState<boolean[]>(
    Array(planCategories.length).fill(false)
  );

  useEffect(() => {
    const storedIndex = localStorage.getItem("chosenButtonIndex");
    if (storedIndex !== null) {
      setActiveStates((prevActiveStates) =>
        prevActiveStates.map((_, index) => index.toString() === storedIndex)
      );
    }
  }, []);

  return (
    <Container>
      <Content>
        <Title>Select your plan</Title>
        <Text>You have the option of monthly or yearly billing.</Text>
        <ChoosePlan>
          <Buttons>
            {planCategories.map((item, index) => {
              return (
                <Button
                  key={index}
                  isActive={activeStates[index]}
                  onClick={() => {
                    if (item.categoryName === "Arcade" && !isChecked) {
                      setChosenPlan(9);
                    } else if (item.categoryName === "Arcade" && isChecked) {
                      setChosenPlan(90);
                    } else if (item.categoryName === "Advanced" && !isChecked) {
                      setChosenPlan(12);
                    } else if (item.categoryName === "Advanced" && isChecked) {
                      setChosenPlan(120);
                    } else if (item.categoryName === "Pro" && !isChecked) {
                      setChosenPlan(15);
                    } else {
                      setChosenPlan(150);
                    }
                    
                    const newActiveStates = Array(planCategories.length).fill(
                      false
                    );
                    newActiveStates[index] = true;
                    setActiveStates(newActiveStates);

                    localStorage.setItem("chosenButtonIndex", index.toString());
                  }}
                >
                  <CategoryImage src={item.image} />
                  <CategoryInfo>
                    <Category>{item.categoryName}</Category>
                    <CategoryPrice>
                      {isChecked ? item.price.year : item.price.month}
                    </CategoryPrice>
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
`;

const Content = styled.div`
  width: 343px;
  height: 500px;
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

const ChoosePlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 22px;
`;

interface ButtonProps {
  isActive: boolean;
}

const Button = styled.button(
  (props: ButtonProps) => css`
    width: 295px;
    height: 77px;
    border-radius: 8px;
    cursor: pointer;
    padding: 0 16px;
    display: flex;
    align-items: center;
    column-gap: 14px;
    border: ${props.isActive ? "1px solid #483EFF" : "1px solid #d6d9e6"};
    background: #ffffff;
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
