import { Link } from "react-router-dom";
import styled from "styled-components";

interface FinishProps {
  pathname: string;
}

function Finish(props: FinishProps) {
  const { pathname } = props;
  return (
    <Container>
      <Content>
        <Title>Finishing up</Title>
        <Text>Double-check everything looks OK before confirming.</Text>
        <TotalPrice>
          <ChosenPlan>
            <PlanInfo>
              <PlanName>Arcade (Monthly)</PlanName>
              <PlanChange to="/plan">Change</PlanChange>
            </PlanInfo>
            <PlanPrice>$9/mo</PlanPrice>
          </ChosenPlan>
          <Line></Line>
          <Addons>
            <Addon>
              <AddonName>Online service</AddonName>
              <AddonPrice>+$1/mo</AddonPrice>
            </Addon>
          </Addons>
        </TotalPrice>
        <Total>
          <TotalName>Total (per month)</TotalName>
          <TotalAmount>+$12/mo</TotalAmount>
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
  height: 365px;
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
