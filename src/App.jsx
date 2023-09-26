import React from 'react'

import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
    </Routes>
  )
}

export default App
