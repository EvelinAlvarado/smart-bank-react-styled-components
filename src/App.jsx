import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./Components/Container";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./GlobalStyle.js";
import { darkTheme, lightTheme } from "./Components/UI/themes.js";
import { BtnTheme } from "./Components/UI/index.js";
import SwitcherTheme from "./Components/SwitcherTheme/index.jsx";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <SwitcherTheme theme={theme} />
      </BtnTheme>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;

// To do: use localStorage to save theme mode user
