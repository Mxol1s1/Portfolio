import React, {useEffect, useState}  from 'react'
import logo from "../assets/logo.png";
import "./ScrollUpImage.css"

function ScrollUpImage() {

    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 10){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        })
    }
  return (
    <div className='Scroll'>
        {backToTopButton && (
            <button onClick={() =>{scrollUp()}} >
              <img  src={logo} alt="logo"/>
            </button>

        )}
      
    </div>
  )
}

export default ScrollUpImage