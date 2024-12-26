import React from 'react'

export default function About(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}} >
  <div className="accordion-item" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>
    <h2 className="accordion-header" id="flush-headingOne"  >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>
      <h3 >About TextUtils</h3>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>
      <div className="accordion-body" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>TextUtils is a website where you can manipulate your text. You can change your text to uppercase & lowercase. You can apply Dark mode for night.  </div>
    </div>
  </div>
  <div className="accordion-item" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>
    <h2 className="accordion-header" id="flush-headingTwo" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>
       <h3> Contact us</h3>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>
      <div className="accordion-body" style={{background:props.mode==='light'?'white':'#031632',color:props.mode==='light'?'black':'white'}}>Mail for Bsuiness queries at [sk82530@gmail.com]</div>
    </div>
  </div>
  
  </div>

  )
}
