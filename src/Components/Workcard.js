import "./Workcard.css"
import React from 'react'

import { NavLink } from "react-router-dom"

const Workcard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="imagee"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
    <div className="pro-btns">
        <NavLink to={props.view} className="btn">view</NavLink>
        <NavLink to="url.com" className="btn">Source</NavLink>
        </div>
        </div>

</div>
  )
}

export default Workcard;