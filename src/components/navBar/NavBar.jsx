import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./NavBar.css"

import logo from "../../assets/logo.png";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const nav_menu = () =>{
    return <div className='navbar_menu_item'>
    <p><a data-testid="home" href='/'>Home</a></p>
    <p><a data-testid ="about" href='about'>About</a></p>
    <p><a data-testid="projects" href='projects'>Projects</a></p>
    <p><a data-testid="contact"  href='contact'>Contact Me</a></p>
    </div>
  }
  return (
    <div className='NavBar'>

      <div className='navbar_logo'>
          <img data-testid="logo"  src={logo} alt="logo"/>
      </div>

      <div className="navbar_links_container">
          {nav_menu()}
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
            <div className="navbar_menu_container">
                {nav_menu()}
            </div>
        )}
      </div>
     
    </div>
   
  )
}

export default NavBar

