import React from "react";
import { Header, NavBar, Content } from "./components";
import "./App.css";



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
    
        },
        
      ]
    return (
    <div className="App">
        <div className="appBar">
            <NavBar/>
            <Header languages={languages} />
            <Content/>
            
        </div>
    </div>
    
        
    )
}

export default App;