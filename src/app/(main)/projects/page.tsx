"use client";

import { useState } from "react";
import { projectsInfo } from "@/config/projects";
import ProjectCard from "@/components/layouts/project-card";

const Projects = () => {
    const [activeButton, setActiveButton] = useState<string>("All");

    const handleButtonClick = (item: string) => {
        setActiveButton(item);
    };

    const filteredProjects = activeButton === "All" ? projectsInfo : projectsInfo.filter((project) => project.type === activeButton);

    return (
        <section className="flex flex-col justify-start items-start px-6 md:px-28 py-6 md:py-18 font-normal tracking-wide">
            <div>
                <h2 className="font-unbounded text-lg text-white/80">Projects</h2>
                <nav className="flex justify-start font-prompt text-sm font-normal mt-6">
                    {["All", "Front End", "Full Stack", "Design"].map((item) => (
                        <button
                            key={item}
                            className={`px-3 py-1 rounded text-white/80 mr-1 md:mr-3 ${activeButton === item ? "bg-[#1F1F1F]" : ""
                                }`}
                            onClick={() => handleButtonClick(item)}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        description={project.description}
                        img={project.img}
                        link={project.link}
                        tech_stack={project.tech_stack}
                        type={project.type}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
