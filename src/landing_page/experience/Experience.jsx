import { useEffect, useRef, useState } from "react";
import "./Experience.css";
import experience_img from "../../assets/home_img/homeimg.png";
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



import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



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

const Experience = () => {
    function setActive(link, divId) {
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.dropDownMessage1').forEach(el => el.classList.add('d-none'));
    document.getElementById(divId).classList.remove('d-none');
  }


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
  
    function experience_img() {
      gsap.from(".experience_img, .ExprienceDiv", {
        opacity: 0,
        duration: 5,
         scrollTrigger: {
      trigger: ".MainExpDiv",
      start: "top 70%",
      end: "top 20%",
      scrub: 1.5,
    },
      });
    }
    experience_img();


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
      var stringExp = document.querySelector("#stringExp");

      stringExp.addEventListener("mousemove", function (dets) {
        path = `M 110 100 Q ${dets.x} ${dets.y} 1300 100`;
        gsap.to("svg path", {
          attr: { d: path },
          duration: 0.3,
          ease: "power3.out",
        });
      });

      stringExp.addEventListener("mouseleave", function () {
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
      <div className="row d-flex MainExpDiv justify-content-center align-items-start px-5" id="experience">
         <div className="col-md-5 col-11 d-flex justify-content-start align-items-center">
          <img
            src={experience_img}
            alt=""
            className="experience_img"
            style={{ width: "80%" }}
          />
        </div>
         <div className="col-md-5 col-11 ExprienceDiv mt-5" >
          <h1 className="mb-4 text-start" >Exprience.</h1>
          <p style={{fontSize:"14px"}}>Gained hands-on experience by building projects using MERN stack and PHP. Worked on e-commerce apps, login systems, and APIs. Focused on full-stack development, clean code, and real-world problem solving.</p>
          <div className="row d-flex mt-4 mb-4 justify-content-start align-items-center">
             <a className="nav-link col-lg-3 col-2 text-center"
              onClick={(e) => setActive(e.currentTarget, 'anwendungDiv')}>
              Company
            </a>
            <a className="nav-link col-lg-3 col-2 active text-center"
              onClick={(e) => setActive(e.currentTarget, 'productDiv')}>
              Freelance
            </a>
          </div>

          {/* Product Div */}
          <div className="dropDownMessage1 d-flex justify-content-center align-items-center" id="productDiv">
            <div className="accordion col-12" id="faqAccordion4">
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-18 fw-regular" type="button"
                    data-bs-toggle="collapse" data-bs-target="#q4">
                    01). Oshi Tech Solution
                  </button>
                </h2>
                <div id="q4" className="accordion-collapse collapse mb-4 mt-3" data-bs-parent="#faqAccordion4">
                  <div className="accordion-body">
                    <h4 className="">
                      Software Developer
                    </h4>
                    <p className="mt-2" style={{ fontSize: "14px" }}>
                      Self / Freelance | Feb-25  – Present
                    </p>
                    <ul className="px-4 sparkle-list" style={{fontSize:"14px"}}>
                      <li className="">Built web apps using MERN stack (MongoDB, Express, React, Node.js).</li>
                      <li className="mt-2">Worked on dynamic UI, REST APIs, and user authentication.</li>
                      <li className="mt-2">Developed and maintained PHP websites with clean backend logic.</li>
                      <li className="mt-2">Gained hands-on experience in full-stack development, deployment, and bug fixing.</li>
                      <li className="mt-2">Created responsive and SEO-friendly web pages.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Anwendung Div */}
          <div className="dropDownMessage1 d-none d-flex justify-content-center align-items-center" id="anwendungDiv">
            <div className="accordion fig col-12" id="faqAccordion5">
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fs-18 fw-regular" type="button"
                    data-bs-toggle="collapse" data-bs-target="#q5">
                    01). Oshi Tech Solution
                  </button>
                </h2>
                <div id="q5" className="accordion-collapse collapse mb-5 mt-3" data-bs-parent="#faqAccordion5">
                   <div className="accordion-body">
                    <h4 className="">
                      Software Developer
                    </h4>
                    <p className="mt-2" style={{ fontSize: "14px" }}>
                      Self / Freelance | Feb-25  – Present
                    </p>
                    <ul className="px-4 sparkle-list" style={{fontSize:"14px"}}>
                      <li className="">Built web apps using MERN stack (MongoDB, Express, React, Node.js).</li>
                      <li className="mt-2">Worked on dynamic UI, REST APIs, and user authentication.</li>
                      <li className="mt-2">Developed and maintained PHP websites with clean backend logic.</li>
                      <li className="mt-2">Gained hands-on experience in full-stack development, deployment, and bug fixing.</li>
                      <li className="mt-2">Created responsive and SEO-friendly web pages.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
       
       
      </div>
      <div className="row d-flex justify-content-center position-relative align-items-center">
         <div className="row d-flex justify-content-center align-items-center"
          style={{ position: "absolute", bottom: "-10px" }}>
                  <div id="stringExp" style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
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

export default Experience;
