import React from "react";
import styled from "styled-components";
import { FaEdit, FaRegClock } from "react-icons/fa";

import Heading from "../../Pages/User/Heading";
const StyledCard = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
  width: 86%;
  color: var(--color-grey-0);

  & h4,
  p {
    margin: 0;
  }
  @media (max-width: 768px) and (min-width: 481px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Month = styled.div`
  text-align: center;
  padding: 0.3rem 2rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  font-size: 2.3rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  & span {
    font-weight: 400;
    font-size: 2.1rem;
    opacity: 0.9;
  }
`;
const Day = styled.div`
  text-align: center;
  padding: 0.3rem 2rem;
  font-size: 2rem;
  line-height: 1.05;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: #bf9b30;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const Topic = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  & h3 {
    font-weight: 600;
    line-height: 1;
  }

  & svg {
    fill: #bf9b30 !important;
    font-size: 2.4rem;
  }
  @media (max-width: 480px) {
    & h3 {
      font-size: 2.15rem;
    }
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: var(--color-grey-300) !important;

  & span {
    color: #bf9b30 !important;
    font-size: 1.7rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;

    & span {
      font-size: 1.6rem;
    }
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  & > p {
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 600;
  }
  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
    & svg {
      fill: var(--color-grey-400) !important;
      font-size: 2.6rem;
    }
    & p {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`;

export default function ExamCard({ course, role, instructor, level, time }) {
  return (
    <StyledCard>
      <div>
        <Month>
          3th <span>jun</span>
        </Month>
        <Day>wed</Day>
      </div>
      <Content>
        <Topic>
          <Heading as="h3">{course}</Heading>
          {role == "instructor" && <FaEdit />}
        </Topic>
        <Info>
          <span>instructor</span>: {instructor}
        </Info>
        <Footer>
          <p>lev.{level} Exam</p>

          <div>
            <FaRegClock />
            <p>{time}</p>
          </div>
        </Footer>
      </Content>
    </StyledCard>
  );
}
