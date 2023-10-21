import React from "react";
import { ProjectInfo } from "../data/ProjectInfo";

import NavBar from '../components/NavBar'
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    const projectList = ProjectInfo.map(project =>
        <ProjectCard key={project.name} data={project}></ProjectCard>
    );

    return (
        <main className="w-11/12 md:w-3/5">
            <section className="container flex flex-col items-center space-y-4 my-4">
                <div className="w-10/12 md:w-full">
                    <h1 className="text-2xl md:self-start uppercase">Projects</h1>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4 w-10/12 md:w-full">
                    {projectList}
                </div>
            </section>
        </main>
    );
}