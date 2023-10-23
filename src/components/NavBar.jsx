import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar ({handleTheme}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(prevState => !prevState);

    return (
        <header className={`container flex flex-col md:flex-row md:justify-end items-end md:items-center py-4 px-4 gap-4 fixed md:static top-0 right-0 ${isOpen ? "bg-white" : ""}`}>
            <button className="md:hidden" onClick={toggleNav}>
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="xl" />
            </button>
            <nav className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row md:justify-end items-end md:items-center gap-4 md:gap-8 md:px-16 md:py-4 md:h-16`}>
                <Link to={"/"} className="uppercase hover:underline" onClick={toggleNav}>HOME</Link>
                <Link to={"/projects"} className="uppercase hover:underline" onClick={toggleNav}>PROJECTS</Link>
                <Link to={'/contact'} className="uppercase hover:underline" onClick={toggleNav}>CONTACT</Link>
                <button onClick={handleTheme}>
                    <FontAwesomeIcon icon={faSun} size="xl" className="align-middle hover:text-blue-500"/>
                </button>
                
            </nav>
        </header>
    );
}