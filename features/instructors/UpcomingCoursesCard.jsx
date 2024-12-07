import React from "react";
import styled from "styled-components";
import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";

import Heading from "../../Pages/User/Heading";
import Button from "../../Pages/User/Button";
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius-sm);
  @media (max-width: 768px) and (min-width: 481px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  width: 36%;

  & img {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 70%;
  padding: 3rem 3rem 2rem;

  @media (max-width: 768px) and (min-width: 481px) {
    & h4 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    gap: 2.5rem;

    padding: 1rem 3.4rem 2rem;

    & h4 {
      font-size: 2.4rem;
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.35rem;
    color: var(--color-grey-300) !important;

    & svg {
      fill: #daa520 !important;

      font-size: 1.6rem;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.35rem;
    color: var(--color-grey-300) !important;
    & svg {
      fill: #daa520 !important;

      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
  }
`;
export default function UpcomingCoursesCard() {
  return (
    <StyledCard>
      <ImgContainer>
        <img src="./OIP.jpeg" />
      </ImgContainer>

      <Content>
        <Heading as="h4">Python for beginners</Heading>
        <Details>
          <div>
            <FaRegCalendarAlt />
            Wednesday, June 7th
          </div>
          <ButtonContainer>
            <div>
              <FaRegListAlt />
              12 lessons
            </div>
            <Button>view details</Button>
          </ButtonContainer>
        </Details>
      </Content>
    </StyledCard>
  );
}
