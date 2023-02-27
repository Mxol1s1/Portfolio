import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import  { Link } from "react-router-dom";
import "./NavBar.css"

import logo from "../../assets/logo.png";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const nav_menu = () =>{
    return <div className='navbar_menu_item'>

    <p><Link data-testid="home" to='/'>Home</Link></p>
    <p><Link data-testid ="about" to='/about'>About</Link></p>
    <p><Link data-testid="projects" to='/projects'>Projects</Link></p>
    <p><Link data-testid="contact"  to='/contact'>Contact</Link></p>
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

