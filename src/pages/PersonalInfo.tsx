import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormTypes } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schema";

interface PersonalInfoProps {
  pathname: string;
}

function PersonalInfo(props: PersonalInfoProps) {
  const { pathname } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    navigate("/plan");
  };

  return (
    <Container>
      <Content>
        <Title>Personal info</Title>
        <Text>Please provide your name, email address, and phone number.</Text>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Name>
            <Label htmlFor="name">Name</Label>
            <NameInput
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              {...register("name")}
            />
            <ErrorMessage>{errors?.name && errors.name.message}</ErrorMessage>a
          </Name>
          <Email>
            <Label htmlFor="email">Email Address</Label>
            <EmailInput
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
            />
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          </Email>
          <PhoneNumber>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <PhoneNumberInput
              type="number"
              id="phoneNumber"
              placeholder="e.g. +1 234 567 890"
              {...register("phoneNumber")}
            />
            <ErrorMessage>
              {errors.phoneNumber && errors.phoneNumber.message}
            </ErrorMessage>
          </PhoneNumber>
          <NextStepContainer>
            {pathname !== "/" ? <BackLink to="/">Go Back</BackLink> : null}
            <NextButton type="submit">Next Step</NextButton>
          </NextStepContainer>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default PersonalInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  width: 343px;
  height: 376px;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 22px;
`;

const Label = styled.label`
  font-size: 12px;
  color: #022959;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  position: relative;
`;

const NameInput = styled.input`
  width: 295px;
  height: 40px;
  border-radius: 4px;
  padding-left: 16px;
  border: 1px solid #d6d9e6;
  background: #ffffff;
`;

const Email = styled(Name)``;

const EmailInput = styled(NameInput)``;

const PhoneNumber = styled(Name)``;

const PhoneNumberInput = styled(NameInput)`
  -webkit-appearance: none;
  -moz-appearance: textfield;
  appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
  }
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #ee374a;
  position: absolute;
  top: -2px;
  right: 0;
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

const NextButton = styled.button`
  width: 97px;
  height: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: #022959;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 16px;
  right: 16px;
  color: #ffffff;
`;
