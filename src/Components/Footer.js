import "./Footer.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
                <p>123 Housing Society</p>
                <p>Hyderabad</p>
            </div>
            </div>

            <div className="phone">
            <h4><FaPhone  size={20} style={{color:
                "#fff", marginRight:"2rem"}}/>
                7730803148</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk  size={20} style={{color:
                "#fff", marginRight:"2rem"}}/>
               info@gmail.com</h4>
            </div>
        </div>

        <div className="right">
            <h>About the company</h>
            <p>This is mee viany.CEO &
                Founder of Vtech. I enjoy discuss
                new projects and design challenges.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:
                "#fff", marginRight:"1rem"}}/>
                 <FaTwitter size={30} style={{color:
                "#fff", marginRight:"1rem"}}/>
                 <FaLinkedin size={30} style={{color:
                "#fff", marginRight:"1rem"}}/>

                </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Footer;