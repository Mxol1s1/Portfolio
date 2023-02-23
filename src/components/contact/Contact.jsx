import React from 'react'
import "./Contact.css"

const Contact = ( {socials} ) => {
  return (
    <div className='Contact'>
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
                    <img src={item.link}  alt={item.alt}/>
                </li>

              ))}
            </ul>

        </div>
       
    </div>
  )
}

export default Contact