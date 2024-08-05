import React from 'react'
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
 import Heroimg2 from '../Components/Heroimg2';
import Pricingcard from '../Components/Pricingcard';
import Wrk from '../Components/Wrk';
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading ="PROJECTS" text=" some of my most recet works"/>
      <Wrk />
      <Pricingcard />

      <Footer />
    </div>
  )
}

export default Project;