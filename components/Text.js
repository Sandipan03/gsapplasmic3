/**@format */
import React from 'react'
import { useState,useRef} from 'react'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Text({className}) {
    
    useGSAP(()=>{
       gsap.to("*",{
            duration: 3,
            delay: 3,
            backgroundColor: "white"
            // backgroundImage: "linear-gradient(to bottom, blue , white)",
            // backgroundColor: "linear-gradient(to right, red , blue)",
            
       })
        gsap.from("h1",{
            y:100,
            duration: 1,
            delay: 4,
            stagger: 1,
            opacity: 0,
        })
        gsap.from("h2",{
            y: 100,
            duration: 1,
            stagger: 0.5,
            opacity: 0,
            scrollTrigger: {
                trigger: "h2",
                scroller: "body",
                // markers: true,
                start: "top 90%",
                end: "top 30%",
                scrub: 2
                
            }
        })
        gsap.to(".start",{
            duration: 3,
            delay: 1,
            opacity: 0,
            y: -200
        }),
        gsap.to(".boxes",{
            duration: 3,
            delay: 0.5,
            rotate: 1080,
            scale:0
        })
    })
  return (
    <div className={className} >
        <div className="start" style={{position: "absolute",height:"100vh"}}>
            <div style={{marginTop:"0", fontSize:"40px", color: "white"}}>Starting...
                <div className="boxes" style={{width:"40px", display:"grid",gridTemplateColumns:"20px 20px",marginLeft:"auto", marginTop:"10px", gridRow:"auto auto", gridRowGap:"2px",gridColumnGap:"2px"}}>
                    <div style={{backgroundColor:"red", width:"20px",height:"20px"}}></div>
                    <div style={{backgroundColor:"yellow", width:"20px",height:"20px"}}></div>
                    <div style={{backgroundColor:"green", width:"20px",height:"20px"}}></div>
                    <div style={{backgroundColor:"white", width:"20px",height:"20px"}}></div>
                </div>
            </div>
        </div>
        <div className="content">
            <h1>Hello!</h1>
            <h1>Welcome!</h1>
            <h1>This is a tutorial for</h1>
            <h1>Using gsap, react and plasmic</h1>
        </div>
        
        <div className="scroller" style={{marginTop:"100px",height:"80vh"}}>
            <h2>This</h2>
            <h2>is</h2>
            <h2>the</h2>
            <h2>scroll portion</h2>
        </div>

    </div>
  )
}

export default Text