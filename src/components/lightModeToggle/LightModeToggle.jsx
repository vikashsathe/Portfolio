import React, { useEffect, useState } from "react";
import "./LightModeToggle.css";

const LightModeToggle = () => {
  const [theme, setTheme] = useState("dark");

  // on mount, check saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
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
