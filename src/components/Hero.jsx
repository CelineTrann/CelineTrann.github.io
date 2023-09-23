import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export default function Hero () {
    return (
      <div className="container bg-blue-200">
        <div className="flex flex-row justify-center gap-16 py-16">
            <img 
                src="https://randomuser.me/api/portraits/women/81.jpg" 
                alt="Image of Celine" 
                className="rounded-full w-64 h-64" 
            />
            <div className="flex flex-col justify-around w-1/3">
                <h1 className="text-2xl">Hello! I'm Celine.</h1>
                <p>I’m a recent engineering graduate of the University of Waterloo. I have experiene in backend web development and test automation. I am currently seeking a <b>full time software developer position.</b></p>
                <p>Feel free to reach out at cyptran@uwaterloo.ca!</p>

                <div id="icon-container" className="flex flex-row items-center text-4xl gap-4">
                    <a href="https://github.com/CelineTrann" target="_blank" className="hover:scale-125">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/celine-tran-38401b177/" target="_blank" className="hover:scale-125">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="" target="_blank" className="hover:scale-125">
                        <FontAwesomeIcon icon={faFile} />
                    </a>
                </div>
            </div>
        </div>

      </div>  
    );
}