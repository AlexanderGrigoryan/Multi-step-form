import styled from "styled-components";
import ConfirmIcon from "../assets/icon-thank-you.svg";

function ThankYou() {
  return (
    <Container>
      <Content>
        <ConfirmImage src={ConfirmIcon} alt="confirm icon" />
        <Title>Thank you!</Title>
        <Text>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Text>
      </Content>
    </Container>
  );
}

export default ThankYou;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  min-width: 343px;
  max-width: 550px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ConfirmImage = styled.img`
  width: 56px;
  height: 56px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 24px 0 9px;
  color: #022959;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #9699aa;
`;
