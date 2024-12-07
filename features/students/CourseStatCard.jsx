import React from "react";
import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Heading from "../../Pages/User/Heading";
import RadialSeparators from "./RadialSperators";
const StyledCard = styled.div`
  padding: 4rem 1.6rem;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  border-radius: var(--border-radius-sm);
  & h2 {
    margin-top: 0.7rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    text-align: center;

    & h3 {
      font-weight: 700;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    & h2 {
      font-size: 3.2rem;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1.6rem;
    & h2 {
      margin-top: 0;
      font-size: 3rem;
      font-weight: 600;
      font-size: 2.6rem;
    }
    & > div:last-child {
      gap: 0.4rem;
      text-align: start;

      & h3 {
        font-size: 2.2rem;
        font-weight: 600;
      }

      & h3:first-child {
        font-size: 2rem;
      }
    }
  }
`;
const ProgressContainer = styled.div`
  width: 13.5rem;
  margin: auto;
`;
export default function CourseStatCard() {
  const percentage = 91;
  const hoursCompleted = 27;
  const totalHours = 30;
  return (
    <StyledCard>
      <ProgressContainer>
        <CircularProgressbarWithChildren
          value={80}
          text={`${80}%`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: "butt",
            textColor: "#ffffff",
            pathColor: "#daa520",
            trailColor: "#ffffff96",
          })}
        >
          <RadialSeparators
            count={12}
            style={{
              background: "#121212",
              width: "2px",
              // This needs to be equal to props.strokeWidth
              height: `${10}%`,
            }}
          />
        </CircularProgressbarWithChildren>
      </ProgressContainer>
      <div>
        <Heading as="h3">introduction to react.js</Heading>

        <Heading as="h2">lev. 1</Heading>
        <Heading as="h3">27/30 Hours</Heading>
      </div>
    </StyledCard>
  );
}
