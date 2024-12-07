import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import EducationInfo from "./EducationInfo";

const StyledSideBar = styled.div`
  padding: 2.4rem 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  & h4 {
    background-color: rgba(0, 0, 0, 0.7);

    color: var(--color-grey-0);
    margin: 0;
    padding: 1.5rem 2.4rem;
    border-radius: var(--border-radius-sm);
  }

  & label {
    font-size: 1.6rem;
  }
  & p {
    color: var(--color-grey-200) !important;
  }
  @media (max-width: 480px) {
    & h4 {
      font-size: 2.1rem;
      padding: 1.5rem 2.6rem;
    }
  }
`;
export default function ProfileSideBar({
  profileData,
  isEdit,
  register,
  formState,
  control,
}) {
  return (
    <StyledSideBar>
      <Card>
        <PersonalInfo
          isEdit={isEdit}
          register={register}
          formState={formState}
          profileData={profileData}
        />
      </Card>
      <Card>
        <EducationInfo
          isEdit={isEdit}
          register={register}
          formState={formState}
          control={control}
          profileData={profileData}
        />
      </Card>
      <Card>
        <ContactInfo
          isEdit={isEdit}
          register={register}
          formState={formState}
          profileData={profileData}
        />
      </Card>
    </StyledSideBar>
  );
}
