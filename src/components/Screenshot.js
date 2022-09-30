import React, { useState } from "react";


const Screenshot = ({ url, displays, setDisplay }) => {
    const [transition, setTransition] = useState('')
    const handleClick = (e) => {
        setTransition('out')
        setTimeout(()=> {
            setDisplay(() => !displays)
        }, 300)
        
    }

  return (

    displays ? 
    <div className={displays.toString()} id={transition}>
        <section className="screenshot" >
            <button onClick={handleClick} className="primary">X</button>
            <img src={url} alt="screenshot of application" id="pic"  />

        </section>
   </div> : ''

 
  );
};

export default Screenshot;
