import './App.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './landing_page/navbar/Navbar.jsx';
import Home from './landing_page/home/Home.jsx';
import Skills from './landing_page/skills/Skills.jsx';
import Experience from './landing_page/experience/Experience.jsx';
import About from './landing_page/aboutMe/About.jsx';
import Project from './landing_page/projects/Project.jsx';
import Contect from './landing_page/contectMe/Contect.jsx';
import ProjectDetials from './landing_page/projects/ProjectDetials.jsx';
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import Footer from './landing_page/footer/Footer.jsx';
// import RippleEffect from './landing_page/ripple/Ripple.jsx';



function App() {

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
    // wing flap effect: scale or rotate lightly
    gsap.fromTo(cursor.querySelector("path"),
      { rotation: -10, transformOrigin: "center center" },
      { rotation: 10, duration: 0.2, repeat: 1, yoyo: true, ease: "sine.inOut" }
    );
  });
});



  return (
  
    <BrowserRouter>
      <Navbar />
       <div className="container-fluid">
<p id='cursor'></p>
        <Routes>
          <Route
            path="/"
            element={
              <>
      {/* <RippleEffect /> */}

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

