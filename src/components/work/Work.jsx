import React from 'react'
import { motion } from 'framer-motion'
import "./Work.css"
import projects from "../../data/projects"
import Card from '../Card'

const Work = () => {
  return (
    <motion.div 
      initial={{y: "100%"}}
      animate = {{y: "0%"}}
      exit= {{opacity:1}}
      transition ={{ duration: 0.90, ease:"easeOut"}}
      className="Work">

      <h1>So what have you been working on?</h1>
      <div className="Projects">
          <ul  data-testid ="projects">
            {projects.map((project) => (
              <Card key={project.id} project={project}/>
            )) }
          </ul>
      </div>
    </motion.div>
  )
}
export default Work