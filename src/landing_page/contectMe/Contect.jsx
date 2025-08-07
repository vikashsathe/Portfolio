import React from "react";
import "./Contect.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contect = () => {
  useGSAP(() => {
    gsap.from(".rightContect, .leftContect", {
      opacity: 0,
      scale: 1,
      delay: 0.4,
      duration: 2,
      scrollTrigger: {
        trigger: ".contentDiv",
        scoller: "body",
        start: "top 100%",
        end: "top -100%",
        stagger: true,
      },
      filter: "blur(10px)",
    });

    gsap.set(".rightContect .rightContect", {
      opacity: 1,
      scale: 1,
    });

    gsap.from(".contentDiv h1", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contentDiv",
        scoller: "body",
        start: "top 85%",
        end: "top -100%",
        stagger: true,
      },
      filter: "blur(10px)",
    });

    function socialIcon() {
      gsap.from(".AboutsocialDiv a", {
        x: 200,
        stagger: 1,
        opacity: 0,
        delay: 0.2,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".AboutsocialDiv",
          scoller: "body",
          start: "top 85%",
          end: "top -100%",
          stagger: true,
        },
        filter: "blur(10px)",
      });
      gsap.from(".AboutsocialDiv a i", {
        rotateY: "360deg",
        stagger: 1,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".AboutsocialDiv",
          scoller: "body",
          start: "top 85%",
          end: "top -100%",
          stagger: true,
        },
        filter: "blur(10px)",
      });
    }
    socialIcon();
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b95628ec-e8d3-4649-8adc-18072ba0c72e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <>
      <div className="mt-5 mb-5 contentDiv" id="contact">
        <div className="row d-flex justify-content-center align-items-center">
          <h1 className="mt-5 text-center">Contect.</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-start mb-5">
        <div className="col-md-4 col-11 leftContect">
          <h1 className="mb-4">Let's Talk</h1>
          <p className="mb-3">
            I'm currently avaliable to take on new project, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
            <a href="#mail" className="text-decoration-none text-light">
          <p className="d-flex mb-2 justify-content-start m-0 align-items-center gap-3">
            <i className="ri-mail-ai-line fs-4"></i> vikashsathe83@gmail.com
          </p>
            </a>
          <p className="d-flex mb-2 justify-content-start m-0 align-items-center gap-3">
            <i className="ri-phone-fill fs-4"></i> +91 7869603377
          </p>
          <p className="d-flex justify-content-start m-0 align-items-center gap-3">
            <i className="ri-send-plane-fill fs-4"></i> Indore, Madhya Pradesh
          </p>

          <div className="AboutsocialDiv col-lg-12 mb-5 mt-5 d-flex gap-4">
         <a target="_blank" href="https://www.linkedin.com/in/vikash-sathe-941166208/">
              <i className="socialIcon ri-linkedin-fill"></i>
              </a>
            
               <a target="_blank" href="https://github.com/vikashsathe">
              <i className="socialIcon ri-github-fill"></i>
            </a>
               <a target="_blank" href="https://www.linkedin.com/in/vikash-sathe-941166208/">
              <i className="socialIcon ri-instagram-line"></i>
            </a>
          </div>
        </div>

        <div className="col-md-6 col-11 px-3 px-md-5 d-flex justify-content-center align-items-center rightContect">
          <form 
            onSubmit={onSubmit}
            className="contect-right d-flex flex-column gap-4 col-12"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <input id="mail"
              name="name"
              type="text"
              placeholder="Your Name"
              className="inp col-12 p-3"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="inp col-12 p-3"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="inp col-12 p-3"
              style={{ minHeight: "150px" }}
              required
            />
            <button
              type="submit"
              className="contect-submit fs-6 col-md-4 col-6 px-5 py-3"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contect;
