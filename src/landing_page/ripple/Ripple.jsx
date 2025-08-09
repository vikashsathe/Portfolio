import React, { useState, useEffect } from "react";
import "./Ripple.css";

export default function RippleEffect() {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600); // ripple duration
  };

  useEffect(() => {
    document.addEventListener("click", createRipple);
    document.addEventListener("touchstart", createRipple);
    return () => {
      document.removeEventListener("click", createRipple);
      document.removeEventListener("touchstart", createRipple);
    };
  }, []);

  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y }}
        ></span>
      ))}
    </>
  );
}







