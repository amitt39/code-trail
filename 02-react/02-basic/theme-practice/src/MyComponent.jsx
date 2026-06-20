import { useContext } from "react";
import "./App.css";
import ThemeContext from "./ThemeContext";

function MyComponent() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <div style={{ backgroundColor: theme }}>
        <button onClick={changeTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default MyComponent;
