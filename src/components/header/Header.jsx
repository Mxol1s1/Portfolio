import React from "react";
import "./Header.css"
import  profile  from "../../assets/profile.png";

const Header = ({ languages }) => {
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
          <ul>
          {languages.map((item) =>(

              <li  key={item.id}>
                  <img src={item.link}  alt={item.alt}/>
              </li>

            ))}
          </ul>
      </div>
      
    </div>
  )
}

export default Header