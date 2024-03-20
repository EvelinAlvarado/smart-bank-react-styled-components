import { Icon } from "./Components/UI";
import food from "./assets/images/food.svg";
import health from "./assets/images/health.svg";
import transportation from "./assets/images/transportation.svg";
import others from "./assets/images/others.svg";
import utilities from "./assets/images/utilities.svg";

export const ImageFilter = (type) => {
  console.log(type);
  const Images = {
    Food: <Icon src={food} alt="Food icon"></Icon>,
    Health: <Icon src={health} alt="Health icon"></Icon>,
    Transportation: (
      <Icon src={transportation} alt="Transportation icon"></Icon>
    ),
    Others: <Icon src={others} alt="Others icon"></Icon>,
    Utilities: <Icon src={utilities} alt="Utilities icon"></Icon>,
    default: <Icon src={others} alt="Others icon"></Icon>,
  };

  return Images[type] || Images["default"];
};
