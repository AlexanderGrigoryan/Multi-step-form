import { Link } from "react-router-dom";
import styled from "styled-components";
import useButtonStore from "../stores/useButtonStore";
import { useCheckboxStore } from "../stores/useCheckboxStore";

interface FinishProps {
  pathname: string;
  isChecked: boolean;
}

function Finish(props: FinishProps) {
  const { pathname, isChecked } = props;

  const selectedButton = useButtonStore((state) => state.selectedButton);
  const infoAboutCheckboxes = useCheckboxStore(
    (state) => state.infoAboutCheckboxes
  );
  const monthlyPrice = useButtonStore(
    (state) => state.selectedButtonMonthlyPrice
  );
  const yearlyPrice = useButtonStore(
    (state) => state.selectedButtonYearlyPrice
  );

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
            {infoAboutCheckboxes.map((item) => {
              return (
                <Addon>
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
        <NextLink to="/thankyou">
          {pathname === "/finish" ? (
            <ConfirmButton>Confirm</ConfirmButton>
          ) : (
            <NextButton>Next Step</NextButton>
          )}
        </NextLink>
      </NextStepContainer>
    </Container>
  );
}

export default Finish;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  width: 343px;
  height: 385px;
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

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px;
  margin-top: 22px;
`;

const ChosenPlan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const PlanName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #022959;
`;

const PlanChange = styled(Link)`
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
  color: #9699aa;
`;

const PlanPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #022959;
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

const ConfirmButton = styled(NextButton)`
  background: #483eff;
`;
