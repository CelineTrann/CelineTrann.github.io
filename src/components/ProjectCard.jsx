import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import TechStack from "./TechStack";

export default function ProjectCard ({data}) {
    const techStackList = data.techStack.map((tech, index) => 
        <TechStack tech={tech} index={index} />
    );

    const linkList = data.links.map(link => 
        <>
        {link.includes("github.com") && 
            <a href={link} target="_blank" className="hover:scale-125 ease-in-out duration-300">
                <FontAwesomeIcon icon={faGithub} size="xl"/>
            </a>
        }
        {link.includes("youtu") && 
            <a href={link} target="_blank" className="hover:scale-125 ease-in-out duration-300">
                <FontAwesomeIcon icon={faYoutube} size="xl"/>
            </a>
        }
        </>
    )

    return (
        <div className="container rounded-md px-4 py-6 shadow-md md:flex md:flex-col">
            {data.img &&
                <div className="hidden md:block ">
                    <img src={data.img} alt={data.imgAlt} className="md:object-contain" />
                </div>
            }
            <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 my-2">
                    <h2 className="text-xl uppercase font-bold">{data.name}</h2>
                    {linkList}
                </div>
                <div className="flex flex-wrap gap-2 my-2">
                    {techStackList}
                </div>
                <p>{data.description}</p>
            </div>
        </div>
    );
}