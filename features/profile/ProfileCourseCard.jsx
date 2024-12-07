import styled from "styled-components";
import Heading from "../../Pages/User/Heading";
const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius-sm);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 480px) {
    align-items: end;
  }
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    & span {
      color: #daa520 !important;
    }
  }

  @media (max-width: 480px) {
    & h4 {
      font-size: 2.4rem;
    }
  }
`;
export default function ProfileCourseCard({ course, instructor, level }) {
  return (
    <Box>
      <Desc>
        <Heading as="h4">{course}</Heading>
        <div>
          <span>instructor</span> : {instructor}
        </div>
      </Desc>
      <Heading as="h3">lev.{level}</Heading>
    </Box>
  );
}
