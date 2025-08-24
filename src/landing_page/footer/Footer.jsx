import React from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {


      useGSAP(() => {

        
     gsap.to(".heartBlink", {
  opacity: 0,
  duration: 1.5, 
  repeat: -1,    
  yoyo: true,    
  ease: "power1.inOut"
});

    

      })
  return (
    <>
    
        <div className="row d-flex justify-content-center align-items-center px-2 px-md-5">
            <h6 className='text-center py-4' style={{color:" rgb(85, 85, 85)"}}>created with <span className='heartBlink'> ❤️ </span> by <span style={{color:"#ffe066"}}>me</span></h6>
        </div>
    
    </>
  )
}

export default Footer