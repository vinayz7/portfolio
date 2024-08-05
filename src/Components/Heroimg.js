import "./Heroimg.css";

import React from 'react'
import heroimg from"../assets/hero.webp"
import {Link} from "react-router-dom"
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
     <img className="into-img"src=
     {heroimg} alt="intoimg"/>
        </div>
        <div className="content">
       <p>HI, I'M FREELANCER.</p>
       <h1>React Developer.</h1>
       <div>
        <Link to="/Project" className="btn">PROJECTS</Link>
        <Link to="/Contact" className="btn btn-light">CONTACT</Link>
       </div>
        </div>
    </div>
  )
}

export default Heroimg;