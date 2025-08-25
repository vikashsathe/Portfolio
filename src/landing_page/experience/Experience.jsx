import "./Experience.css";
import experience_img from "../../assets/home_img/homeimg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlipSkills from "../../components/flip_skills/FlipSkills";
gsap.registerPlugin(ScrollTrigger);




const Experience = () => {
    function setActive(link, divId) {
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.dropDownMessage1').forEach(el => el.classList.add('d-none'));
    document.getElementById(divId).classList.remove('d-none');
  }




  useGSAP(() => {


       gsap.from(".ExprienceDiv h1", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".ExprienceDiv",
        scroller: "body",
        start: "top 85%",
        end: "top -100%",
      },
      filter: "blur(10px)",
    });
  
    function experience_img() {
      gsap.from(".experience_img, .ExprienceDiv", {
        opacity: 0,
        duration: 5,
         scrollTrigger: {
      trigger: ".MainExpDiv",
       start: "top 80%",
      end: "top 50%",
      scrub: 1.5,
    },
      });
    }
    experience_img();
  
  });
  return (
    <>
      <div className="row d-flex MainExpDiv justify-content-center align-items-start px-2 px-md-5" id="experience">
         <div className="col-md-5 col-12 d-flex order-1 order-md-0 mt-5 mt-md-0 justify-content-md-start justify-content-center align-items-center">
          <img
            src={experience_img}
            alt=""
            className="experience_img"
            style={{ width: "80%" }}
          />
        </div>
         <div className="col-md-5 col-12 ExprienceDiv order-0 order-md-1 mt-5" >
           <h1 className="mb-2 col-12 text-start SectionHeading">What <span style={{color:"#ffe066"}}>I’ve </span>Done</h1>
          <p style={{fontSize:"14px"}}>Gained hands-on experience by building projects using MERN stack and PHP. Worked on e-commerce apps, login systems, and APIs. Focused on full-stack development, clean code, and real-world problem solving.</p>
          <div className="row d-flex mt-4 mb-4 justify-content-start align-items-center">
             <a className="nav-link col-md-3 col-4 active text-center"
              onClick={(e) => setActive(e.currentTarget, 'anwendungDiv')}>
              Company
            </a>
            <a className="nav-link col-md-3 col-4 text-center"
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
     <FlipSkills />
    </>
  );
};

export default Experience;
