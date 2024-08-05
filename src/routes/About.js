import React from 'react'
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import AbooutContent from '../Components/AbooutContent';
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT"  text="Im a friendly Front-End Developer"/>
      <AbooutContent />
      <Footer />
      
    </div>
  )
}

export default About;