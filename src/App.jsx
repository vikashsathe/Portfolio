import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './landing_page/navbar/Navbar.jsx';
import Home from './landing_page/home/Home.jsx';
import Skills from './landing_page/skills/Skills.jsx';
import Experience from './landing_page/experience/Experience.jsx';
import About from './landing_page/aboutMe/About.jsx';
import Project from './landing_page/projects/Project.jsx';
import Contect from './landing_page/contectMe/Contect.jsx';
import ProjectDetials from './landing_page/projects/ProjectDetials.jsx';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Footer from './landing_page/footer/Footer.jsx';
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from './components/loader/Loader.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // cursor
 useGSAP(() => {
    const cursor = document.querySelector("#cursor");
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        delay: 0.1,
        ease: "power3.out",
      });
      gsap.fromTo(cursor.querySelector("path"),
        { rotation: -10, transformOrigin: "center center" },
        { rotation: 10, duration: 0.2, repeat: 1, yoyo: true, ease: "sine.inOut" }
      );
    });
  });

   // loader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(".loader", {
        y: "-100%",
        duration:1.5,
        ease: "power3.inOut",
        onComplete: () => setLoading(false), 
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



    useEffect(() => {
    const refreshTrigger = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refreshTrigger);

    return () => {
      window.removeEventListener("resize", refreshTrigger);
    };
  }, []);


   // Disable right click & shortcuts

  // useEffect(() => {
  //   const disableContextMenu = (e) => e.preventDefault();
  //   const disableKeys = (e) => {
  //     if (e.keyCode === 123) e.preventDefault(); // F12
  //     if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) e.preventDefault(); // Ctrl+Shift+I / J
  //     if (e.ctrlKey && e.keyCode === 85) e.preventDefault(); // Ctrl+U
  //   };

  //   document.addEventListener("contextmenu", disableContextMenu);
  //   document.addEventListener("keydown", disableKeys);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableContextMenu);
  //     document.removeEventListener("keydown", disableKeys);
  //   };
  // }, []);

 

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Navbar />
      <div className="container-fluid app-content">
        <p id="cursor"></p>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Skills />
                <Experience />
                <Project />
                <About />
                <Contect />
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetials />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
