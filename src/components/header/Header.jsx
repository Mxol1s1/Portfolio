import React from "react";
import "./Header.css"
import  profile  from "../../assets/profile.png";

const Header = () => {
  const csharp = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  const java = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
  const python = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
  const javascript ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  const css ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  const html ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  const react ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          
  return (
    <div className="Header">
      

      <div className="Profile">
          <img src={profile} alt="profile"/>
          <div className="Profile_text">
            <h3 data-testid ="name">Mxolisi Magubane</h3>
            <p data-testid ="bio_description">Hello, World!</p>
          </div>
         
           
      </div>
      <h2>Skills</h2>
      <hr className="Line"
     
      />
      <div className="skills_icons">
         
            <img src={csharp}  alt="csharp"/>
            <img src={java}  alt="java"/>
            <img src={python} alt="python"/>
            <img src = {html} alt="html"/>
            <img src={css} alt="css"/>
            <img src= {javascript} alt="javascript"/> 
            <img src= {react} alt ="react"/>
          
      </div>
      
    </div>
  )
}

export default Header