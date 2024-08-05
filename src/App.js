// import logo from './logo.svg';
// import './App.css';

import React from "react";
// import{browserRouter, Route} from "react-router-dom"
import"./index.css";
import Homes from "./routes/Homes";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import{Route,Routes} from"react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element ={<Homes/>}/>
    <Route path="/Project" element ={<Project/>}/>
    <Route path="/About" element ={<About/>}/>
    <Route path="/Contact" element ={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
