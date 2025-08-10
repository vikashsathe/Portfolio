import "./Home.css";
import MainImg from "../../assets/home_img/homeimg.png";
import FlipSkills from "../../components/flip_skills/FlipSkills";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";




const home = () => {
  

  useGSAP(() => {
    //     function breakText(){
    // var h1 = document.querySelector(".h1");
    // var h1text = h1.textContent;

    // var spith1 = h1text.split("");
    // var halfText = Math.floor(spith1.length / 2);
    // var clutter = ""

    // spith1.forEach(function (e, idx){
    //   if(idx<halfText){
    //     clutter = clutter + `<span class="left">${e}</span>`;
    //   }else{
    //     clutter = clutter + `<span class="right">${e}</span>`;
    //   }
    // })

    // h1.innerHTML = clutter;

    // }
    // breakText()

    function home_img() {
      gsap.from(".home_img", {
        opacity: 0,
        duration: 5,
      });
    }
    home_img();
    function home_heading() {
  gsap.fromTo(
    ".home_heading",
    { scale: 10, opacity: 0 }, // start
    { scale: 1, opacity: 1, duration: 3, ease: "power2.out" } // end
  );
}

home_heading();


    function socialIcon() {
      gsap.from(".socialDiv a", {
        x: 80,
        stagger: 1,
        opacity: 0,
        delay: 0.2,
        duration: 0.3,
      });
      gsap.from(".socialDiv a i", {
        rotateY: "360deg",
        stagger: 1,
        opacity: 0,
        duration: 1.2,
      });
    }
    socialIcon();
  });

  return (
    <>
      <div className="row homeRow d-flex justify-content-center align-items-center px-2 px-md-5">
        <div className="col-md-5 col-12 mt-2 mt-md-5">
          <p
            className="home_heading"
            style={{
              fontSize: "50px",
              fontWeight: 600,
              lineHeight: "1.1",
              letterSpacing: "-0.5px",
            }}
          >
            <span
              style={{
                color: "#ffe066",
              }}
            >
              Hello
            </span>
            <br />
            I’m <span> VIKASH SATHE</span>,
            <br />
            <span
              style={{
                color: "#555",
                fontWeight: 700,
              }}
            >
              a Software Developer
            </span>
            <br />
            <span
              style={{
                color: "#999",
                fontWeight: 500,
                fontSize:"48px"
              }}
            >
              based in India
            </span>
          </p>

          <div
            className="socialDiv col-lg-12 mb-3 mt-3 pb-md-5 mt-md-5 d-flex gap-4"
            style={{ marginTop: "-100px" }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vikash-sathe-941166208/"
            >
              <i className="socialIcon ri-linkedin-fill"></i>
            </a>

            <a target="_blank" href="https://github.com/vikashsathe">
              <i className="socialIcon ri-github-fill"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vikash-sathe-941166208/"
            >
              <i className="socialIcon ri-instagram-line"></i>
            </a>
          </div>
        </div>
        <div className="col-md-5 col-12 mt-md-5 mt-2 d-flex justify-content-md-end justify-content-center align-items-center"
          style={{ marginTop: "-65px" }}
        >
          <img
            src={MainImg}
            alt=""
            className="home_img"
            style={{ width: "80%" }}
          />
        </div>
      </div>
   <FlipSkills />
    </>
  );
};

export default home;
