import React from 'react'
import Header from '../header/Header'
import "./Home.css"

const Home = ({ languages }) => {
  return (
    <div className="appBar">
        <Header languages={languages} />
    </div>
  )
}

export default Home