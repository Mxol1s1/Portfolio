import React from 'react'
import "./Content.css"
import  about from "../../assets/about.png";
import  lisa from "../../assets/lisa.png";

const Content = () => {
  return (
    <div className="Content">
      <h2 >Well, What can you say about  yourself? </h2>
      <div className="Description">
        <img src={about} alt="about"/>
        <p data-testid = "about">There is not really much to say - I don't really do much.{'\n'}
I was born and raised in Durban, South Africa and have stayed put ever since.{'\n'}
While in high school, I fell in love with the STEMS and discovered that solving math problems{'\n'}
was actually more fun than beating King Of Fighters 2000's Final Boss (Good times though).{'\n'}
Finished high school with my earned distinctions in Maths and Science and went off to varsity to study Pharmacy.{'\n'}
You probably asking why Pharmacy - right? Well, the truth is I have no idea myself.{'\n'}
I did Pharmacy till  my final year but, before I could finish, I got seduced by programming. I then made {'\n'}
the most important and biggest decision of my life, that affected not just me but everyone around me{'\n'}
family, friends, foes - I bet even God farted a bit. Yes, I made  a career pivot and pursued the world of{'\n'}
of programming and, between then and now, I will say I am very happy I made that decision.</p>
      </div>
     
     
      <div className="Hobbies">
        <div>
        <h2>Yeah, yeah, whatever. Got any hobbies?</h2>
          <img src={lisa} alt="lisa"/>
        </div>
        <div>
       
          <h3>Gaming</h3>
          <p data-testid ="hobby_desc1">I love playing fighting games and open world games{'\n'}
particulary fantasy and action genres - NO FIFA! I hate
soccer/football period.
          </p>

          <h3>YouTubing?</h3>
          <p data-testid ="hobby_desc2">I am not sure if I can call it a hobby but I have
been posting some C# content to an anonymous channel between me and you 
- it's actually called Fall3nWorldStudios.{'\n'} It not something I took seriously
 till people started to find it useful
          </p>
          
        </div>
      </div>
     
    </div>
  )
}

export default Content