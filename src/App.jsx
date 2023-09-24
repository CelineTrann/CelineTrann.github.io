import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'

import './App.css'

function App() {
  return (
    <>
        <NavBar></NavBar>
        <Hero></Hero>
        <WorkExperience></WorkExperience>
    </>
  )
}

export default App
