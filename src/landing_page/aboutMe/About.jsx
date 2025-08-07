import { useEffect, useRef, useState } from "react";
import "./About.css";
import about_img from "../../assets/home_img/homeimg.png";
// import about_img from "../../assets/home_img/HomeImg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// certificates img 
import Certificate_data from "../../assets/certificate/data/certificate_data.js";



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

const About = () => {
    function setActive(link, divId) {
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.dropDownMessage').forEach(el => el.classList.add('d-none'));
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
     
    function about_img() {
      gsap.from(".about_img, .aboutDiv", {
        opacity: 0,
        duration: 5,
         scrollTrigger: {
      trigger: ".MainAboutDiv",
      start: "top 80%",
      end: "top 50%",
      scrub: 1.5,
      // markers:true
    },
      });
    }
    about_img();

    function stringLing() {
      var path = "M 110 100 Q 500 100 1300 100";
      var finalPath = "M 110 100 Q 500 100 1300 100";
      var stringExp = document.querySelector("#stringAbout");

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





  gsap.utils.toArray(".certificate-body").forEach((card) => {
      const arrow = card.querySelector(".arrowShare");

      card.addEventListener("mouseenter", () => {
        if (arrow) arrow.classList.remove("d-none");
      });

      card.addEventListener("mouseleave", () => {
        if (arrow) arrow.classList.add("d-none");
      });
    });
  return (
    <>
      <div className="row d-flex MainAboutDiv justify-content-center align-items-start px-3 px-md-5" id="about">
        
         <div className="col-lg-5 col-12 aboutDiv">
          <h1 className="mb-4 text-start" >About.</h1>
          <p style={{fontSize:"14px"}}>Hello my VIKASH SATHE, I’m a Full Stack MERN Developer with expertise in MongoDB, Express, React, Node.js, and Data Structures & Algorithms(DSA) in JAVA, focused on building efficient, scalable, and responsive web applications.</p>
          <div className="row d-flex topicDiv py-4 mt-4 mb-3 justify-content-start align-items-center">
               <a className="nav-link col-md-3 col-4 text-center active"
              onClick={(e) => setActive(e.currentTarget, 'anwendungDiv1')}>
              Certificates
            </a>
            <a className="nav-link col-md-3 col-4 text-center"
              onClick={(e) => setActive(e.currentTarget, 'productDiv1')}>
              Education
            </a>
         
        
          </div>

  

          {/* Anwendung Div */}
          <div className="dropDownMessage py-3 px-4 gap-3 d-flex flex-column" id="anwendungDiv1" style={{maxHeight:"274px", overflow:"scroll", scrollbarWidth:"none"}}>
               { Certificate_data.map((certificate, index) => (
                <div className="position-relative certificate-body">
                         <img
                          src={ certificate.s_img }
                          alt=""
                          className="img-fluid rounded-1"
                          style={ { objectFit:"cover" } }
                        />
                        {/* <a href={certificate.s_link} target="_blank">
                        <p className="position-absolute bg-dark rounded-5 d-flex justify-content-center align-items-center" style={{top:"30px", right:"30px", width:"50px",height:"50px", cursor:"pointer"}}>p</p>
                        </a> */}
                         <div className="arrowShare d-none" style={{top:"30px", right:"30px"}}>
                          <a href={certificate.s_link} target="_blank">
                          <i
                            className="ri-arrow-right-up-line fs-4"
                            onClick={ () => handleArrowClick(project) }
                            style={ { cursor: "pointer" } }
                          ></i>
                          </a>
                        </div>
                        </div>
                  )) }
          
          </div>
                  {/* Product Div */}
          <div className="dropDownMessage d-none py-3 px-4" id="productDiv1">
               <ul className="d-flex flex-column mt-3 gap-3 sparkle-list">
              <li className="">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="m-0">Master of Science in Application Development</h6>
                <p className="m-0">Sage University</p>
             
             </div>
             <div className="d-flex justify-content-between mt-2">
              <p className="m-0">Indore, MP</p>
              <p className="m-0">2022-2024</p>

             </div>
              </li>
              
            </ul>
             
          </div>


        </div>
        <div className="col-lg-5 col-11 d-flex mt-5 mt-md-0 justify-content-md-end justify-content-center align-items-center"  >
          <img
            src={about_img}
            alt=""
            className="about_img"
            style={{ width: "80%" }}
          />
        </div>
       
      </div>
      <div className="row d-flex justify-content-center position-relative align-items-center">
         <div className="row d-flex justify-content-center align-items-center"
          style={{ position: "absolute", bottom: "-10px" }}>
                          <div id="stringAbout" style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
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

export default About;
