import React from "react";
import styled, { css } from "styled-components";
import { FaUser } from "react-icons/fa";

import Heading from "../../Pages/User/Heading";
import Button from "../../Pages/User/Button";
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1.6rem 2.3rem;
  width: 54rem;
  border-radius: var(--border-radius-sm);

  & h4,
  a {
    margin: 0;
  }
  & h3 {
    font-weight: 600;
  }
  & div:last-child h3 {
    text-transform: uppercase;
    font-weight: 700;
  }
  & p {
    margin-bottom: 0;
    margin-top: 0;
  }
  @media (max-width: 768px) and (min-width: 481px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;

    & h3 {
      font-size: 2.15rem;
    }
  }
`;
const StyledTopic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  text-transform: capitalize;
  & div {
    color: var(--color-grey-300) !important;
  }
  & div span {
    color: #bf9b30 !important;
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & h3 {
  }
`;

const StudentCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.role == "instructor"
      ? css`
          width: 60%;
        `
      : css`
          width: 30%;
        `}
  color: white;
  & div {
    display: flex;
    align-items: end;
    gap: 1.2rem;
    & svg {
      font-size: 2.3rem;
    }
    & p {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
  & a {
    text-align: right;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    ${(props) =>
      props.role == "instructor"
        ? css`
            width: 50%;
          `
        : css`
            width: 23%;
          `}
  }
  @media (max-width: 480px) {
    ${(props) =>
      props.role == "instructor"
        ? css`
            width: 72%;
          `
        : css`
            width: 32%;
          `}
    & h3 {
      font-size: 2.15rem;
    }
    & div {
      align-items: center;
      gap: 1rem;
      & svg {
        font-size: 2rem;
      }
      & p {
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
    & a {
      text-align: center;
    }
  }
`;
export default function CourseCard({ role = "", title, level, students }) {
  return (
    <StyledCard>
      <StyledTopic>
        <Heading as="h3">{title}</Heading>
        {role === "student" && (
          <div>
            <span>instructor</span> : tariq ali
          </div>
        )}
      </StyledTopic>
      <StyledInfo>
        <Heading as="h3">lev.{level}</Heading>
        <StudentCount role={role}>
          {role == "instructor" && (
            <div>
              <FaUser />
              <p>{students} students</p>
            </div>
          )}
          <Button>view details</Button>
        </StudentCount>
      </StyledInfo>
    </StyledCard>
  );
}
