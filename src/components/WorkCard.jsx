import React from "react";

export default function WorkCard ({data}) {
    const techStack = data.techStack.map(tech => 
        <div className="text-sm inline-flex justify-center items-center px-2 py-1 rounded-md bg-pink-300">
            <p>{tech}</p>
        </div>
    );

    return (
        <div className="container rounded-md flex flex-row justify-around items-start gap-4 px-4 py-6 bg-pink-200">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s" 
                alt="" 
                className="hidden md:block md:w-28 md:h-28 rounded-md"
            />
            <div className="flex flex-col">
                <h2 className="text-sm">{data.company}</h2>
                <h3 className="text-2xl uppercase font-bold">{data.title}</h3>
                <div className="flex flex-wrap gap-2 my-2">
                    {techStack}
                </div>
                <p>{data.description}</p>
            </div>
        </div>
    );
}