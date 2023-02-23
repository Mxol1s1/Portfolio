import React from 'react'
import game from "../../assets/game.png"
import FWS from "../../assets/FWS.png"
import me  from "../../assets/me.png"

import "./Work.css"


const Work = () => {
  return (
    <div className="Work">

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
          <button>Github Link</button>
        </div>

        <div className="Game">
          <img src={game} alt="game_icon"/>
          <h4>Jelly Gem Track: Zero Gravity</h4>
          <p data-testid="game">Fast- paced online game where you play as a square jelly
            avoiding obstacles while collecting points, to dominate 
            the leader board against other players globally.
          </p>
          <button>Game Link</button>
        </div>

        <div className="Game">
          <img src={FWS} alt="fallenworldstudios_icon"/>
          <h4>Content Creator @fallenworldstudios</h4>
          <p data-testid="channel">I am responsible for curating and presenting useful, code-related, content in 
            a variety of programming languages including C#, Java, Python,
            Javascript etc.  
          </p>
          <button>Youtube Link</button>
        </div>

      </div>
      
    </div>
  )
}

export default Work