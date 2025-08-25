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

  const [certificateArrow, setCertificateArrow] = useState(false)


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

 
  return (
    <>
      <div className="row pt-4 pt-md-0 d-flex MainAboutDiv justify-content-center align-items-start px-2 px-md-5" id="about">
        
         <div className="col-lg-5 col-12 aboutDiv">
          <h1 className="mb-2 col-12 text-start SectionHeading">Get to <span style={{color:"#ffe066"}}>Know </span>Me</h1>
          <p style={{fontSize:"14px"}}>Hello my VIKASH SATHE, I’m a Full Stack MERN Developer with expertise in MongoDB, Express, React, Node.js, and Data Structures & Algorithms(DSA) in JAVA, focused on building efficient, scalable, and responsive web applications.</p>
          <div className="row d-flex topicDiv py-4 mt-4 mb-3 justify-content-start align-items-center">
               <a className="nav-link col-md-3 col-4 text-center"
              onClick={(e) => setActive(e.currentTarget, 'carouselExampleFade')}>
              Certificates
            </a>
            <a className="nav-link col-md-3 col-4 text-center"
              onClick={(e) => setActive(e.currentTarget, 'productDiv1')}>
              Education
            </a> 
          </div>

          {/* Anwendung Div */}
  <div id="carouselExampleFade" 
     className="carousel slide carousel-fade m-auto m-md-0 dropDownMessage" 
     data-bs-ride="carousel" 
     data-bs-interval="3000"
     style={{height: "250px", width: "350px"}}
     onMouseEnter={() => setCertificateArrow(true)}
     onMouseLeave={() => setCertificateArrow(false)}
>
  <div className="carousel-inner position-relative h-100"    
  >
    {Certificate_data.map((certificate, index) => (
      <div 
        key={index} 
        className={`carousel-item ${index === 0 ? "active" : ""}`}
      >
        <img 
          src={certificate.s_img} 
          className="d-block w-100 h-100 rounded-2" 
          style={{objectFit: "cover"}} 
          alt={`certificate-${index}`} 
        />

        {certificateArrow && (
          <div 
            className="arrowShare position-absolute d-flex justify-content-center align-items-center" 
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <a href={certificate.s_link} target="_blank" style={{cursor: "pointer"}}>
              <i className="ri-add-line fs-2 text-white"></i>
            </a>
          </div>
        )}
      </div>
    ))}
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <i className="ri-arrow-left-circle-line text-dark fs-2"></i>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <i className="ri-arrow-right-circle-line text-dark fs-2"></i>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                  {/* Product Div */}
          <div className="dropDownMessage d-none p-4" id="productDiv1"
          style={{height: "180px"}}
          >
            <h6 className="m-0" style={{letterSpacing:"1px"}}>Master of Computer Applications (MCA)</h6>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
            <p className="m-0 text-muted">2022-2024</p>
            <p className="m-0 text-muted">Indore, MP</p>
            </div>
            <p className="m-0 clgBtn rounded-2 fw-light text-muted d-inline px-4 py-2" style={{background:"#030303", cursor:"pointer"}}>Sage University <i class="ri-arrow-right-up-line"></i></p>
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

