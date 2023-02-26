import React from 'react'
import "./Content.css"
import  about from "../../assets/about.png";
import  lisa from "../../assets/lisa.png";
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Content = () => {
  return (
    <motion.div 
        initial={{y: "100%"}}
        animate = {{y: "0%"}}
        exit= {{opacity:1}}
        transition ={{ duration: 0.90, ease:"easeOut"}}
        className="Content">
        <h2 >Well, What can you say about  yourself? </h2>
        <div className="Description">
            <img src={about} alt="about"/>
            <Tabs selectedTabClassName='Tab'>
              <TabList >
               
                <Tab><h3>Education</h3></Tab>
                <Tab><h3>Experience</h3></Tab>
              </TabList>

              <TabPanel>
                <ul className='List'>
                  <li><p><strong>WeThinkCode_  (2021 -2023)</strong> </p></li>
                    <p>   NQF level 5 Certificate</p>
                  <li><p><strong>BPharmacy (incomplete)  (2016 -2020)</strong></p></li>
                    <p>   Career pivot</p>
                  <li><p><strong>Qhilika High School - 2015</strong></p></li>
                  <p>    Matric - NSC</p>
                </ul>
              </TabPanel>

              <TabPanel >
              <ul className='List'>
                  <li><p><strong>Game Development  (personal project)</strong> </p></li>
                    <p>   Jelly Gem Track: Zero Gravity (C# and Unity)</p>
                  <li><p><strong>Portfolio Website</strong></p></li>
                    <p>    This is a static website built with React</p>
                  <li><p><strong>Workshop Instructor</strong></p></li>
                    <p>    WeThinkCode - (Java OOP)</p>
                </ul>
              </TabPanel>
            </Tabs>

        </div>
      <div className="Hobbies">
        <div>
            <h2>Got any hobbies?</h2>
            <img src={lisa} alt="lisa"/>
        </div>
        <div>
            <h3>Gaming</h3>
            <p data-testid ="hobby_desc1">I love playing fighting games like Mortal Kombat, Injustice 
Tekken and open world games such Watch dogs, Sleeping dogs, GTA, COD etc. I enjoy mainly fantasy, action
and adventure genres - NO FIFA! I hate soccer/football period.
            </p>
            <h3>YouTubing?</h3>
            <p data-testid ="hobby_desc2">I am not sure if I can call it a hobby but I have 
been posting some C# content to an anonymous channel - between me and you 
- it's actually called Fall3nWorldStudios. It not something I took seriously
till people started to find it useful</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Content