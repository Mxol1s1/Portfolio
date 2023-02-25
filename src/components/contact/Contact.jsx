import React from 'react'
import "./Contact.css"
import { motion } from 'framer-motion'

const Contact = ( {socials} ) => {
  return (
    <motion.div 
    initial={{y: "100%"}}
    animate = {{y: "0%"}}
    exit= {{opacity:1}}
    transition ={{ duration: 0.90, ease:"easeOut"}}
    className='Contact'>
        <h2>Let's Connect</h2>
        <hr className='Line'/>
        <div className='Info'>
            <p data-testid="email">mxomag074@gmail.com</p>
            <p data-testid="number">0604377595</p>
        </div>
        <div className='Links'>
          <ul>
            {socials.map((item) =>(

                <li  key={item.id}>
                  <a href={item.link}>
                    <img src={item.icon}  alt={item.alt}/>
                  </a>  
                </li>

              ))}
            </ul>

        </div>
       
    </motion.div>
  )
}

export default Contact