import "./Skills.css";
import Skills_Data from "../../assets/skills/data/skills_data.js";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // <-- Import ScrollTrigger
import video01 from '../../assets/Skills_video/video01.mp4'
import video02 from '../../assets/Skills_video/video02.mp4'
import video03 from '../../assets/Skills_video/video03.mp4'
import video04 from '../../assets/Skills_video/video04.mp4'
import video06 from '../../assets/Skills_video/video06.mp4'
import video07 from '../../assets/Skills_video/video07.mp4'
import video08 from '../../assets/Skills_video/video08.mp4'
import video09 from '../../assets/Skills_video/video09.mp4'
import backImg from '../../assets/Skills_video/backImg.svg'
gsap.registerPlugin(ScrollTrigger); 



const skills = () => {

 useGSAP(() => { 
 gsap.from(".skillsDiv h1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".skillsDiv",
      scoller: "body",
      start: "top 85%",
      end: "top -100%",
    },
    filter: "blur(10px)",
  });


gsap.utils.toArray(".skill-card").forEach((card) => {});


gsap.set(".imgDiv", {
scale: "1",
   scrub: 1,
    pin: true,
    // markers:true,
   

});
gsap.to(".scale_skills", {
  scale: 6.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".imgDiv",
    start: "top 15%",
    end: "top -100",
    scrub: 1,
    pin: true,
   
  },
});

    





})





  return (
    <div className="mt-5 mb-5 skillsDiv" id="skills">

      <div className="row d-flex justify-content-center align-items-center">
        <h1 className="mt-5 text-center">Things I'm <span style={{color:"#ffe066"}}>good</span> at</h1>
        <p className="text-center m-0 fw-light">skills, interests, passion and hobbies</p>
      </div>

<div className="row  d-flex flex-row gap-3 mt-5 px-5 justify-content-center align-items-center">
  <div className="row  d-flex gap-3 justify-content-center align-items-center">
  <div className="col-11 gap-3 imgDiv d-flex flex-column justify-content-center align-items-start" style={{minHeight:"630px", maxHeight:"630px"}}>
    <div className="col-12 gap-3 d-flex justify-content-center align-items-center" >
    <div className="col-2  d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none", cursor:"pointer"}}> 
      <video src={video01} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>
       </div>
    <div className="col-2  d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none", cursor:"pointer"}}> 
      <video src={video02} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>
       </div>

    <div className="col-2  d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none"}}> 
      <video src={video03} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>
       </div>
    </div>
    <div className="col-12 gap-3 d-flex justify-content-center align-items-center">
    <div className="col-2 p-3 d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none", cursor:"pointer"}}> 
      <video src={video04} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>

    </div>
    <div
  className="col-2 px-1 bg-white scale_skills d-flex flex-row flex-wrap gap-2 justify-content-center align-items-center"
  style={{
    height: "100px",
    overflowY: "scroll",
    scrollbarWidth: "none",
    cursor: "pointer",
    scrollBehavior: "smooth",
  }}
>
      {Skills_Data.map((skill) => (
        <div className="d-flex p-2 gap-1 skill-card justify-content-center align-items-center">
      <img src={skill.img} alt="" className="" style={{width:"10px"}} />
      <p className="m-0" style={{ fontSize: "6px", whiteSpace:"nowrap" }}>{skill.s_name}</p>
    </div>
  ))}



       </div>
    <div className="col-2  d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none", cursor:"pointer"}}> 
      <video src={video06} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>
       </div>
    </div>
    <div className="col-12 gap-3 d-flex justify-content-center align-items-center">
    <div className="col-2 d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none", cursor:"pointer"}}> 
      <video src={video07} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>
       </div>
    <div className="col-2 d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none", cursor:"pointer"}}> 
      <video src={video08} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>
       </div>
    <div className="col-2 d-flex justify-content-center align-items-center" style={{height:"100px",scrollbarWidth:"none", cursor:"pointer"}}> 
      <video src={video09} className="w-100 h-100" autoPlay loop playsInline style={{objectFit:"cover"}}></video>
       </div>
    </div>
    </div>
    </div>  
</div>






 

    </div>
  );
};

export default skills;
