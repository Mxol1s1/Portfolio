import React from 'react'
import "./Card.css"

const Card = ({project}) => {
  return (
    <div className='Card'>
         <li key ={project.id} className='list-element'>
            <div className='image-container'>
                <img src={require(`../assets/${project.image}`)} alt={project.alt}/>
            </div>
            <div className='content-container'>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <button 
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href= project.link;
                    }}
                >
                    {project.linkDescription}
                </button>
            </div>
        </li>
    </div>
  )
}
export default Card