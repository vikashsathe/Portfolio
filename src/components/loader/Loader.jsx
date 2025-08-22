import React, { useEffect, useState } from "react";
import "./Loader.css";

const greetings = [
  "Hello",          // English
  "नमस्ते",         // Hindi
  "नमस्कार",        // Marathi
    "Hola",           // Spanish
    "안녕하세요",         // Korean
    "こんにちは",        // Japanese
];


const Loader = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % greetings.length);
    }, 500); 
    return () => clearInterval(id);
  }, []);

  return (
    <div className="row">
    <div className="loader border" style={{borderRadius: "0rem 0rem 2rem 2rem"}}>
      <div className="flip-box">
        <span key={i} className="flip-word col-8">
          {greetings[i]}
        </span>
      </div>
    </div>
    </div>
  
  );
};

export default Loader;
