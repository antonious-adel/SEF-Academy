import React from "react";
import styled from "styled-components";
import Heading from "../../Pages/User/Heading";
import Form from "../../Pages/User/Form";
import FormRow from "../../Pages/User/FormRow";
import Textarea from "../../Pages/User/Textarea";
import ProfileCourseCard from "./ProfileCourseCard";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6.5rem;
  /* max-width: 95.25rem; */

  & form {
    padding: 2rem 4rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: var(--border-radius-sm);
  }
  & label {
    font-size: 1.9rem;
    font-weight: 600;
  }

  & textarea {
    max-width: 85.5rem;

    border: none !important;
  }
  @media (max-width: 480px) {
    gap: 4rem;

    & form {
      padding: 1.7rem 2rem;
      & label {
        font-size: 2.1rem;
      }

      & div {
        gap: 1.6rem;
      }
    }
  }
`;
const Packet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  & > h4 {
    margin-left: 4rem;
    color: var(--color-grey-0);
  }
  @media (max-width: 480px) {
    & > h4 {
      font-size: 2.1rem;

      margin-left: 2rem;
      padding: 0;
    }
  }
`;

export default function ProfileInfo({ profileData, isEdit, register }) {
  return (
    <StyledProfile>
      <Form>
        <FormRow label="About">
          {isEdit ? (
            <Textarea
              type="text"
              id="about"
              placeholder="about"
              {...register("about", {
                required: "This field is required",
              })}
            />
          ) : (
            <p>{profileData?.about}</p>
          )}
        </FormRow>
      </Form>
      <Packet>
        <Heading as="h4">In Progress</Heading>
        <ProfileCourseCard
          course="Introduction to Data Analysis"
          instructor="tariq ali"
          level={1}
        />
        <ProfileCourseCard
          course="Introduction to React.js"
          instructor="tariq ali"
          level={2}
        />
      </Packet>
      <Packet>
        <Heading as="h4">Previous</Heading>
        <ProfileCourseCard
          course="System analysis and design"
          instructor="Sarah ahmed"
          level={5}
        />
        <ProfileCourseCard
          course="Introduction to web Development"
          instructor="Alaa Samer"
          level={3}
        />
      </Packet>
    </StyledProfile>
  );
}
