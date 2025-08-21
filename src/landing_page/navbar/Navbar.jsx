import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import Logo from "../../assets/logo/logo.png";
import Service_data from "../../assets/service/data/service_data.js";

import Resume from "../../assets/resume/Vikash_Sathe.pdf";
import contenctBtn from "../../assets/svg/chat-ai-fill.svg";
import downloadMainResumeBtn from "../../assets/svg/download-2-line.svg";
import downloadMiniResumeBtn from "../../assets/svg/download-line.svg";
import closeBtn from "../../assets/svg/close-line.svg";
import menuBtn from "../../assets/svg/menu-3-fill.svg";
import rightArrow from "../../assets/svg/arrow-right-line.svg";


const Navbar = () => {
  const navRef = useRef(null);
  const miniResume = useRef(null);
  const proDivRef = useRef(null);
  const [isProDivOpen, setIsProDivOpen] = useState(false);

  useEffect(() => {
    if (isProDivOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isProDivOpen]);

  // Animate with GSAP on mount
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -200,
      duration: 1.5,
      opacity: 0,
      ease: "power2.out",
      delay: 0.4,
    });
  });

  useEffect(() => {
    let lastScrollTop = 0;
    miniResume.current.classList.add("d-none");

    const handleScroll = () => {
      let currentScroll = window.scrollY;
      let maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (!navRef.current) return;

      if (currentScroll === 0) {
        // console.log("Reached top");
        navRef.current.classList.add("navD");
        navRef.current.classList.remove("d-none");
        miniResume.current.classList.add("d-none");
      } else if (currentScroll >= maxScroll) {
        // console.log("Reached bottom");
        navRef.current.classList.add("d-none");
        miniResume.current.classList.remove("d-none");
      } else if (currentScroll > lastScrollTop) {
        // console.log("Scrolling down");
        navRef.current.classList.add("d-none");
        navRef.current.classList.add("navD");
        miniResume.current.classList.remove("d-none");
      } else if (currentScroll < lastScrollTop) {
        // console.log("Scrolling up");
        navRef.current.classList.remove("d-none");
        navRef.current.classList.add("amin");
        navRef.current.classList.add("navD");
        miniResume.current.classList.add("d-none");
      }

      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  projectOpenDiv

  useEffect(() => {
    if (proDivRef.current) {
      proDivRef.current.classList.add("d-none");
    }
  }, []);

  function handleMouseEnter() {
    console.log("enter");
    proDivRef.current?.classList.remove("d-none");
    proDivRef.current?.classList.add("show");
    setIsProDivOpen(true);
  }

  function handleMouseLeave() {
    console.log("leave");
    proDivRef.current?.classList.add("d-none");
    proDivRef.current?.classList.remove("show");
    setIsProDivOpen(false);
  }

    
    const menuRef = useRef();
    // const menuLinksRef = useRef();

// const mobileSideMenuOpen = () => {

//   console.log("Opening menu");
//   menuRef.current.classList.remove("d-none"); 
// };
const mobileSideMenuOpen = () => {
  console.log("Opening menu");
  // menuRef.current.classList.remove("d-none");
   menuRef.current.classList.remove("d-none");
  menuRef.current.classList.add("open");

  // Animate the links
  gsap.fromTo(
    // menuLinksRef.current.children,
    ".mobileSideBar a",
    {
      x: 90,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.5,
      ease: "power2.out",
    }
  );
};



//  const mobileSideMenuClose = () => {
//   console.log("Closing menu");
//   menuRef.current.classList.add("d-none"); 
// };




const mobileSideMenuClose = () => {
  menuRef.current.classList.remove("open");
  setTimeout(() => {
    menuRef.current.classList.add("d-none");
  }, 300); // same as transition time
};

  return (
    <div className="row py-4 d-flex position-relative justify-content-center mt-4 align-items-center g-0">
      <div
        className="col-11 col-md-10 d-flex justify-content-between align-items-center py-2 px-3 px-md-5 mt-2 mt-md-5 overflow-hidden navDiv"
        ref={navRef}
        style={{ position: "fixed" }}
      >
        <div className="col-2 col-md-2 d-flex align-items-center">
          <a href="/" className="col-md-4">
            <img src={Logo} alt="" className="logo" />
          </a>
        </div>

        <div
          className="col-2 col-md-6 minDiv d-md-flex position-absolute justify-content-center align-items-center gap-4 d-none d-md-inline h-100"
          style={{ transform: "translate(45%, 0)" }}
        >
          <a
            href="#skills"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Skills
          </a>
          <a
            href="#"
            className="text-white"
            onMouseEnter={handleMouseEnter}
            style={{ textDecoration: "none" }}
          >
            Services
          </a>
          <a
            href="#projects-section"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            About Me
          </a>
          <a
            href="#experience"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Experience
          </a>
        </div>

        <div className="col-lg-2 d-flex justify-content-end align-items-center d-none d-md-inline">
        <a
  href={Resume}
  download={Resume}
  className="text-white d-flex justify-content-center align-items-center"
  style={{ textDecoration: "none" }}
>
  <p className="m-0 d-flex gap-2 col-9 downloadResumeBtn">
    Resume 
    <img src={downloadMainResumeBtn} alt="" width="18px" />
  </p>
</a>

        </div>

        <div className="mobileSideMenu d-flex justify-content-center align-items-center d-lnline d-md-none">
          <p className="m-0" onClick={mobileSideMenuOpen}>
            <img src={menuBtn} alt="" width={"28px"} />
          </p>
        </div>
      </div>

      <div ref={menuRef} className="mobileSideBar d-none d-flex flex-column">

        <div
    // ref={menuLinksRef}
    className="d-flex flex-column px-4 py-3 gap-3 position-relative"
    
  >

        <p className="mobileClose position-absolute" onClick={mobileSideMenuClose}>
          <img src={closeBtn} alt="" width={"30px"} />
          </p>
          <a
          href="#skills"
          onClick={mobileSideMenuClose}
          className="text-white mt-5"
          style={{ textDecoration: "none" }}
        >
          Skills
        </a>
        <a
          href="#projects-section"
          className="text-white"
            onClick={mobileSideMenuClose}
          style={{ textDecoration: "none" }}
        >
          
              Projects
          
        </a>

        <a
          href="#about"
          className="text-white"
            onClick={mobileSideMenuClose}
          style={{ textDecoration: "none" }}
        >
          About Me
        </a>
        <a
          href="#experience"
          className="text-white"
            onClick={mobileSideMenuClose}
          style={{ textDecoration: "none" }}
        >
          Experience
        </a>

        <div className="px-2 mt-3" style={{overflow:"scroll",height:"65vh",scrollbarWidth:"none"}}> {Service_data.map((service, index) => (
                <div
                  className="col-12 d-flex serviceCardMobile mt-3 mb-2 justify-content-center align-items-center rounded-5 border px-4 py-3 rounded-2"
                  key={index}
                  style={{ textAlign: "justify" }}
                >  
                <h6 className="m-0">
                {service.w_name}
                </h6>
                </div>
              ))}

                  <div
                className="col-12 d-flex justify-content-center mb-5 mt-4 align-items-center rounded-5 border px-4 py-3 services-format rounded-2"
                style={{ background: "lightgray" }}
              >
                <h6 className="m-0 d-flex justify-content-center align-items-center gap-2">
                  See What's new 
                  {/* <i className="ri-arrow-right-line"></i>{" "} */}
                  <img src={rightArrow} alt="" width={"18px"} />
                </h6>
              </div>
              </div>
              
      </div>
      </div>

      <div className="position-absolute" ref={miniResume}>
        <div className="miniResume">
          <a href={Resume} target="_blank">
            <img src={downloadMiniResumeBtn} className="" alt="" />
          </a>
        </div>
      </div>
      <div className="position-absolute">
        <div className="miniContectBtn">
          <a
            href="#contact "
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <img src={contenctBtn} className="" alt="" width={"27px"} />
            {/* <i className="ri-chat-ai-fill fs-3"></i> */}
          </a>
        </div>
      </div>
      <div className="container proDiv position-fixed text-dark"
        style={{ background: "#fff" }}
        ref={proDivRef}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row d-flex justify-content-center align-items-center px-5">
          <div className="col-10 d-flex gap-3 mt-5">
            <div
              className="col-8 d-flex gap-4 px-2 overflow-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              {Service_data.map((service, index) => (
                <div
                  className="col-6 serviceCard mt-3 mb-3 services-format rounded-2"
                  key={index}
                  style={{ textAlign: "justify", width: "45%" }}
                >
                  <div>
                    <img
                      src={service.w_img}
                      alt=""
                      className="img-fluid"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        minHeight: "200px",
                        maxHeight: "200px",
                      }}
                    />
                  </div>

                  <h2
                    className="px-4"
                    style={{ minHeight: "90px", letterSpacing: "1px" }}
                  >
                    {service.w_name}
                  </h2>
                  <p className="px-4" style={{ minHeight: "80px" }}>
                    {service.w_disc}
                  </p>
                  <p className="mb-3 readMore">
                    <a
                      className="px-4 text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Read More <i className="ri-arrow-right-line"></i>
                    </a>
                  </p>
                </div>
              ))}
            </div>
            <div className="col-4 d-flex gap-4 flex-column mt-3 mb-3">
              <div
                className="col-12 border px-4 py-3 services-format rounded-3"
                style={{ background: "lightgray" }}
              >
                <h2 className="fs-1">
                  Unlock <br />
                  Collaboration{" "}
                </h2>
                <p className=" mt-3 readMore">
                  <a className="text-dark" style={{ textDecoration: "none" }}>
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </p>
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center rounded-5 border px-4 py-3 services-format rounded-2"
                style={{ background: "lightgray" }}
              >
                <h5 className="m-0 d-flex justify-content-center align-items-center gap-2">
                  See What's new <i className="ri-arrow-right-line"></i>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
