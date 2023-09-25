import React from "react";
import TechStack from "./TechStack";

export default function ProjectCard ({data}) {
    const techStackList = data.techStack.map((tech, index) => 
        <TechStack tech={tech} index={index} />
    );

    return (
        <div className="container rounded-md px-4 py-6 shadow-md">
            <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 my-2">
                    <h2 className="text-xl uppercase font-bold">{data.name}</h2>
                    {techStackList}
                </div>
                <p>{data.description}</p>
            </div>
        </div>
    );
}