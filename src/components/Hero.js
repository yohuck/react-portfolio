import React from "react";
import Typewriter from "typewriter-effect"
import '../styles/Hero.css'


const Hero = () => {
    return (
        <div className="container">
    <section>
        <div className="grp">
            <h1 className="welcome-hero">
              Howdy, friend.<span className="second">  I'm Eric.</span>
            </h1>
            <p className="welcome-text">I'm a front-end developer who loves building <span aria-label="bold, inviting, accessible, inviting, whimsical, effective"></span><span className="descrip" aria-hidden="true" >
                <Typewriter className="type"
                onInit={(typewriter) => {
                    typewriter
                    .typeString('bold')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('inviting')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('accessible')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('whimsical')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('effective')
                    .pauseFor(1000)
                    .start()
                }}
                /></span>UI.
               I spent the first decade of my career building <span className="ayo1">customer</span> processes and have become an expert in the people on the other side of the screen. </p>
              
               <p className="welcome-text mobile">
                Want to check out my resume? View it <a target="_blank" href="https://docs.google.com/document/d/1NHRPvw4y2NBZ1Rd52Dm9ek9CZjjWjDPKq7od_7C7JN4/">here</a>.
            </p>
            <br></br>
           
            <div className="mobile">
                <p className="welcome-text">
                    All of my work is implemented mobile-first. Want to view on your phone?
                </p>
                <form action="" method="">
                    <input type="phone" name="phoneNumber" id="phoneNumber" placeholder="555-555-5555" /><button className="primary"  id="sub">Text Me</button>
                </form>
            </div>
      <button className="primary desktop" >View my resume.</button>
  </div>
    
        <div className="circle-3">
    
        </div>
        <div className="photo">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    
    
    
    
    </section>
</div>
    )
}

export default Hero