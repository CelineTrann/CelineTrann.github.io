import React from "react";
import TechStack from "./TechStack";

export default function WorkCard ({data}) {
    const techStackList = data.techStack.map((tech, index) => 
        <TechStack tech={tech} index={index} />
    );

    const imgAlt = () => data.company + ' Logo';
    
    return (
        <div className="container rounded-md flex flex-row justify-around items-start gap-4 px-4 py-6 shadow-md">
            <img 
                src={data.img}
                alt={imgAlt()}
                className="hidden md:block md:h-28 rounded-md"
            />
            <div className="flex flex-col">
                <h2 className="text-sm">{data.company}</h2>
                <h3 className="text-xl uppercase font-bold">{data.title}</h3>
                <div className="flex flex-wrap gap-2 my-2">
                    { techStackList }
                </div>
                <p>{data.description}</p>
            </div>
        </div>
    );
}