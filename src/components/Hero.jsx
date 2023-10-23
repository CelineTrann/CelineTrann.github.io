import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export default function Hero () {
    return (
        <section className="container flex flex-col md:flex-row items-center md:justify-between gap-8 py-4 md:py-8">
            <img 
                src="/profile.svg" 
                alt="Image of Celine" 
                className="rounded-full w-64 h-64 " 
            />
            <div className="flex flex-col justify-around w-10/12 md:w-1/3 gap-4 md:grow">
                <h1 className="text-2xl">Hello! I'm Celine.</h1>
                <p>I’m a recent engineering graduate of the University of Waterloo. I have experiene in backend web development and test automation. I am currently seeking a <b>full time software developer position.</b></p>
                <p>Feel free to reach out at cyptran@uwaterloo.ca!</p>

                <div id="icon-container" className="flex flex-row items-center gap-4 my-4">
                    <a href="https://github.com/CelineTrann" target="_blank" id="github" className="hover:scale-125 ease-in-out duration-300">
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/celine-tran-38401b177/" target="_blank" id="linkedin" className="hover:scale-125 ease-in-out duration-300">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                    <a href="src\assets\Resume.pdf" target="_blank" id="resume" className="hover:scale-125 ease-in-out duration-300">
                        <FontAwesomeIcon icon={faFile} size="2xl" />
                    </a>
                </div>
            </div>
        </section>
    );
}