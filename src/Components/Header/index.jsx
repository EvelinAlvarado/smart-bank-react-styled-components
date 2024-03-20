import styled from "styled-components";
import { primaryColor } from "../UI/variables";
import logo from "../../assets/images/logo.svg";

const StyledHeader = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  /* color: ${(props) => (props.primaryBtn ? "white" : primaryColor)}; */
  color: ${({ primaryBtn }) => (primaryBtn ? "white" : primaryColor)};
  background: ${({ primaryBtn }) =>
    primaryBtn ? "transparent" : "white"}; /* Destructuring */
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader href="https://google.com">Help</BtnHeader>
        {/* Using props primaryBtn */}
        <BtnHeader primaryBtn href="https://google.com">
          Exit
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};
