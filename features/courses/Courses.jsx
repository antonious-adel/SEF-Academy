import React from "react";
import CourseCard from "./CourseCard";
import Heading from "../../Pages/User/Heading";
import styled from "styled-components";
const StyledCourses = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.6rem;
  & > h2 {
    margin-bottom: 1.4rem;
    text-transform: capitalize;
    font-weight: 600;
  }
  @media (max-width: 768px) and (min-width: 481px) {
    width: 100%;

    & > h2 {
      font-size: 3.2rem;
    }
  }
  @media (max-width: 480px) {
    gap: 1.6rem;
    width: 100%;

    & > h2 {
      margin-bottom: 1rem;
      font-size: 3.4rem;
    }
  }
`;
export default function Courses({ role }) {
  return (
    <StyledCourses>
      <Heading as="h2">
        {role == "instructor" ? "Ongoing courses" : "Registered courses"}
      </Heading>
      <CourseCard
        role={role}
        title="introduction to React.js"
        level={1}
        students={20}
      />
      <CourseCard
        role={role}
        title="introduction to Data Analysis"
        level={3}
        students={50}
      />
    </StyledCourses>
  );
}
