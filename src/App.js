import { React, createContext, useState } from "react";
import ReactSwitch from "react-switch";

import './App.scss';
import Header from "./Layouts/Header";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        
        <div className="switch">
          {/* <label>{theme === "light" ? "Light Mode" : "DarkMode"} </label> */}
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Header />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;