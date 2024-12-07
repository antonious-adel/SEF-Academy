import React from "react";
import Heading from "../../Pages/User/Heading";
import styled from "styled-components";
import Button from "../../Pages/User/Button";
import ExamCard from "./ExamCard";

const StyledExams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  width: 53rem;

  @media (max-width: 768px) and (min-width: 481px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 2.8rem;
    width: 100%;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1rem;
  & > h2 {
    text-transform: capitalize;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    & > h2 {
      margin-bottom: 1rem;
      font-size: 3.4rem;
    }
  }
`;
export default function Exams({ role }) {
  return (
    <StyledExams>
      <Header>
        <Heading as="h2">
          {role == "instructor" ? "Ongoing exams" : "upcoming exams"}
        </Heading>
        {role == "instructor" && <Button>create exam</Button>}
      </Header>
      <ExamCard
        course="introduction to react.js"
        role={role}
        instructor="tariq ali"
        level={1}
        time="12:00 PM"
      />
      <ExamCard
        course="introduction to Data"
        role={role}
        instructor="tariq ali"
        level={2}
        time="10:00 AM"
      />
    </StyledExams>
  );
}
