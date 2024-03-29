import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'

import Home from './pages/Home'
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
    const [theme, setTheme] = useState("null");

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        console.log(theme);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark");
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-background text-text">
            <NavBar theme={theme} handleTheme={handleThemeSwitch}></NavBar>
            <main className="w-11/12 md:w-3/5"> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App
