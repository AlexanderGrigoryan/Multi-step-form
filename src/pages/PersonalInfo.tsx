import styled, { css } from "styled-components";
import { FormTypes } from "../types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../stores/useFormStore";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface PersonalInfoProps {
  pathname: string;
  register: UseFormRegister<FormTypes>;
  handleSubmit: UseFormHandleSubmit<FormTypes, undefined>;
  setValue: UseFormSetValue<FormTypes>;
  errors: FieldErrors<FormTypes>;
}

function PersonalInfo(props: PersonalInfoProps) {
  const { pathname, register, handleSubmit, setValue, errors } = props;
  const navigate = useNavigate();
  const { user, updateUser } = useFormStore();

  useEffect(() => {
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("number", user.number);
  }, [setValue]);

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    navigate("/plan");
    updateUser(data);
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
              errors={errors}
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              {...register("name", {
                onChange: (e) => {
                  updateUser({ ...user, name: e.target.value });
                },
              })}
            />
            <ErrorMessage>{errors?.name && errors.name.message}</ErrorMessage>
          </Name>
          <Email>
            <Label htmlFor="email">Email Address</Label>
            <EmailInput
              errors={errors}
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email", {
                onChange: (e) => {
                  updateUser({ ...user, email: e.target.value });
                },
              })}
            />
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          </Email>
          <PhoneNumber>
            <Label htmlFor="number">Phone Number</Label>
            <PhoneNumberInput
              errors={errors}
              type="text"
              id="number"
              placeholder="e.g. +1 234 567 890"
              {...register("number", {
                onChange: (e) => {
                  updateUser({ ...user, number: e.target.value });
                },
              })}
            />
            <ErrorMessage>
              {errors.number && errors.number.message}
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

  @media screen and (min-width: 1024px) {
    align-self: baseline;
    padding-top: 40px;
  }
`;

const Content = styled.div`
  min-width: 343px;
  width: 100%;
  height: 376px;
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding: 32px 24px;

  @media screen and (min-width: 1024px) {
    width: 450px;
    height: 372px;
    padding: 0;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 22px;

  @media screen and (min-width: 1024px) {
    margin-top: 35px;
    row-gap: 24px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  color: #022959;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  position: relative;
`;

interface InputProps {
  errors: FieldErrors<FormTypes>;
}

const NameInput = styled.input(
  (props: InputProps) => css`
    min-width: 295px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    border: ${props.errors.name ? "1px solid  #EE374A" : "1px solid #d6d9e6"};
    background: #ffffff;
    font-size: 15px;
    font-weight: 500;
    color: #022959;

    &::placeholder {
      font-size: 15px;
      font-weight: 500;
      color: #9699aa;
    }

    &:focus {
      outline: ${props.errors.name
        ? "1px solid  #EE374A"
        : "1px solid #483eff;"};
    }

    @media screen and (min-width: 1024px) {
      height: 48px;
    }
  `
);

const Email = styled(Name)``;

const EmailInput = styled(NameInput)(
  (props: InputProps) => css`
    border: ${props.errors.email ? "1px solid  #EE374A" : "1px solid #d6d9e6"};
    &:focus {
      outline: ${props.errors.email
        ? "1px solid  #EE374A"
        : "1px solid #483eff;"};
    }
  `
);

const PhoneNumber = styled(Name)``;

const PhoneNumberInput = styled(NameInput)(
  (props: InputProps) => css`
    border: ${props.errors.number ? "1px solid  #EE374A" : "1px solid #d6d9e6"};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      display: none;
    }

    &:focus {
      outline: ${props.errors.number
        ? "1px solid  #EE374A"
        : "1px solid #483eff;"};
    }
  `
);

const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #ee374a;
  position: absolute;
  top: -2px;
  right: 0;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
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
  left: -16px;

  @media screen and (min-width: 1024px) {
    position: relative;
    left: 16px;
    padding: 0;
    margin-top: 85px;
  }
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
  transition: all ease 0.3s;

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
