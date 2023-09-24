import React from "react";

import WorkCard from "./WorkCard";

export default function WorkExperience () {
    return (
        <div className="container">
            <div className="flex flex-col space-y-4">
                <h1 className="text-2xl">WORK EXPERIENCE</h1>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                </div>
            </div>
        </div>
    );
}