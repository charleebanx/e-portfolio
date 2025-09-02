import React from 'react'
import {Routes,Route} from "react-router";
import Navbar from "./assets/components/components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";

const App = () => {
  return (
    
    <div className = "min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/portfolio" element = {<Portfolio />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>

    </div>
  )
}

export default App

