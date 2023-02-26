import React  from "react";
import  { Route, Routes } from "react-router-dom";
import { NavBar,Header, Content , Work, Contact, ScrollUpImage} from "./components";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import languages from "./data/skills"
import socials from "./data/socials";

const App = () =>
{
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