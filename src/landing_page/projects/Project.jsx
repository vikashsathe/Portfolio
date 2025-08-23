import React, { useState } from "react";
import "./Project.css";
import Project_Data from "../../assets/project/data/project_data.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const handleArrowClick = (project) => {
    navigate(`/project/${project.id}`);
  };

  useGSAP(() => {
    gsap.to(".right", {
      y: 40,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "bottom 100",
        scrub: 1.5,
      },
    });

    gsap.from(".projectDiv h1", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".projectDiv",
        scroller: "body",
        start: "top 85%",
        end: "top -100%",
      },
      filter: "blur(10px)",
    });

    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        scale: 0,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 2,
        scrollTrigger: {
          trigger: card,
          scroller: "body",
          start: "top 100%",
          end: "top 80%",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".card-body").forEach((card) => {
      const arrow = card.querySelector(".arrowShare");

      card.addEventListener("mouseenter", () => {
        if (arrow) arrow.classList.remove("d-none");
      });

      card.addEventListener("mouseleave", () => {
        if (arrow) arrow.classList.add("d-none");
      });
    });
  }, []);

  return (
    <>
      <div className="container projectDiv" id="projects-section" style={{marginBottom:"5rem"}}>
        
        <div className="row mt-5 mb-5 px-0 px-md-3">
          <div className="wrapper">
            <div className="left d-flex align-items-center flex-column text-justify" style={{textTransform:"capitalize"}}>
              <h1 className="mt-5 mb-0 text-center projectHeading">crafted with <span style={{color:"#ffe066"}}>love</span>.</h1>
              <p
                className="m-0 fw-light"
                style={ { fontSize: "13px", color:"#999"} }
              >
               these are a few of my recent works
              </p>
            </div>
            <div className="right d-flex justify-content-center">
              <div className="col-12 px-2 py-0">
                <div className="row d-flex gap-2 gap-md-5 position-relative">
                  { Project_Data.map((project, index) => (
                    <div key={ index } className="col-5 card-body project-card">
                      <div className="card-body position-relative d-flex justify-content-center align-items-center overflow-hidden">
                        <img
                          src={ project.img }
                          alt=""
                          className="img-fluid"
                          style={ { objectFit: "contain" } }
                        />
                        <div className="arrowShare d-none">
                          <i
                            className="ri-arrow-right-up-line fs-4"
                            onClick={ () => handleArrowClick(project) }
                            style={ { cursor: "pointer" } }
                          ></i>
                        </div>
                      </div>
                    </div>
                  )) }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
