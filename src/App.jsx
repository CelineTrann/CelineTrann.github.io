import React from 'react'

import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import NavBar from './components/NavBar'

function App() {
    return (
        <div className="container flex flex-col items-center">
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App
