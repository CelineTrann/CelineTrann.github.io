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
            <main className="w-11/12 md:w-3/5"> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
