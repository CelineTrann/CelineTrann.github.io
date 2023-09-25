import React from "react";

import WorkCard from "./WorkCard";
import { workInfo } from "../data/WorkInfo";

export default function WorkExperience () {
    const workList = workInfo.map(item =>
        <WorkCard key={item.startDate} data={item}></WorkCard>
    )

    return (
        <section className="container flex flex-col items-center space-y-4 my-4">
            <div className="w-10/12 md:w-full">
                <h1 className="text-2xl md:self-start">WORK EXPERIENCE</h1>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 w-10/12 md:w-full">                    
                {workList}
            </div>
        </section>
);
}