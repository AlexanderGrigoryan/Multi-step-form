import React from "react";
import styled, { css } from "styled-components";
import MobileBackground from "../assets/bg-sidebar-mobile.svg";
import { Link } from "react-router-dom";

interface PaginationProps {
  activeButton: boolean;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

function Pagination(props: PaginationProps) {
  const { activeButton, setActiveButton, pathname } = props;
  return (
    <Container>
      <Buttons>
        <StyledLink onClick={() => setActiveButton(true)} to="/">
          <LinkCircle
            activeButton={activeButton && pathname === "/"}
            pathname={pathname}
          >
            1
          </LinkCircle>
        </StyledLink>
        <StyledLink onClick={() => setActiveButton(true)} to="/plan">
          <LinkCircle
            activeButton={activeButton && pathname === "/plan"}
            pathname={pathname}
          >
            2
          </LinkCircle>
        </StyledLink>
        <StyledLink onClick={() => setActiveButton(true)} to="/addons">
          <LinkCircle
            activeButton={activeButton && pathname === "/addons"}
            pathname={pathname}
          >
            3
          </LinkCircle>
        </StyledLink>
        <StyledLink onClick={() => setActiveButton(true)} to="/finish">
          <LinkCircle
            activeButton={activeButton && pathname === "/finish"}
            pathname={pathname}
          >
            4
          </LinkCircle>
        </StyledLink>
      </Buttons>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 375px;
  height: 172px;
  display: flex;
  justify-content: center;
  padding-top: 32px;
`;

const Buttons = styled.div`
  width: 180px;
  height: 33px;
  display: flex;
  column-gap: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface LinkCircleProps {
  activeButton: boolean;
  pathname: string;
}

const LinkCircle = styled.div(
  (props: LinkCircleProps) => css`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: ${props.activeButton ? "1px solid #BEE2FD" : "1px solid #ffffff"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props.activeButton ? "#022959" : "#FFFFFF"};
    background: ${props.activeButton ? "#BEE2FD" : "inherit"};
  `
);
