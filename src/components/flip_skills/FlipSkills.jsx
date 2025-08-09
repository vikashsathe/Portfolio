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

const imgSec01 = [Html5, Css];
const imgSec02 = [mongoDB, ExpressJs, ReactJs, NodeJs, codeigniter];
const imgSec03 = [Java, jsLog, Php];
const imgSec04 = [Bootstrap, Tailwind];
const imgSec05 = [Git, Gsap];

const FlipSkills = () => {

      const imgRef01 = useRef(null);
  const [index01, setInde01] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      gsap.from(imgRef01.current, {
        scale: 0,
        opacity: 0,
      });
      gsap.set(imgRef01.current, {
        duration: -1,
        scale: 1,

        onComplete: () => {
          setInde01((prev) => (prev + 1) % imgSec01.length);
          gsap.to(imgRef01.current, { duration: 0.5, scale: 1 });
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const imgRef02 = useRef(null);
  const [index02, setInde02] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.from(imgRef02.current, {
        scale: 0,
        opacity: 0,
      });
      gsap.set(imgRef02.current, {
        duration: -1,
        scale: 1,
        onComplete: () => {
          setInde02((prev) => (prev + 1) % imgSec02.length);
          gsap.to(imgRef02.current, { duration: 0.5, scale: 1 });
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const imgRef03 = useRef(null);
  const [index03, setInde03] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.from(imgRef03.current, {
        scale: 0,
        opacity: 0,
      });
      gsap.set(imgRef03.current, {
        duration: -1,
        scale: 1,
        onComplete: () => {
          setInde03((prev) => (prev + 1) % imgSec03.length);
          gsap.to(imgRef03.current, { duration: 0.5, scale: 1 });
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const imgRef04 = useRef(null);
  const [index04, setInde04] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.from(imgRef04.current, {
        scale: 0,
        opacity: 0,
      });
      gsap.set(imgRef04.current, {
        duration: -1,
        scale: 1,
        onComplete: () => {
          setInde04((prev) => (prev + 1) % imgSec04.length);
          gsap.to(imgRef04.current, { duration: 0.5, scale: 1 });
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const imgRef05 = useRef(null);
  const [index05, setInde05] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.from(imgRef05.current, {
        scale: 0,
        opacity: 0,
      });
      gsap.set(imgRef05.current, {
        duration: -1,
        scale: 1,
        onComplete: () => {
          setInde05((prev) => (prev + 1) % imgSec05.length);
          gsap.to(imgRef05.current, { duration: 0.5, scale: 1 });
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  const stringRef = useRef(null);

useGSAP(() => {
  if (!stringRef.current) return;

  const pathEl = stringRef.current.querySelector("path");
  let path = "M 110 100 Q 500 100 1300 100";
  const finalPath = "M 110 100 Q 500 100 1300 100";

  const handleMove = (e) => {
    path = `M 110 100 Q ${e.clientX} ${e.clientY} 1300 100`;
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
       <div className="row d-flex justify-content-center position-relative align-items-center ">
        <div
          className="row StringRow position-absolute d-flex justify-content-center align-items-center"
        
        >
          <div
             ref={stringRef}
            style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}
          >
            <svg
              viewBox="0 0 1410 200"
              preserveAspectRatio="none"
              width="100%"
              height="auto"
            >
              <path
                d="M 110 100 Q 500 100 1300 100"
                stroke="#fff"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
        <div className="flipRow col-12">
           <div className="flipDiv">
            <img src={imgSec01[index01]} alt="Flipping" />
          </div>
          <div className="flipDiv">
            <img src={imgSec02[index02]} alt="Flipping" />
          </div>
          <div className="flipDiv">
            <img src={imgSec03[index03]} alt="Flipping" />
          </div>
          <div className="flipDiv">
            <img src={imgSec04[index04]} alt="Flipping" />
          </div>
          <div className="flipDiv">
            <img src={imgSec05[index05]} alt="Flipping" />
          </div>

        </div>
      </div>
  )
}

export default FlipSkills


