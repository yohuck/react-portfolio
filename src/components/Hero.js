import React from "react";
import Typewriter from "typewriter-effect"
import '../styles/Hero.css'

let ui = '';
let uiChoices = ['b','bo','bol','bold', 'bold','bold', 'bold', 'i', 'in', 'inv', 'invi', 'invit', 'inviti', 'invitin', 'inviting', 'inviting', 'inviting', 'inviting', 'a', 'ac','acc','acce','acces','access','accessi','accessib','accessibl','accessible', 'accessible','accessible', 'accessible','w','wh','whi','whim','whims','whimsi','whimsic','whimsica','whimsical', 'whimsical','whimsical', 'whimsical','e','ef','eff','effe','effec','effect','effecti','effectiv','effective', 'effective','effective', 'effective']
let customer = '';
let customerChoices = ['c','cu','cus','cust','custo','custom','custome','customer','customer','customer','customer','customer','customer', 'u', 'us','use','user','user','user','user','user','c','cl','cli','clie','clien','client','client','client','client','client', 'p', 'pa', 'par', 'part', 'partn', 'partne', 'partner', 'partner', 'partner', 'partner', 'partner', 'partner']
let results = [ui, customer]
let choices = [uiChoices, customerChoices]

const ticker = (index) => {
    console.log(index)
    let choice = 0
    results[index] = choices[index][choice]
    setInterval(() => {
        choice++
        if (choice > choices[index].length - 1){
            choice = 0;
        }
       results[index] = choices[index][choice]

    }, 200);
}

for (let i = 0; i < results.length; i++){
    ticker(i)
}

const Hero = () => {
    return (
        <div className="container">
    <section>
        <div className="grp">
            <h1 className="welcome-hero">
              Howdy, friend.<span className="second">  I'm Eric</span>.
            </h1>
            <p className="welcome-text">I'm a front-end developer who loves building <span aria-label="bold, inviting, accessible, inviting, whimsical, effective"></span><span className="descrip" aria-hidden="true" >
                <Typewriter className="type"
                onInit={(typewriter) => {
                    typewriter
                    .typeString('bold')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('inviting')
                    .deleteAll()
                    .typeString('accessible')
                    .start()
                }}
                /></span> UI.
               I spent the first decade of my career building <span className="ayo1">customer</span> processes and have become an expert in the people on the other side of the screen. </p>
              
               <p className="welcome-text mobile">
                Want to check out my resume? View it <a target="_blank" href="https://docs.google.com/document/d/1NHRPvw4y2NBZ1Rd52Dm9ek9CZjjWjDPKq7od_7C7JN4/">here</a>.
            </p>
           
            <div className="mobile">
                <p className="welcome-text">
                    All of my work is implemented mobile-first. Want to view on your phone?
                </p>
                {/* <form action="" method="">
                    <input type="phone" name="" id="" placeholder="555-555-5555" bind:value={value} > <button class="primary" on:click|preventDefault={handleClick} id="sub">Text Me</button>
                    <div>{status}</div>
                </form> */}
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