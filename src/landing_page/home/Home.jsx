import "./Home.css";
import MainImg from "../../assets/home_img/homeimg.png";
import FlipSkills from "../../components/flip_skills/FlipSkills";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const home = () => {
  useGSAP(() => {
    function breakText() {
      var toggleWord = document.querySelector(".toggleWord");
      var words = ["Software", "Frontend", "Backend"];
      var index = 0;

      function animateWord() {
        var h1text = words[index];
        index = (index + 1) % words.length;

        var clutter = "";
        h1text.split("").forEach(function (letter) {
          clutter += `<span class="letter">${letter}</span>`;
        });
        toggleWord.innerHTML = clutter;

        gsap.fromTo(
          ".letter",
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
            repeatDelay: 0.5,
            onComplete: animateWord,
          }
        );
      }

      animateWord();
    }

    breakText();

    function home_img() {
      gsap.from(".home_img", {
        opacity: 0,
        duration: 5,
        delay: 2.8,
      });
    }
    home_img();

    function home_heading() {
      gsap.fromTo(
        ".home_heading",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 2.8,
        }
      );
    }
    home_heading();

    function socialIcon() {
      gsap.from(".socialDiv a", {
        x: 80,
        stagger: 1,
        opacity: 0,
        delay: 2.8,
        duration: 0.3,
      });
      gsap.from(".socialDiv a img", {
        rotateY: "360deg",
        stagger: 1,
        opacity: 0,
        duration: 1.2,
        delay: 2.8,
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
              a <span className="toggleWord">Software</span> Developer
            </span>
            <br />
            <span
              className=""
              style={{
                color: "#999",
                fontWeight: 500,
                fontSize: "48px",
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
              <i class="ri-linkedin-fill socialIcon"></i>
            </a>

            <a target="_blank" href="https://github.com/vikashsathe">
              <i class="ri-github-fill socialIcon"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vikash-sathe-941166208/"
            >
              <i class="ri-instagram-line socialIcon"></i>
            </a>
          </div>
        </div>
        <div
          className="col-md-5 col-12 mt-md-5 mt-2 d-flex justify-content-md-end justify-content-center align-items-center"
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
