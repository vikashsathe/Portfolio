import { useEffect, useRef, useState } from "react";
import "./FlipSkills.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Html5 from "../../assets/Skills_flip/html5.svg";
import Css from "../../assets/Skills_flip/css.svg";
import jsLog from "../../assets/Skills_flip/javascript.svg";
import ReactJs from "../../assets/Skills_flip/React.svg";
import mongoDB from "../../assets/Skills_flip/mongodb.svg";
import ExpressJs from "../../assets/Skills_flip/express.svg";
import NodeJs from "../../assets/Skills_flip/Nodejs.svg";
import Php from "../../assets/Skills_flip/Php.svg";
import Bootstrap from "../../assets/Skills_flip/bootstrap.svg";
import Java from "../../assets/Skills_flip/JAVA.svg";
import Git from "../../assets/Skills_flip/Git&github.svg";
import Gsap from "../../assets/Skills_flip/gsap.svg";
import Tailwind from "../../assets/Skills_flip/tailwind.svg";
import codeigniter from "../../assets/Skills_flip/codeigniter.svg";

// All sections in one array
const sections = [
  [Html5, Css],
  [mongoDB, ExpressJs, ReactJs, NodeJs, codeigniter],
  [Java, jsLog, Php],
  [Bootstrap, Tailwind],
  [Git, Gsap],
];

// Reusable FlipImage component
const FlipImage = ({ images, interval = 2000 }) => {
  const imgRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 0, opacity: 0 },
        { duration: 0.5, scale: 1, opacity: 1 }
      );

      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="flipDiv">
      <img ref={imgRef} src={images[index]} alt="Flipping" />
    </div>
  );
};

const FlipSkills = () => {
  const stringRef = useRef(null);

  // GSAP string animation
  useGSAP(() => {
    if (!stringRef.current) return;
    const pathEl = stringRef.current.querySelector("path");
    const finalPath = "M 110 100 Q 500 100 1300 100";

    const handleMove = (e) => {
      const path = `M 110 100 Q ${e.clientX} ${e.clientY} 1300 100`;
      gsap.to(pathEl, {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(pathEl, {
        attr: { d: finalPath },
        duration: 1.3,
        ease: "elastic.out(1,0.2)",
      });
    };

    stringRef.current.addEventListener("mousemove", handleMove);
    stringRef.current.addEventListener("mouseleave", handleLeave);

    return () => {
      stringRef.current.removeEventListener("mousemove", handleMove);
      stringRef.current.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="row d-flex justify-content-center position-relative align-items-center">
      {/* String Line Animation */}
      <div className="row StringRow position-absolute d-flex justify-content-center align-items-center">
        <div ref={stringRef} style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
          <svg viewBox="0 0 1410 200" preserveAspectRatio="none" width="100%" height="100%">
            <path d="M 110 100 Q 500 100 1300 100" stroke="#fff" fill="transparent" />
          </svg>
        </div>
      </div>

      {/* Flip Images */}
      <div className="flipRow col-12">
        {sections.map((imgs, i) => (
          <FlipImage key={i} images={imgs} />
        ))}
      </div>
    </div>
  );
};

export default FlipSkills;

