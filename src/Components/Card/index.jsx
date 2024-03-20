import styled from "styled-components";
import { ImageFilter } from "../../ImageFilter.jsx";

const StyledCard = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

const ExpenseData = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;
  /* Added a class */
  .type {
    font-weight: bold;
  }
`;

export const Card = ({ expense }) => {
  // console.log(expense);
  const { id, type, value, from, date } = expense;
  return (
    <StyledCard>
      {ImageFilter(type)}
      <ExpenseData>
        <span className="type">{type}</span>
        <span>{from}</span>
        <span>{value}</span>
      </ExpenseData>
      <span>{date}</span>
    </StyledCard>
  );
};
