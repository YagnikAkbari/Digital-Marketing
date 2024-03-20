import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <div>
        Navbar
        <button onClick={toggleTheme}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <h1>full content</h1>
        <p>Lodo</p>
      </div>
    </>
  );
};

export default Navbar;
