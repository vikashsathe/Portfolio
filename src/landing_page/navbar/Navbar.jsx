import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logo from "../../assets/logo/logo.png";
import Resume from "../../assets/resume/Vikash_Sathe.pdf";
import LightModeToggle from "../../components/lightModeToggle/LightModeToggle.jsx";

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
      delay: 2.8,
    });
  });

  const [scrollState, setScrollState] = useState("top");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (currentScroll === 0) {
        setScrollState("top");
      } else if (currentScroll >= maxScroll) {
        setScrollState("bottom");
      } else if (currentScroll > lastScroll) {
        setScrollState("down");
      } else if (currentScroll < lastScroll) {
        setScrollState("up");
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const mobileSideMenuOpen = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const mobileSideMenuClose = () => {
    if (!menuRef.current) {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
      return;
    }
    gsap.to(menuRef.current, {
      xPercent: 100,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      },
    });
  };

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        menuRef.current.querySelectorAll("a"),
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, stagger: 0.09, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <div className="row py-4 d-flex position-relative justify-content-center mt-4 align-items-center g-0 navbar">
      <div
        ref={navRef}
        className={`col-11 col-md-10 d-flex justify-content-between align-items-center py-2 px-3 px-md-5 mt-2 mt-md-5 overflow-hidden navDiv
    ${scrollState === "top" ? "navD" : ""}
    ${scrollState === "up" ? "navD amin" : ""}
    ${scrollState === "down" ? "navD d-none" : ""}
  `}
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
            className="text-white d-flex justify-content-end align-items-center"
            style={{ textDecoration: "none" }}
          >
            <p className="m-0 d-flex justify-content-center align-items-center gap-2 col-9 fw-semibold downloadResumeBtn">
              Resume
              <i className="ri-download-2-fill fs-5"></i>
            </p>
          </a>
        </div>

        <div className="mobileSideMenu d-flex justify-content-center align-items-center d-lnline d-md-none">
          <p className="m-0" onClick={mobileSideMenuOpen}>
            <i className="ri-menu-3-line fs-1"></i>
          </p>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobileBackdrop" onClick={mobileSideMenuClose}>
          <aside
            ref={menuRef}
            className="mobileSideBar"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="mobileClose position-absolute"
              onClick={mobileSideMenuClose}
              aria-label="Close menu"
            >
              <i className="ri-close-line fs-1"></i>
            </button>

            <nav
              className="mobileLinks d-flex flex-column gap-3 px-4"
              style={{ marginTop: "5rem" }}
            >
              <a href="#home-section" onClick={mobileSideMenuClose}>
                Home
              </a>
              <a href="#skills" onClick={mobileSideMenuClose}>
                Skills
              </a>
              <a href="#experience" onClick={mobileSideMenuClose}>
                Experience
              </a>
              <a href="#projects-section" onClick={mobileSideMenuClose}>
                Projects
              </a>
              <a href="#about" onClick={mobileSideMenuClose}>
                About
              </a>
            </nav>

            <div
              className="mobileFooter d-flex justify-content-center align-items-center position-absolute"
              style={{ bottom: "100px" }}
            >
              <h6 className="px-4 m-0 cursor-pointer rounded py-2">
                <LightModeToggle />
              </h6>
              <a href="#contact" onClick={mobileSideMenuClose}>
                <h6 className="px-5 m-0 cursor-pointer bg-dark text-white rounded py-2">
                  Let's Talk
                </h6>
              </a>
            </div>
          </aside>
        </div>
      )}

      <div
        className={`position-absolute
    ${scrollState === "bottom" || scrollState === "down" ? "" : "d-none"}
  `}
        ref={miniResume}
      >
        <div className="miniResume d-flex justify-content-center align-items-center">
          <a
            href={Resume}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <i className="ri-download-fill fs-4"></i>
          </a>
        </div>
      </div>

      <div className="position-absolute borderDiv">
        <div className="miniContectBtn d-flex justify-content-center align-items-center">
          <a
            href="#contact "
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <i className="ri-message-3-fill fs-4"></i>
            
          </a>
        </div>
      </div>

      <div className="position-absolute d-none d-md-block">
        <div className="lightModeTogle">
          <LightModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
