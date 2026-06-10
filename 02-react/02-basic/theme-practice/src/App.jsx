import { useState } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import ThemeContext from "./ThemeContext";
function App() {
  const [theme, setTheme] = useState("black");

  function changeTheme() {
    theme === "white" ? setTheme("black") : setTheme("white");
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <MyComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
