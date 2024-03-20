import { ThemeIcon } from "./Components/UI";
import food from "./assets/images/food.svg";
import health from "./assets/images/health.svg";
import transportation from "./assets/images/transportation.svg";
import others from "./assets/images/others.svg";
import utilities from "./assets/images/utilities.svg";

export const ImageFilter = (type) => {
  // console.log(type);
  const Images = {
    Food: <ThemeIcon src={food} alt="Food icon" />,
    Health: <ThemeIcon src={health} alt="Health icon" />,
    Transportation: (
      <ThemeIcon src={transportation} alt="Transportation icon" />
    ),
    Others: <ThemeIcon src={others} alt="Others icon" />,
    Utilities: <ThemeIcon src={utilities} alt="Utilities icon" />,
    default: <ThemeIcon src={others} alt="Others icon" />,
  };

  return Images[type] || Images["default"];
};
