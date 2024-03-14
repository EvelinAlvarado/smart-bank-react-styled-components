import { Title } from "../Title";
import { Account } from "../Account";

export const Container = () => {
  return (
    <div className="container">
      <Title>Smart Bank</Title>
      <section className="content">
        <Account />
      </section>
    </div>
  );
};
