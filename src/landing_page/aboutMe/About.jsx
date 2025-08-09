import { useEffect, useRef, useState } from "react";
import "./About.css";
import about_img from "../../assets/home_img/homeimg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// certificates img 
import Certificate_data from "../../assets/certificate/data/certificate_data.js";

import FlipSkills from "../../components/flip_skills/FlipSkills.jsx";




const About = () => {
    function setActive(link, divId) {
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.dropDownMessage').forEach(el => el.classList.add('d-none'));
    document.getElementById(divId).classList.remove('d-none');
  }


  useGSAP(() => {

       gsap.from(".aboutDiv h1", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".aboutDiv",
        scroller: "body",
        start: "top 85%",
        end: "top -100%",
      },
      filter: "blur(10px)",
    });
     
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

  });

    useEffect(() => {
  const cards = document.querySelectorAll(".certificate-body");
  
  cards.forEach((card) => {
    const arrow = card.querySelector(".arrowShare");

    card.addEventListener("mouseenter", () => {
      if (arrow) arrow.classList.remove("d-none");
    });

    card.addEventListener("mouseleave", () => {
      if (arrow) arrow.classList.add("d-none");
    });

  });
  




  return () => {
    cards.forEach((card) => {
      card.replaceWith(card.cloneNode(true)); 
    });
  };
}, [Certificate_data]);



    
  return (
    <>
      <div className="row pt-4 pt-md-0 d-flex MainAboutDiv justify-content-center align-items-start px-2 px-md-5" id="about">
        
         <div className="col-lg-5 col-12 aboutDiv">
          <h1 className="mb-4 text-start" >About.</h1>
          <p style={{fontSize:"14px"}}>Hello my VIKASH SATHE, I’m a Full Stack MERN Developer with expertise in MongoDB, Express, React, Node.js, and Data Structures & Algorithms(DSA) in JAVA, focused on building efficient, scalable, and responsive web applications.</p>
          <div className="row d-flex topicDiv py-4 mt-4 mb-3 justify-content-start align-items-center">
               <a className="nav-link col-md-3 col-4 text-center"
              onClick={(e) => setActive(e.currentTarget, 'anwendungDiv1')}>
              Certificates
            </a>
            <a className="nav-link col-md-3 col-4 text-center"
              onClick={(e) => setActive(e.currentTarget, 'productDiv1')}>
              Education
            </a>
         
        
          </div>

  

          {/* Anwendung Div */}
          <div className="dropDownMessage d-none py-2 px-2 gap-3 d-flex flex-column" id="anwendungDiv1" style={{maxHeight:"274px", overflow:"scroll", scrollbarWidth:"none"}}>
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
                         <div className="arrowShare d-none" style={{top:"15px", right:"15px"}}>
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
        <div className="col-lg-5 col-12 d-flex mt-5 mt-md-0 justify-content-md-end justify-content-center align-items-center"  >
          <img
            src={about_img}
            alt=""
            className="about_img"
            style={{ width: "80%" }}
          />
        </div>
       
      </div>
     <FlipSkills />
    </>
  );
};

export default About;

