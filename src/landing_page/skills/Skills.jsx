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



})





  return (
    <div className="px-3 px-md-5 mt-5 mb-5 skillsDiv rounded-3 bg-dark" id="skills">

      <div className="row  d-flex justify-content-center align-items-center">
        <h1 className="mt-5 col-12 text-center" style={{fontSize:"50px"}}>Things I'm <span style={{color:"#ffe066"}}>good</span> at</h1>
        <p className="text-center m-0 fw-light">skills, interests, passion and hobbies</p>
      </div>
<div className="row p-3 mt-5 mb-5 ">
  {Skills_Data.map((skill, index) => (
    <div key={index} className="col-4 col-sm-4 col-md-3 col-lg-1 mb-4">
      <div
        className="bg-dark rounded-4 text-center px-2 py-3 d-flex flex-column justify-content-center align-items-center shadow skill-card"
        style={{
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      >
        <img
          src={skill.img}
          alt={skill.s_name}
          style={{
            width: "50px",
            marginBottom: "10px",
            transition: "transform 0.3s ease",
          }}
          className="skill-icon"
        />
        <p
          className="m-0"
          style={{ fontSize: "8px", fontWeight: "500", whiteSpace: "nowrap", color:"#999" }}
        >
          {skill.s_name}
        </p>
      </div>
    </div>
  ))}
</div>
<div className="d-flex justify-content-end aling-items-center px-3 py-3 px-md-5 gap-4">
  <p className="rounded-5 d-flex justify-content-center align-items-center" style={{width:"50px", height:"50px", background:"#ffe066"}}><i class="ri-corner-down-right-line text-dark fs-2"></i></p>
<h3 className="fw-bold">See all my<br/> work</h3>
</div>



    </div>
  );
};

export default skills;



//  {Skills_Data.map((skill) => (
//         <div className="d-flex p-2 gap-1 skill-card justify-content-center align-items-center">
//       <img src={skill.img} alt="" className="" style={{width:"10px"}} />
//       <p className="m-0" style={{ fontSize: "6px", whiteSpace:"nowrap" }}>{skill.s_name}</p>
//     </div>
//   ))}