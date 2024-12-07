import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileSideBar from "./ProfileSideBar";
import ProfileInfo from "./ProfileInfo";
import Button from "../../Pages/User/Button";
import Heading from "../../Pages/User/Heading";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const StyledProfile = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: flex-start;
  gap: 2.6rem;
  border: none;
  outline: none;

  & p,
  h3 {
    margin: 0;
  }
  h3 {
    font-weight: 700;
    text-transform: capitalize;
    color: var(--color-grey-0);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }
`;
const Header = styled.div`
  box-sizing: border-box;

  grid-column: 1/-1;
  display: flex;
  align-items: start;
  width: 100%;
  justify-content: space-between;
  padding: 3rem 4rem;
  background-color: rgba(0, 0, 0, 0.5);

  border-radius: var(--border-radius-sm);
  @media (max-width: 768px) and (min-width: 481px) {
    align-items: center;
  }
  @media (max-width: 480px) {
    padding: 3rem 2rem;
    position: relative;
    height: 27.4rem;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
  & div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 70%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;
    & div {
      position: absolute;
      bottom: 10%;
      gap: 0.6rem;
      width: 100%;
    }
  }
`;
export default function ProfileContent() {
  const [isEdit, setIsEdit] = useState(false);
  const [profileData, setProfileData] = useState({
    id: 253567,
    age: 23,
    nationality: "Egyptian",
    country: "Egypt",
    city: "Giza",
    university: "Helwan",
    major: "computer science",
    gdYear: 2024,
    email: "ziadmehreb@gmail.com",
    phone: "0123568942",
    about:
      "at vero eos et accusamus et iusto odio digissiinmn fucums qui blanditii paraesentim voluptatum deleti atque corrupti quos dolores digissiinmn fucums qui blanditii paraesentim",
  });
  const { id: editId, ...editValues } = profileData;
  console.log(editValues);
  const { register, formState, control, handleSubmit, reset } = useForm({
    defaultValues: editValues,
  });

  useEffect(() => {
    if (isEdit) {
      reset(profileData);
    }
  }, [isEdit, profileData, reset]);
  const onSubmit = (data) => {
    setIsEdit((isEdit) => !isEdit);

    if (isEdit) {
      console.log(data);
      setProfileData(data);
      toast.success("Data got updated successfully");
    }
  };
  return (
    <StyledProfile>
      <Header>
        <Content>
          <img src="./me.jpg" />
          <div>
            <Heading as="h3">Ziad mohamed mehreb</Heading>
            <p>
              Computer science, international <br />
              islamic university
            </p>
          </div>
        </Content>
        <Button onClick={handleSubmit(onSubmit)}>
          {isEdit ? "Save Changes" : "edit profile"}
        </Button>
      </Header>
      <ProfileSideBar
        isEdit={isEdit}
        register={register}
        formState={formState}
        control={control}
        profileData={profileData}
      />
      <ProfileInfo
        profileData={profileData}
        isEdit={isEdit}
        register={register}
        formState={formState}
      />
    </StyledProfile>
  );
}
