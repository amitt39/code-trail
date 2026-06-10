import { useContext } from "react";
import ThemeContext from "./hooks/ThemeContext";

function Header({ name, city }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h1 style={{ color: theme === "dark" ? "#000" : "#fff" }}>
        Hello, {name} from {city}
      </h1>
      <p>My firse react app</p>
    </>
  );
}

export default Header;
