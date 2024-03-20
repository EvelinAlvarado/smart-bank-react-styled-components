import styled from "styled-components";
import { Title } from "../Title";
import { Account } from "../Account";
import { backgroundLight } from "../UI/variables";
import { List } from "../List";

const StyledContainer = styled.div`
  background-color: ${backgroundLight};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
        <List />
      </StyledContent>
    </StyledContainer>
  );
};
