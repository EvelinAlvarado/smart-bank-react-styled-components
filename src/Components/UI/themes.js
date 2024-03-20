import {
  backgroundLight,
  contentLight,
  textBackgroundLight,
  backgroundDark,
  contentDark,
  textBackgroundDark,
} from "./variables.js";

export const lightTheme = {
  body: backgroundLight,
  inside: contentLight,
  text: textBackgroundLight,
  filter: "",
};

export const darkTheme = {
  body: backgroundDark,
  inside: contentDark,
  text: textBackgroundDark,
  filter: "invert(100%)",
};
