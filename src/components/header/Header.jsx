import React from "react";
import "./Header.css"
import  profile  from "../../assets/profile.png";

const Header = () => {
  const csharp_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  const java_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
  const python_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
  const javascript_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  const css_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  const html_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  const react_icon ="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          
  return (
    <div className="Header">
      

      <div className="Profile">
          <img src={profile} alt="profile"/>
          <div className="Profile_text">
            <h3 data-testid ="name">Mxolisi Magubane</h3>
            <p data-testid ="bio_description">Hello, World!</p>
          </div>  
      </div>

      <div className="Summary">
        <h2>Summary</h2>
        <hr className="Line"/>
        <p>I am a Graduate Software Engineer skilled in C#, Java, Python, and {'\n'}web development. I have a keen eye for
          detail and love creating clean and efficient code. {'\n'} I am always eager to expand my knowledge in the field of software
          engineering.  {'\n'}I do not mind digging into boring work as more often than not it is where the details that matter are found.</p>
      </div>
     
      <h2>Skills</h2>
      <hr className="Line"/>

      <div className="Skills_icons">
            <img data-testid="csharp" src={csharp_icon}  alt="csharp"/>
            <img data-testid="java"  src={java_icon}  alt="java"/>
            <img data-testid="python"  src={python_icon} alt="python"/>
            <img data-testid="html" src = {html_icon} alt="html"/>
            <img data-testid="css" src={css_icon} alt="css"/>
            <img data-testid="javascript"  src= {javascript_icon} alt="javascript"/> 
            <img data-testid="react" src= {react_icon} alt ="react"/>
      </div>
      
    </div>
  )
}

export default Header