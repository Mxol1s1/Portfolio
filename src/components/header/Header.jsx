import React from "react";
import "./Header.css"
import  profile  from "../../assets/profile.png";
import { motion } from 'framer-motion'

const Header = ({ languages }) => {
  return (
    <motion.div 
        initial={{y: "100%"}}
        animate = {{y: "0%"}}
        exit= {{opacity:1}}
        transition ={{ duration: 0.90, ease:"easeOut"}}
        className="Header">
        <div  className="Profile">
            <img src={profile} alt="profile"/>
            <div className="Profile_text">
                <h3 data-testid ="name">Mxolisi Magubane</h3>
                <p data-testid ="bio_description">Hello, World!</p>
            </div>  
        </div>

      <div className="Summary">
          <h2>Summary</h2>
          <hr className="Line"/>
          <p data-testid ="summary_description">I am an entry level fullstack developer 
skilled in C#, Java, Python, and web development with a keen eye for detail 
and a love for creating clean and efficient code.</p>
      </div>

      <h2>Skills</h2>
      <hr className="Line"/>
      <div 

          className="Skills_icons">
          <ul data-testid ="skills">
          {languages.map((item) =>(

              <li  key={item.id}>
                  <img src={item.link}  alt={item.alt}/>
              </li>

            ))}
          </ul>
      </div>
      <h2>Documents</h2>
      <hr className="Line"/>
      <div className="Documents">
          <button
          type="butoon"
          onClick={(e) => {
            e.preventDefault();
            window.location.href ="https://drive.google.com/file/d/1Dfmb1qLiyLU0Enqv3lCqmRV-L_-OGbKE/view?usp=sharing";
          }}
          >Download Resume</button>
      </div>
    </motion.div>
  )
}

export default Header