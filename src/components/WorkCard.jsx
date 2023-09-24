import React from "react";

export default function WorkCard () {
    return (
        <div className="container rounded-md flex flex-row justify-around items-center gap-4 p-4 bg-pink-200">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s" 
                alt="" 
                className="hidden md:block md:w-28 md:h-28 rounded-md"
            />
            <div className="flex flex-col">
                <p className="text-sm">Company</p>
                <h1 className="text-2xl">JOB TITLE</h1>
                {/* <div className="flex justify-around">
                    <div>Python</div>
                    <div>HTML</div>
                </div> */}
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, iure iste. Dolores blanditiis atque libero nulla. Aliquid corporis odio itaque cum similique? Officia exercitationem delectus perspiciatis enim eaque odio dolor.</p>
            </div>
        </div>
    );
}