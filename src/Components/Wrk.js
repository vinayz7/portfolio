import "./Workcard.css"
import Workcard from "./Workcard"
import WrkCardData from "./WrkCardData"
import React from 'react'


const Wrk = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {WrkCardData.map((val,ind) =>{
            return(
            <Workcard 
            key ={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}


            />
            )
           })}
        </div>
    </div>
  )
}

export default Wrk;