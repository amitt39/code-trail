import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import ThemeContext from "./ThemeContext";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle
      </button>
      <ThemeContext.Provider value={theme}>
        <Header />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeSwitcher;
