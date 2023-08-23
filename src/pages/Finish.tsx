import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useButtonStore from "../stores/useButtonStore";
import { useCheckboxStore } from "../stores/useCheckboxStore";
import { useFormStore } from "../stores/useFormStore";
import { FormTypes } from "../types";
import { FieldErrors } from "react-hook-form";

interface FinishProps {
  isChecked: boolean;
  errors: FieldErrors<FormTypes>;
}

function Finish(props: FinishProps) {
  const { isChecked, errors } = props;

  const navigate = useNavigate();

  const {
    selectedButton,
    setSelectedButton,
    selectedButtonMonthlyPrice: monthlyPrice,
    selectedButtonYearlyPrice: yearlyPrice,
  } = useButtonStore();

  const { infoAboutCheckboxes, deleteFromBase: deleteInfoFromArray } =
    useCheckboxStore();

  const { user, updateUser } = useFormStore();

  const clearValues = () => {
    if (
      (errors.name && errors.email && errors.number) ||
      (user.name.length <= 0 &&
        user.email.length <= 0 &&
        user.number.length <= 0)
    ) {
      alert("Please fill personal information and select your plan to proceed");
      navigate("/");
    } else {
      setSelectedButton("");
      deleteInfoFromArray();
      updateUser({ ...user, name: "", email: "", number: "" });
      navigate("/thankyou");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  };

  interface SumPricesType {
    monthlyPrice: number;
    yearlyPrice: number;
  }

  function sumPrices(arr: SumPricesType[]) {
    let sumMonth = 0;
    let sumYear = 0;

    arr.forEach((item) => {
      sumMonth += item.monthlyPrice;
      sumYear += item.yearlyPrice;
    });

    return { sumMonth, sumYear };
  }

  const total = sumPrices(infoAboutCheckboxes);

  return (
    <Container>
      <Content>
        <Title>Finishing up</Title>
        <Text>Double-check everything looks OK before confirming.</Text>
        <TotalPrice>
          <ChosenPlan>
            <PlanInfo>
              <PlanName>
                {selectedButton === "Arcade"
                  ? "Arcade "
                  : selectedButton === "Advanced"
                  ? "Advanced "
                  : "Pro "}
                {isChecked ? "(Yearly)" : "(Monthly)"}
              </PlanName>
              <PlanChange to="/plan">Change</PlanChange>
            </PlanInfo>
            <PlanPrice>
              ${isChecked ? yearlyPrice : monthlyPrice}/
              {isChecked ? "yr" : "mo"}
            </PlanPrice>
          </ChosenPlan>
          <Line></Line>
          <Addons>
            {infoAboutCheckboxes.map((item, index) => {
              return (
                <Addon key={index}>
                  <AddonName>{item.name}</AddonName>
                  <AddonPrice>
                    ${isChecked ? item.yearlyPrice : item.monthlyPrice}/
                    {isChecked ? "yr" : "mo"}
                  </AddonPrice>
                </Addon>
              );
            })}
          </Addons>
        </TotalPrice>
        <Total>
          <TotalName>Total (per month)</TotalName>
          <TotalAmount>
            $
            {isChecked
              ? total.sumYear + yearlyPrice
              : total.sumMonth + monthlyPrice}
            /{isChecked ? "yr" : "mo"}
          </TotalAmount>
        </Total>
      </Content>
      <NextStepContainer>
        <BackLink to="/addons">Go Back</BackLink>
        <ConfirmButton onClick={clearValues}>Confirm</ConfirmButton>
      </NextStepContainer>
    </Container>
  );
}

export default Finish;

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
  height: 385px;
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

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px;
  margin-top: 22px;

  @media screen and (min-width: 1024px) {
    row-gap: 16px;
    margin-top: 35px;
    padding: 16px 24px 24px 24px;
  }
`;

const ChosenPlan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    margin-bottom: 8px;
  }
`;

const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;

  @media screen and (min-width: 1024px) {
    row-gap: 7px;
  }
`;

const PlanName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #022959;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const PlanChange = styled(Link)`
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
  color: #9699aa;
  transition: all ease 0.3s;

  &:hover {
    color: #483eff;
  }
`;

const PlanPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #022959;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(150, 153, 170, 0.2043);
`;

const Addons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media screen and (min-width: 1024px) {
    row-gap: 16px;
  }
`;

const Addon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddonName = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #9699aa;
`;

const AddonPrice = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #022959;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;

  @media screen and (min-width: 1024px) {
    padding: 0 24px;
  }
`;

const TotalName = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #9699aa;
`;

const TotalAmount = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #483eff;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
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

const ConfirmButton = styled.button`
  width: 97px;
  height: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: #483eff;
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
    background: #928cff;
  }
`;
