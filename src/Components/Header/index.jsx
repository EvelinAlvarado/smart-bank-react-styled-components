import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <img className="image-logo" src={logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secondary" href="https://google.com">
          Help
        </a>
        <a className="btn-primary" href="https://google.com">
          Exit
        </a>
      </div>
    </div>
  );
};
