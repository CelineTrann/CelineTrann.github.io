import React from "react";

export default function TechStack ({tech, index}) {

    return (
        <div key={index} className="text-sm inline-flex justify-center items-center px-2 py-1 rounded-md bg-sky-200 text-blue-600">
            <p>{tech}</p>
        </div>
    );
}

