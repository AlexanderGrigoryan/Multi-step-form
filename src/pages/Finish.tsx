import { Link } from "react-router-dom";
import styled from "styled-components";

interface FinishProps {
  pathname: string;
}

function Finish(props: FinishProps) {
  const { pathname } = props;
  return (
    <Container>
      <Content></Content>
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
