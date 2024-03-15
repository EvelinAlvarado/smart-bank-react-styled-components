import styled from "styled-components";
import { Title } from "../Title";
import { Account } from "../Account";
import { backgroundLight } from "../UI/variables";

const StyledContainer = styled.div`
  background-color: ${backgroundLight};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
      </StyledContent>
    </StyledContainer>
  );
};
