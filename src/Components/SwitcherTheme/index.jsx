import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icon } from "../UI";

export default ({ theme }) => {
  const light = <Icon src={themeOn} alt="Light Theme" />;
  const dark = <Icon src={themeOff} alt="Dark Theme" />;

  return <>{theme ? dark : light}</>;
};
