import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    
    <>
   <nav className={`navbar navbar-expand-lg navbar-expand-md container-fluid navbar-expand-smnavbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:props.mode==='light'?'black':'white'}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==='light'?'black':'white'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color:props.mode==='light'?'black':'white'}}>{props.abt}</Link>
        </li>
        </ul>
      
      <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-3" type="checkbox" onChange={props.changemode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
    </div>
   
  </div>
</nav>
    
    </>
  )
}
