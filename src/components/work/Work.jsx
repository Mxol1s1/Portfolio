import React from 'react'
import game from "../../assets/game.png"
import FWS from "../../assets/FWS.png"
import me  from "../../assets/me.png"
import { motion } from 'framer-motion'
import "./Work.css"


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

        <div className="Game">
          <img src={me} alt="mxolisi_icon"/>
          <h4>Portfolio - recursive call :)</h4>
          <p data-testid="portfolio">This is a React portfolio website, 
showcasing projects, skills and personal information. The site is responsive and easy to navigate, 
with a contact form for easy communication. The goal is to share my work and connect 
with potential employers or collaborators.
          </p>
          <button
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://github.com/Mxol1s1/Portfolio';
            }}
          >Github Link</button>
        </div>

        <div className="Game">
          <img src={game} alt="game_icon"/>
          <h4>Jelly Gem Track: Zero Gravity</h4>
          <p data-testid="game">Fast- paced online game where you play as a square jelly
            avoiding obstacles while collecting points, to dominate 
            the leader board against other players globally.
          </p>
          <button
           type="button"
           onClick={(e) => {
           e.preventDefault();
           window.location.href='https://play.google.com/store/apps/details?id=com.magubane.jellygemtrack';
           }}
          >Game Link</button>
        </div>

        <div className="Game">
          <img src={FWS} alt="fallenworldstudios_icon"/>
          <h4>Content Creator @fallenworldstudios</h4>
          <p data-testid="channel">I am responsible for curating and presenting useful, code-related, content in 
            a variety of programming languages including C#, Java, Python,
            Javascript etc.  
          </p>
          <button 
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.youtube.com/channel/UC0DqBdu4RbyS-PNr_AJdNXA';
            }}
          >Youtube Link</button>
        </div>

      </div>
      
    </motion.div>
  )
}

export default Work