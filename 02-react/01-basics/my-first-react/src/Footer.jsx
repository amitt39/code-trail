import { useContext } from "react";
import ThemeContext from "./hooks/ThemeContext";

function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <h2 style={{ color: theme === "dark" ? "#000" : "#fff" }}>Made by Amit</h2>
  );
}

export default Footer;
