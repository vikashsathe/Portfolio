import { useEffect, useRef, useState } from "react";
import "./Home.css";
import MainImg from "../../assets/home_img/homeimg.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Html5 from "../../assets/Skills_flip/html5.svg";
import Css from "../../assets/Skills_flip/css.svg";
import jsLog from "../../assets/Skills_flip/javascript.svg";
import ReactJs from "../../assets/Skills_flip/React.svg";
import mongoDB from "../../assets/Skills_flip/mongodb.svg";
import ExpressJs from "../../assets/Skills_flip/express.svg";
import NodeJs from "../../assets/Skills_flip/Nodejs.svg";
import Php from '../../assets/Skills_flip/Php.svg'
import Bootstrap from "../../assets/Skills_flip/bootstrap.svg";
import Java from "../../assets/Skills_flip/JAVA.svg";
import Git from "../../assets/Skills_flip/Git&github.svg";
import Gsap from "../../assets/Skills_flip/gsap.svg";
import Tailwind from "../../assets/Skills_flip/tailwind.svg";
import codeigniter from "../../assets/Skills_flip/codeigniter.svg";




const imgSec01 = [
  Html5,
  Css
];
const imgSec02 = [
  mongoDB,
  ExpressJs,
  ReactJs,
  NodeJs,
  codeigniter
];
const imgSec03 = [
  Java,
  jsLog,
  Php
];
const imgSec04 = [
  Bootstrap,
  Tailwind 
  
];
const imgSec05 = [
  Git,
 Gsap
];

const home = () => {
  const imgRef01= useRef(null);
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
          setInde01((prev) => (prev + 1) % imgSec01.length,);
          gsap.to(imgRef01.current, { duration: 0.5, scale: 1 });
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);


 const imgRef02= useRef(null);
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

   const imgRef03= useRef(null);
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

    const imgRef04= useRef(null);
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


  const imgRef05= useRef(null);
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









  useGSAP(() => {
    //     function breakText(){
    // var h1 = document.querySelector(".h1");
    // var h1text = h1.textContent;

    // var spith1 = h1text.split("");
    // var halfText = Math.floor(spith1.length / 2);
    // var clutter = ""

    // spith1.forEach(function (e, idx){
    //   if(idx<halfText){
    //     clutter = clutter + `<span class="left">${e}</span>`;
    //   }else{
    //     clutter = clutter + `<span class="right">${e}</span>`;
    //   }
    // })

    // h1.innerHTML = clutter;

    // }
    // breakText()

    function home_img() {
      gsap.from(".home_img", {
        opacity: 0,
        duration: 5,
      });
    }
    home_img();

    function socialIcon() {
      gsap.from(".socialDiv a", {
        x: 200,
        stagger: 1,
        opacity: 0,
        delay: 0.2,
        duration: 0.3,
      });
      gsap.from(".socialDiv a i", {
        rotateY: "360deg",
        stagger: 1,
        opacity: 0,
        duration: 1.2,
      });
    }
    socialIcon();

    function heading() {
      gsap.to(".heading", {
        scale: "1",
        opacity: 1,
        zIndex: 20,
        duration: 0.8,
      });
      gsap.set(".heading", {
        scale: "100",
        opacity: 0,
      });
    }
    heading();
    function stringLing() {
      var path = "M 110 100 Q 500 100 1300 100";
      var finalPath = "M 110 100 Q 500 100 1300 100";
      var string = document.querySelector("#string");

      string.addEventListener("mousemove", function (dets) {
        path = `M 110 100 Q ${dets.x} ${dets.y} 1300 100`;
        gsap.to("svg path", {
          attr: { d: path },
          duration: 0.3,
          ease: "power3.out",
        });
      });

      string.addEventListener("mouseleave", function () {
        gsap.to("svg path", {
          attr: { d: finalPath },
          duration: 1.3,
          ease: "elastic.out(1,0.2)",
        });
      });
    }
    stringLing();
  });
  return (
    <>

      <div className="row d-flex justify-content-center align-items-center px-3 px-md-5"
        style={{ marginTop: "60px" }}
      >
        <div className="col-md-5 col-12">
          <p
            className="heading"
            style={{
              fontSize: "48px",
              marginTop: "-20px",
              letterSpacing: "-0.36px",
            }}
          >
            Hello I’am VIKASH SATHE Software Developer Based In{" "}
            <span className="ind" style={{ color: "", text: "transparent" }}>
              India.
            </span>
          </p>

          <div className="socialDiv col-lg-12 mb-5 mt-5 d-flex gap-4"
            style={{ marginTop: "-100px" }}
          >
            
              <a target="_blank" href="https://www.linkedin.com/in/vikash-sathe-941166208/">
              <i className="socialIcon ri-linkedin-fill"></i>
              </a>
            
               <a target="_blank" href="https://github.com/vikashsathe">
              <i className="socialIcon ri-github-fill"></i>
            </a>
               <a target="_blank" href="https://www.linkedin.com/in/vikash-sathe-941166208/">
              <i className="socialIcon ri-instagram-line"></i>
            </a>
            
          </div>
        </div>
        <div className="col-md-5 col-11 mt-5 d-flex justify-content-end align-items-center"
          style={{ marginTop: "-65px" }}
        >
          <img
            src={MainImg}
            alt=""
            className="home_img"
            style={{ width: "80%" }}
          />
        </div>
       
      </div>
      <div className="row d-flex justify-content-center position-relative align-items-center ">
         <div className="row d-flex justify-content-center align-items-center"
          style={{ position: "absolute", bottom: "-10px" }}
        >
          <div id="string" style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
  <svg viewBox="0 0 1410 200" preserveAspectRatio="none" width="100%" height="auto">
    <path d="M 110 100 Q 500 100 1300 100" stroke="#fff" fill="transparent" />
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
    </>
  );
};

export default home;
