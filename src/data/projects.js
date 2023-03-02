const projects = [
    {
      id:1,
      title:"Portfolio",
      description:"This is a React portfolio website, showcasing projects, skills and personal information. The site is responsive and easy to navigate, with a contact form for easy communication. The goal is to share my work and connect with potential employers or collaborators.", 

      image:"me.png",
      link:"https://github.com/Mxol1s1/Portfolio",
      linkDescription:"Github link",
      alt: "portfolio_image"      
    },
    {
      id:2,
      title:"Mini-Crunch -News Articles ",
      description:"A news articles highlights project made in Reactjs. The data for the news comes from a wordpress site Techcrunch. Using Axios HTTP , the data is requested from the public wordpress api site in wp-json format. The data comes embedded with HTML tags which poses the risk of malicious attacks via xss (cross site scripting), to clean the data - a Dompurify was used. The project diplays a list of articles in each article the image , title, date, summary and link to the full article is diplayed.", 
      image:"mini.png",
      link:"https://github.com/Mxol1s1/news_article",
      linkDescription:"Github link",
      alt: "web_image"      
    },
    {
        id:3,
        title:"Jelly Gem Track: Zero Gravity",
        description:"Fast- paced online game where you play as a square jelly avoiding obstacles while collecting points, to dominate the leader board against other players globally.", 
  
        image:"game.png",
        link:"https://play.google.com/store/apps/details?id=com.magubane.jellygemtrack",
        linkDescription:"Game link",
        alt: "game_image"      
      },
    
      {
        id:4,
        title:"Content Creator @fallenworldstudios",
        description:"I am responsible for curating and presenting useful, code-related, content in a variety of programming languages including C#, Java, Python,", 
        image:"FWS.png",
        link:"https://www.youtube.com/channel/UC0DqBdu4RbyS-PNr_AJdNXA",
        linkDescription:"Youtube link",
        alt: "my_image"      
      },
    
     ]

export default projects;