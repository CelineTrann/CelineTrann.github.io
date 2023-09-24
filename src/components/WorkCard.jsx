import React from "react";

export default function WorkCard () {
    return (
        <div className="container md:h-48 rounded-md flex flex-row justify-around items-center bg-pink-200">
            <img 
                src="" 
                alt="" 
                className="hidden md:block md:w-32 md:h-32"
            />
            <div className="flex flex-col md:w-3/4">
                <p>Company</p>
                <h1>JOB TITLE</h1>
                <div className="flex justify-around">
                    <div>Python</div>
                    <div>HTML</div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, iure iste. Dolores blanditiis atque libero nulla. Aliquid corporis odio itaque cum similique? Officia exercitationem delectus perspiciatis enim eaque odio dolor.</p>
            </div>
        </div>
    );
}