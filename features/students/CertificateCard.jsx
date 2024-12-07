import React from "react";
import styled from "styled-components";
import Heading from "../../Pages/User/Heading";
import Button from "../../Pages/User/Button";

const StyledCard = styled.div`
  padding: 1.3rem 2.3rem 1.6rem;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: var(--border-radius-sm);

  & h3 {
    font-weight: 700;
  }

  @media (max-width: 480px) {
    align-items: end;

    & h3 {
      font-weight: 600;
      font-size: 2.35rem;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  @media (max-width: 480px) {
    align-items: start;
    gap: 0.4rem;
  }
`;
const Details = styled.div`
  display: flex;
  align-items: center;

  gap: 3rem;
  & div {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 0.4rem;
    color: var(--color-grey-300) !important;

    & span {
      color: #daa520 !important;
      font-size: 1.7rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.4rem;

    & div {
      & span {
        font-size: 1.6rem;
      }
    }
  }
`;
export default function CertificateCard() {
  return (
    <StyledCard>
      <Content>
        <Heading as="h3">introduction to react.js</Heading>
        <Details>
          <div>
            <span>instructor </span> : Tariq ali
          </div>
          <div>
            <span>instructor </span> : Tariq ali
          </div>
        </Details>
      </Content>
      <Button>Download</Button>
    </StyledCard>
  );
}
