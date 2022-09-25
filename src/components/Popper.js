import '../styles/Popper.css'

const pop = () => {
    console.log('pop')
}




const Popper = () => {
    return(
        <div className="containe info">
            <section className='pop'>
    <audio  
    className='audio' 
    id="pop" 
    src="https://assets.codepen.io/7784266/sfx-pop5.mp3"
    >
  </audio>
  
    <div className="outer">
      <div className="row">
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
      </div>
      <div className="row">
       <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
       
        
      </div>
      <div className="row">
       <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
      </div>
      <div className="row">
       <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>   
      </div>
      <div className="row">
     <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
      </div>
      <div className="row final">
       <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
        <div className="popper" onClick={pop}>
        </div>
      </div>
    </div>
    <div className="hr active"></div>
</section>
        </div>
    )
//     return()
}

export default Popper