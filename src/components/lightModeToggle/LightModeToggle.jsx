import React, { useEffect, useState } from "react";
import "./LightModeToggle.css";

const LightModeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "dark" ? (
        <i className="ri-sun-fill"></i> 
      ) : (
        <i className="ri-moon-fill"></i> 
      )}
    </button>
  );
};

export default LightModeToggle;

