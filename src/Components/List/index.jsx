import { Box, Btn } from "../UI";
import { list } from "../../info";
import { Card } from "../Card";

export const List = () => {
  console.log(list);
  return (
    <Box>
      {list.expenses.map((expense, i) => (
        <Card key={i} expense={expense} />
      ))}
      <Btn>Show More</Btn>
    </Box>
  );
};
