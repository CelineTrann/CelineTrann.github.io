import React from "react";
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'

export default function Home () {
    return (
        <div className="container flex flex-col items-center">
            <NavBar></NavBar>
            <div className="w-11/12 md:w-3/5">
                <Hero></Hero>
                <WorkExperience></WorkExperience>
            </div>
        </div>
    );
}