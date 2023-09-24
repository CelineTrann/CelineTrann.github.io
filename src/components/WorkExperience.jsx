import React from "react";

import WorkCard from "./WorkCard";

export default function WorkExperience () {
    return (
        <div className="container">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-10/12 md:w-full">
                    <h1 className="text-2xl md:self-start">WORK EXPERIENCE</h1>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4 w-10/12 md:w-full">
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                </div>
            </div>
        </div>
    );
}