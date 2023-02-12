import React from 'react'
import "./NavBar.css"

import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className='NavBar'>

      <div className='navbar_logo'>
          <img data-testid="logo"  src={logo} alt="logo"/>
      </div>

      <div className="navbar_links_container">

        <div className='navbar_links'>
          <p><a data-testid="home" href='/'>Home</a></p>
          <p><a data-testid ="about" href='about'>About</a></p>
          <p><a data-testid="projects" href='projects'>Projects</a></p>
          <p><a data-testid="contact"  href='contact'>Contact Me</a></p>
        </div>

      </div>
     
    </div>
   
  )
}

export default NavBar

