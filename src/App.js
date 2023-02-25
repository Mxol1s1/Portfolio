import React  from "react";
import  { Route, Routes } from "react-router-dom";
import { NavBar,Header, Content , Work, Contact, ScrollUpImage} from "./components";
import "./App.css";
import { AnimatePresence } from "framer-motion";

const App = () =>
{
    const languages = [
        {
          id:1,
          link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
          alt: "csharp_icon"
    
        },
        {
          id:2,
          link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
          alt: "java_icon"
    
        },
        {
          id:3,
          link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
          alt: "python_icon"
    
        },
        {
          id:4,
          link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "javascript_icon"
    
        },
        {
          id:5,
          link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          alt: "css_icon"
    
        },
        {
          id:6,
          link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          alt: "html_icon"
    
        },
        {
          id:7,
          link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
          alt: "react_icon"
    
        }, ]

  const socials = [
    {
      id:1,
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
      alt:"github_icon",
      link:"https://github.com/Mxol1s1"

    },
    {
      id:2,
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", 
      alt:"linkedIn_icon",
      link:"https://www.linkedin.com/in/mxol1s1-magubane/"

    },]


    return (
      <div className="App">
          <ScrollUpImage/>
          <NavBar/>
          <AnimatePresence  >
            <Routes>
             <Route path="/" element = { <Header key="/" languages={languages}/>}/>
             <Route path="/about"  element = { <Content key="/about"/>} />
             <Route path="/contact"  element = { <Contact key="/contact" socials={socials}/>}/>
             <Route path="/projects" element ={ <Work key="/projects"/>}/>
            </Routes>
          </AnimatePresence>
        
      </div>
      
    )
}

export default App;