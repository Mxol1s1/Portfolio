import React from "react";
import "./Header.css"
import  profile  from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="Header">
      
      <img src={profile} alt="profile"/>
      <div className="Profile">
          <h3 data-testid ="name">Mxolisi Magubane</h3>
          <p data-testid ="bio_description">Hello, World!</p> 
      </div>
      
    </div>
  )
}

export default Header