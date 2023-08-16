import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schema";
import { Link } from "react-router-dom";

interface FormTypes {
  name: string;
  email: string;
  phoneNumber: number;
}

interface PersonalInfoProps {
  pathname: string;
}

function PersonalInfo(props: PersonalInfoProps) {
  const { pathname } = props;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Content>
        <Title>Personal info</Title>
        <Text>Please provide your name, email address, and phone number.</Text>
        <FormContainer>
          <Name>
            <Label htmlFor="name">Name</Label>
            <NameInput
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              {...register("name")}
            />
          </Name>
          <Email>
            <Label>Email Address</Label>
            <EmailInput
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
            />
          </Email>
          <PhoneNumber>
            <Label>Phone Number</Label>
            <PhoneNumberInput
              type="number"
              id="phoneNumber"
              placeholder="e.g. +1 234 567 890"
              {...register("phoneNumber")}
            />
          </PhoneNumber>
        </FormContainer>
      </Content>
      <NextStepContainer>
        {pathname !== "/" ? <BackLink to="/">Go Back</BackLink> : null}
        <NextLink to="/plan">
          <NextButton>Next Step</NextButton>
        </NextLink>
      </NextStepContainer>
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

const PhoneNumberInput = styled(NameInput)``;

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
